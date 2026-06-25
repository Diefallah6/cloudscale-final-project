variable "location" {
  description = "Azure region for the project resources"
  type        = string
  default     = "switzerlandnorth"
}

variable "resource_group_name" {
  description = "Resource group name"
  type        = string
  default     = "rg-diefallah-cloudscale-final"
}

variable "acr_name" {
  description = "Globally unique Azure Container Registry name"
  type        = string
  default     = "acrdiefallah4808final26"
}

variable "aks_name" {
  description = "Azure Kubernetes Service cluster name"
  type        = string
  default     = "aks-diefallah-final"
}

variable "dns_prefix" {
  description = "DNS prefix for AKS"
  type        = string
  default     = "cloudscale-diefallah-4808"
}

variable "kubernetes_version" {
  description = "Stable Kubernetes version for AKS"
  type        = string
  default     = "1.35.5"
}

variable "node_count" {
  description = "Number of AKS nodes"
  type        = number
  default     = 2
}

variable "node_vm_size" {
  description = "AKS node virtual machine size"
  type        = string
  default     = "Standard_D2s_v3"
}

variable "tags" {
  description = "Tags applied to Azure resources"
  type        = map(string)

  default = {
    Project     = "Final"
    StudentName = "Diefallah Ateeyah"
  }
}