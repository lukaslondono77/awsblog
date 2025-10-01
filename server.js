const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample AWS Solutions Architect blog posts
const blogPosts = [
  {
    id: 1,
    title: "Introduction to AWS Solutions Architect",
    category: "Getting Started",
    readTime: "8 min read",
    date: "2025-09-28",
    excerpt: "Learn the fundamentals of AWS Solutions Architect role and the key services you need to master.",
    content: `
# Introduction to AWS Solutions Architect

The AWS Solutions Architect role is one of the most sought-after positions in cloud computing. This comprehensive guide will help you understand what it takes to become a successful AWS Solutions Architect.

## What is a Solutions Architect?

A Solutions Architect is responsible for designing and implementing cloud-based solutions that are:
- **Scalable**: Can handle growth in users and data
- **Reliable**: Maintain high availability and fault tolerance
- **Secure**: Protect data and comply with regulations
- **Cost-effective**: Optimize resource usage and expenses

## Key AWS Services to Master

### 1. Compute Services
- **EC2**: Virtual servers in the cloud
- **Lambda**: Serverless compute
- **ECS/EKS**: Container orchestration

### 2. Storage Services
- **S3**: Object storage
- **EBS**: Block storage for EC2
- **EFS**: Elastic file system

### 3. Database Services
- **RDS**: Managed relational databases
- **DynamoDB**: NoSQL database
- **Aurora**: High-performance relational database

### 4. Networking
- **VPC**: Virtual Private Cloud
- **Route 53**: DNS service
- **CloudFront**: Content delivery network

## The Well-Architected Framework

AWS provides the Well-Architected Framework with six pillars:
1. Operational Excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization
6. Sustainability

Master these concepts to design robust cloud solutions!
    `,
    tags: ["fundamentals", "overview", "getting-started"]
  },
  {
    id: 2,
    title: "Understanding VPC and Networking",
    category: "Networking",
    readTime: "12 min read",
    date: "2025-09-25",
    excerpt: "Deep dive into Virtual Private Cloud (VPC) architecture, subnets, routing, and security groups.",
    content: `
# Understanding VPC and Networking

Amazon Virtual Private Cloud (VPC) is the foundation of your AWS network infrastructure. Understanding VPC is crucial for any Solutions Architect.

## What is a VPC?

A VPC is a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define.

## Core Components

### 1. Subnets
- **Public Subnets**: Resources can communicate with the internet
- **Private Subnets**: Resources are isolated from direct internet access

### 2. Internet Gateway (IGW)
Allows communication between resources in your VPC and the internet.

### 3. NAT Gateway
Enables instances in private subnets to access the internet while remaining private.

### 4. Route Tables
Control where network traffic is directed from your subnet or gateway.

### 5. Security Groups
Virtual firewalls that control inbound and outbound traffic at the instance level.

### 6. Network ACLs
Optional layer of security that acts as a firewall for controlling traffic in and out of subnets.

## Best Practices

1. **Use Multiple Availability Zones**: Distribute resources across AZs for high availability
2. **Implement Defense in Depth**: Use both Security Groups and NACLs
3. **Plan CIDR Blocks Carefully**: Ensure enough IP addresses for growth
4. **Use VPC Flow Logs**: Monitor and troubleshoot connectivity issues
5. **Implement Bastion Hosts**: Secure access to private instances

## Common Architecture Pattern

\`\`\`
Internet Gateway
    ↓
Public Subnet (AZ-1)  |  Public Subnet (AZ-2)
    ↓                       ↓
Load Balancer     ←→   Load Balancer
    ↓                       ↓
Private Subnet    |    Private Subnet
(App Servers)          (App Servers)
    ↓                       ↓
Private Subnet    |    Private Subnet
(Databases)            (Databases)
\`\`\`

Master VPC networking to build secure, scalable AWS architectures!
    `,
    tags: ["networking", "vpc", "security"]
  },
  {
    id: 3,
    title: "S3 Deep Dive: Storage Classes and Lifecycle Policies",
    category: "Storage",
    readTime: "10 min read",
    date: "2025-09-22",
    excerpt: "Master Amazon S3 storage classes, lifecycle policies, and cost optimization strategies.",
    content: `
# S3 Deep Dive: Storage Classes and Lifecycle Policies

Amazon S3 is one of the most fundamental AWS services. Understanding its storage classes and lifecycle policies is essential for cost optimization.

## S3 Storage Classes

### 1. S3 Standard
- **Use Case**: Frequently accessed data
- **Durability**: 99.999999999% (11 nines)
- **Availability**: 99.99%
- **Cost**: Highest storage cost, lowest retrieval cost

### 2. S3 Intelligent-Tiering
- **Use Case**: Unknown or changing access patterns
- **Features**: Automatic cost optimization by moving objects between access tiers
- **Benefit**: No retrieval fees

### 3. S3 Standard-IA (Infrequent Access)
- **Use Case**: Data accessed less frequently but needs rapid access
- **Cost**: Lower storage cost, retrieval fee applies

### 4. S3 One Zone-IA
- **Use Case**: Infrequently accessed, non-critical data
- **Availability**: 99.5% (stored in single AZ)

### 5. S3 Glacier Instant Retrieval
- **Use Case**: Archive data needing immediate access
- **Retrieval**: Milliseconds

### 6. S3 Glacier Flexible Retrieval
- **Use Case**: Archive with retrieval times from minutes to hours
- **Retrieval Options**: Expedited (1-5 min), Standard (3-5 hrs), Bulk (5-12 hrs)

### 7. S3 Glacier Deep Archive
- **Use Case**: Long-term archive (7-10 years)
- **Retrieval**: 12-48 hours
- **Cost**: Lowest storage cost

## Lifecycle Policies

Automate object transitions and expiration:

\`\`\`json
{
  "Rules": [
    {
      "Id": "Archive-Old-Data",
      "Status": "Enabled",
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD_IA"
        },
        {
          "Days": 90,
          "StorageClass": "GLACIER"
        },
        {
          "Days": 365,
          "StorageClass": "DEEP_ARCHIVE"
        }
      ],
      "Expiration": {
        "Days": 2555
      }
    }
  ]
}
\`\`\`

## Best Practices

1. **Use Lifecycle Policies**: Automate transitions to optimize costs
2. **Enable Versioning**: Protect against accidental deletions
3. **Implement Encryption**: Use SSE-S3, SSE-KMS, or SSE-C
4. **Use S3 Analytics**: Understand access patterns
5. **Enable Access Logging**: Track requests for security and compliance

## Cost Optimization Tips

- Use Intelligent-Tiering for unpredictable workloads
- Archive infrequently accessed data to Glacier
- Delete incomplete multipart uploads
- Use S3 Inventory to analyze storage
- Compress objects before uploading

Master S3 to build cost-effective storage solutions!
    `,
    tags: ["storage", "s3", "cost-optimization"]
  },
  {
    id: 4,
    title: "High Availability and Fault Tolerance",
    category: "Architecture",
    readTime: "15 min read",
    date: "2025-09-20",
    excerpt: "Design highly available and fault-tolerant architectures using AWS services and best practices.",
    content: `
# High Availability and Fault Tolerance

Building resilient systems is a core responsibility of Solutions Architects. Learn how to design for high availability and fault tolerance.

## Key Concepts

### High Availability (HA)
Systems designed to operate continuously without failure for a long time. Target: 99.99% (52.56 min downtime/year) or higher.

### Fault Tolerance
System's ability to continue operating properly in the event of failure of some components.

## AWS Availability Zones and Regions

- **Region**: Geographic area with multiple isolated locations (AZs)
- **Availability Zone**: One or more discrete data centers with redundant power, networking, and connectivity
- **Design Principle**: Deploy across multiple AZs for high availability

## Strategies for High Availability

### 1. Multi-AZ Deployments

**RDS Multi-AZ**
- Automatic failover to standby instance
- Synchronous replication
- Automatic backups from standby

**EC2 Auto Scaling**
- Launch instances across multiple AZs
- Automatic replacement of unhealthy instances
- Scale based on demand

### 2. Elastic Load Balancing

**Application Load Balancer (ALB)**
- Operates at Layer 7 (HTTP/HTTPS)
- Content-based routing
- Health checks and automatic failover

**Network Load Balancer (NLB)**
- Operates at Layer 4 (TCP/UDP)
- Ultra-low latency
- Static IP addresses

### 3. Auto Scaling Groups

\`\`\`
Minimum: 2 instances
Desired: 4 instances
Maximum: 10 instances

Spread across 3 AZs
Health checks: EC2 + ELB
\`\`\`

### 4. Data Replication

- **S3**: 99.999999999% durability, replicated across AZs
- **DynamoDB**: Multi-AZ replication by default
- **EFS**: Redundant storage across multiple AZs

## Fault Tolerance Patterns

### 1. Loose Coupling
Use SQS, SNS, and EventBridge to decouple components

### 2. Circuit Breaker
Prevent cascading failures by failing fast

### 3. Retry with Exponential Backoff
Handle transient failures gracefully

### 4. Graceful Degradation
Provide reduced functionality during failures

## Example Architecture

\`\`\`
Route 53 (DNS with health checks)
    ↓
CloudFront (CDN)
    ↓
Application Load Balancer
    ↓
Auto Scaling Group (Multi-AZ)
    ↓
RDS Multi-AZ + Read Replicas
    ↓
S3 (Static assets)
ElastiCache (Session storage)
\`\`\`

## Disaster Recovery Strategies

1. **Backup and Restore**: Lowest cost, highest RTO/RPO
2. **Pilot Light**: Minimal replication, faster recovery
3. **Warm Standby**: Scaled-down version always running
4. **Multi-Site Active/Active**: Highest cost, lowest RTO/RPO

## Best Practices

1. **Assume Everything Fails**: Design for failure
2. **Use Multiple AZs**: Never single point of failure
3. **Automate Recovery**: Use Auto Scaling and health checks
4. **Test Failure Scenarios**: Regular chaos engineering
5. **Monitor Everything**: CloudWatch, X-Ray, CloudTrail

Build resilient architectures that users can rely on!
    `,
    tags: ["architecture", "high-availability", "fault-tolerance", "resilience"]
  },
  {
    id: 5,
    title: "Serverless Architecture with Lambda",
    category: "Compute",
    readTime: "11 min read",
    date: "2025-09-18",
    excerpt: "Build scalable serverless applications using AWS Lambda, API Gateway, and event-driven architecture.",
    content: `
# Serverless Architecture with Lambda

Serverless computing allows you to build and run applications without managing servers. AWS Lambda is at the heart of serverless on AWS.

## What is AWS Lambda?

Lambda is a compute service that runs your code in response to events and automatically manages the compute resources.

### Key Benefits

- **No Server Management**: AWS handles all infrastructure
- **Automatic Scaling**: From a few requests to thousands per second
- **Pay-per-Use**: Only pay for compute time consumed
- **Built-in Fault Tolerance**: High availability by default

## Lambda Execution Model

\`\`\`
Event Source → Lambda Function → Destination
(Trigger)      (Your Code)       (Output)
\`\`\`

## Common Event Sources

1. **API Gateway**: HTTP/REST APIs
2. **S3**: Object creation/deletion events
3. **DynamoDB Streams**: Database changes
4. **SNS/SQS**: Message queues
5. **CloudWatch Events**: Scheduled tasks
6. **Kinesis**: Real-time data streams

## Serverless Application Architecture

\`\`\`
Client
  ↓
API Gateway (REST/HTTP API)
  ↓
Lambda Functions
  ↓
DynamoDB / RDS Proxy / S3
  ↓
SNS/SQS (Async processing)
\`\`\`

## Lambda Best Practices

### 1. Function Design
- Keep functions small and focused (single responsibility)
- Minimize cold start time
- Use environment variables for configuration
- Implement proper error handling

### 2. Performance Optimization
- **Memory Allocation**: More memory = more CPU
- **Connection Reuse**: Keep database connections outside handler
- **Provisioned Concurrency**: Eliminate cold starts for critical functions
- **Layers**: Share code and dependencies

### 3. Security
- **Least Privilege IAM**: Grant minimum required permissions
- **Environment Variables**: Use encryption for secrets
- **VPC**: Secure access to private resources
- **Secrets Manager**: Store sensitive data securely

## Example: Serverless API

\`\`\`javascript
// Lambda function handler
exports.handler = async (event) => {
    const { httpMethod, path, body } = event;
    
    try {
        switch (path) {
            case '/users':
                if (httpMethod === 'GET') {
                    // Get users from DynamoDB
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ users: [] })
                    };
                }
                break;
            default:
                return {
                    statusCode: 404,
                    body: JSON.stringify({ message: 'Not Found' })
                };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
\`\`\`

## Serverless Framework Patterns

### 1. API Backend
API Gateway + Lambda + DynamoDB

### 2. Data Processing Pipeline
S3 → Lambda → Process → S3/Database

### 3. Real-time Stream Processing
Kinesis → Lambda → Analytics → Dashboard

### 4. Scheduled Tasks
CloudWatch Events → Lambda → Task Execution

## Limitations to Consider

- **Execution Time**: Max 15 minutes
- **Memory**: 128 MB to 10,240 MB
- **Deployment Package**: 50 MB (zipped), 250 MB (unzipped)
- **Concurrent Executions**: Default 1,000 per region (can be increased)

## Cost Optimization

1. **Right-Size Memory**: Test to find optimal memory allocation
2. **Use Reserved Concurrency**: For predictable workloads
3. **Optimize Code**: Reduce execution time
4. **Use AWS Lambda Power Tuning**: Find cost-performance sweet spot

## When to Use Lambda

✅ Event-driven workloads
✅ Microservices
✅ Data transformation
✅ Scheduled tasks
✅ Backend for mobile/web apps

❌ Long-running processes (>15 min)
❌ High-performance computing
❌ Stateful applications

Master serverless to build modern, scalable applications!
    `,
    tags: ["serverless", "lambda", "compute", "architecture"]
  }
];

// API Routes

// Health check
app.get('/api/healthz', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Get all blog posts (summary)
app.get('/api/posts', (req, res) => {
  const summaries = blogPosts.map(({ id, title, category, readTime, date, excerpt, tags }) => ({
    id,
    title,
    category,
    readTime,
    date,
    excerpt,
    tags
  }));
  res.json(summaries);
});

// Get single blog post by ID
app.get('/api/posts/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});

// Get posts by category
app.get('/api/categories/:category', (req, res) => {
  const filtered = blogPosts.filter(p => 
    p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(filtered);
});

// Get all categories
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(blogPosts.map(p => p.category))];
  res.json(categories);
});

app.listen(PORT, () => {
  console.log(`🚀 AWS Solutions Architect Blog API running on port ${PORT}`);
  console.log(`📚 Health check: http://localhost:${PORT}/api/healthz`);
  console.log(`📝 Blog posts: http://localhost:${PORT}/api/posts`);
});


