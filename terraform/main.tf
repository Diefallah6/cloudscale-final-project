resource "azurerm_resource_group" "cloudscale" {
  name     = var.resource_group_name
  location = var.location
  tags     = var.tags
}

resource "azurerm_container_registry" "cloudscale" {
  name                = var.acr_name
  resource_group_name = azurerm_resource_group.cloudscale.name
  location            = azurerm_resource_group.cloudscale.location
  sku                 = "Basic"
  admin_enabled       = false
  tags                = var.tags
}
resource "azurerm_kubernetes_cluster" "cloudscale" {
  name                = var.aks_name
  location            = azurerm_resource_group.cloudscale.location
  resource_group_name = azurerm_resource_group.cloudscale.name
  dns_prefix          = var.dns_prefix
  kubernetes_version  = var.kubernetes_version

  default_node_pool {
    name       = "system"
    node_count = var.node_count
    vm_size    = var.node_vm_size
    type       = "VirtualMachineScaleSets"
  }

  identity {
    type = "SystemAssigned"
  }

  tags = var.tags
}

resource "azurerm_role_assignment" "aks_acr_pull" {
  scope                = azurerm_container_registry.cloudscale.id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_kubernetes_cluster.cloudscale.kubelet_identity[0].object_id
}