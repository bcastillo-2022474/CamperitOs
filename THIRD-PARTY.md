# Software y materiales de terceros

CamperitOs es una distribución derivada de **Fedora Linux**. Este documento explica qué licencias aplican a qué, y cómo obtener el código fuente de lo que distribuimos.

> La licencia MIT del archivo `LICENSE` cubre **solo el código original de este repositorio**. No cambia ni reemplaza la licencia de ningún componente de terceros.

## 1. Base: Fedora

- Los paquetes que provienen de los repositorios oficiales de Fedora conservan la licencia que cada uno declara en su RPM (el campo `License:` del spec file). La mayoría son GPL, LGPL, MIT, BSD o Apache-2.0.
- Para ver la licencia de cualquier paquete instalado:

  ```bash
  rpm -qi <paquete> | grep -i license
  ```

- Para obtener el código fuente de un paquete de Fedora:

  ```bash
  dnf download --source <paquete>
  ```

  También está disponible en https://src.fedoraproject.org y en los repositorios de código fuente de Fedora.
- Las marcas de Fedora (nombre y logos) **no** se incluyen en CamperitOs. Los paquetes `fedora-logos` y `fedora-release` se reemplazan por equivalentes propios. CamperitOs no está afiliada ni respaldada por el Proyecto Fedora ni por Red Hat.

## 2. Código fuente de lo que distribuimos en la ISO

Para cumplir con las licencias copyleft (GPL, LGPL, etc.), nos comprometemos a que el código fuente correspondiente a todo binario que distribuimos esté disponible.

## 3. Software no libre o con restricciones

Fedora no incluye ciertos códecs ni drivers propietarios. Si CamperitOs ofrece alguno (por ejemplo vía RPM Fusion u otro origen), estos deben cumplir:

- Vivir en un repositorio **separado y desactivado por defecto**, nunca mezclado con el repo principal.
- Estar listados en la tabla de la sección 5 con su licencia y origen.
- Estar documentados para que el usuario sepa que acepta una licencia distinta.

## 4. Contenido visual y fuentes

| Tipo | Regla |
|---|---|
| Wallpapers, temas e iconos propios | CC BY-SA 4.0 |
| Material de terceros (fotos, iconos, temas) | Se lista abajo con autor, licencia y enlace |
| Fuentes tipográficas | Solo con licencia libre (por ejemplo OFL); se listan abajo |

## 5. Registro de componentes de terceros añadidos por nosotros

Todo lo que agreguemos más allá de los paquetes estándar de Fedora debe registrarse aquí **en el mismo PR que lo introduce**.

| Componente | Versión | Origen | Licencia (SPDX) | Uso en el proyecto |
|---|---|---|---|---|
| _ejemplo: fuente X_ | _1.0_ | _https://..._ | _OFL-1.1_ | _fuente por defecto del terminal_ |
| | | | | |

## 6. Proceso para añadir un componente

1. Verificar que la licencia es libre y compatible con su uso y distribución en la ISO.
2. Anotar en la tabla de la sección 5: nombre, versión, origen, licencia (identificador SPDX) y para qué se usa.
3. Si el componente es copyleft, confirmar que podemos ofrecer su código fuente.
4. Si no es libre, seguir las reglas de la sección 3.
5. Incluir su texto de licencia en `licenses/` cuando la licencia lo exija (por ejemplo, avisos de copyright de MIT/BSD).

## 7. Contribuciones

Las contribuciones al código se aceptan bajo la licencia MIT del repositorio y con **DCO** (`Signed-off-by` en cada commit). Quien contribuya declara que tiene derecho a aportar ese trabajo y que no incluye código de terceros sin registrarlo aquí.