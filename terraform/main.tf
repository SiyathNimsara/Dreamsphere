# ==========================================
# 1. TERRAFORM SETTINGS & PROVIDER
# ==========================================

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Tell Terraform which cloud to use and where to build our servers
provider "aws" {
  region = "us-east-1"
}

# ==========================================
# 2. FETCH LATEST UBUNTU LINUX IMAGE
# ==========================================
# Instead of hardcoding an old OS, we ask AWS to find the absolute latest Ubuntu 22.04 OS dynamically.
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical's official AWS account ID

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}

# ==========================================
# 3. FIREWALL (SECURITY GROUP)
# ==========================================
resource "aws_security_group" "dreamsphere_sg" {
  name        = "dreamsphere-security-group"
  description = "Allow Web and SSH traffic"

  # SSH (Port 22) - For you to log in securely
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTP (Port 80) - For the Nginx Website to serve the world
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Custom Port (8080) - We will need this open for Jenkins later
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Egress - Allow the server to download things from the internet (like Docker)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ==========================================
# 4. SSH KEY PAIR UPLOAD
# ==========================================
# This reads the public key you just created on your Mac and uploads it to AWS
resource "aws_key_pair" "dreamsphere_key" {
  key_name   = "dreamsphere-key"
  public_key = file("~/.ssh/dreamsphere-key.pub")
}

# ==========================================
# 5. THE SERVER (EC2 INSTANCE)
# ==========================================
resource "aws_instance" "dreamsphere_server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro" # Updated for new AWS Free Tier rules!
  
  # Attach the Key and the Firewall we made above
  key_name               = aws_key_pair.dreamsphere_key.key_name
  vpc_security_group_ids = [aws_security_group.dreamsphere_sg.id]

  # Name the server
  tags = {
    Name = "DreamSphere-DevOps-Server"
  }
}

# ==========================================
# 6. OUTPUT THE PUBLIC IP
# ==========================================
# When Terraform finishes, print the server's IP address to the terminal so we can use it!
output "server_public_ip" {
  value       = aws_instance.dreamsphere_server.public_ip
  description = "The public IP address of the DreamSphere server"
}