output "resource_group_name" {
  description = "Created Azure Resource Group name"
  value       = azurerm_resource_group.cloudscale.name
}

output "acr_name" {
  description = "Azure Container Registry name"
  value       = azurerm_container_registry.cloudscale.name
}

output "acr_login_server" {
  description = "ACR login server used by Kubernetes image references"
  value       = azurerm_container_registry.cloudscale.login_server
}

output "aks_name" {
  description = "Azure Kubernetes Service cluster name"
  value       = azurerm_kubernetes_cluster.cloudscale.name
}

output "aks_resource_group" {
  description = "Resource Group containing AKS"
  value       = azurerm_kubernetes_cluster.cloudscale.resource_group_name
}