# IP API <in-version value="0.8.0" />

<preview-service name="ip-api" />

Shows information about your IP address.

::: warning Настройка
There are only additional fields described here. The service supports all fields from the [base service](base.md).
:::

## Flag icon

Icon of the country flag where your IP address is located. If you pass `false`, the [base icon](base.md#icon) will be used.

```yaml
options:
  flagIcon: true
```

Values: `true`, `false`

Default: `true`

## Examples

### Base service

::: code-group
```yaml [config.yml]
services:
  - type: ip-api
```
:::

### Custom icon

::: code-group
```yaml [config.yml]
services:
  - type: ip-api
    options:
      flagIcon: false
    icon:
      name: oui:token-ip
```
:::