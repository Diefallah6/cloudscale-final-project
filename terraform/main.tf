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