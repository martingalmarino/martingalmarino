# Publicar un artículo

Alcanza con agregar un archivo MDX en `src/content/blog/`, su imagen, y mergear a `main`. El build regenera el sitemap, el RSS y `llms.txt`.

## 1. Crear el archivo

Nombre en minúsculas y con guiones, por ejemplo `src/content/blog/mi-nota.mdx`.

La imagen va **al lado** del MDX. Formato PNG, JPG o WebP.

## 2. Frontmatter

```mdx
---
title: Título claro, pensado para una empresa
description: Una o dos frases. Es el texto de Google y de las redes. Máximo unos 160 caracteres.
pubDate: 2026-11-18
updatedDate: 2026-11-18
author: Martín Galmarino
category: Conceptos
tags:
  - seo
heroImage: ./mi-nota.png
heroAlt: Qué se ve en la imagen, en una frase.
draft: true
faq:
  - question: ¿Una pregunta real?
    answer: La respuesta, corta y sin prometer posiciones.
---

Primer párrafo. Escribo en primera persona y voseo.

## Un subtítulo

No uses `#` para el título: el `<h1>` ya está en la plantilla. Empezá en `##`.
```

Campos:

| Campo | Obligatorio | Notas |
| --- | --- | --- |
| `title` | sí | |
| `description` | sí | Resumen. No repitas el título palabra por palabra. |
| `pubDate` | sí | Fecha de calendario, `AAAA-MM-DD`. Se muestra en formato argentino. |
| `updatedDate` | no | Solo si hubo un cambio real. |
| `author` | no | Si lo omitís, queda **Martín Galmarino**. Todas las notas se firman así. |
| `category` | sí | Una de: `Novedades`, `Conceptos`, `Guías para empresas`, `Datos y Argentina`, `Opinión`. |
| `tags` | no | Lista corta. |
| `heroImage` | sí | Ruta relativa, por ejemplo `./mi-nota.png`. |
| `heroAlt` | sí | Describe la imagen. No escribas "imagen de". |
| `draft` | sí | `true` mientras la revisás. `false` para publicarla. |
| `faq` | no | Preguntas visibles al final. También arman el schema FAQPage. |

## 3. Previsualizar

```bash
npm run dev
```

Con `draft: true` la nota se abre en `http://localhost:4321/blog/mi-nota/`. Arriba dice que es un borrador.

## 4. Publicar

1. Pasá `draft: false`.
2. `npm run build` tiene que terminar sin errores.
3. Mergeá a `main`.

En producción la nota aparece en `/blog/`, en su categoría, en la home (si está entre las tres últimas), en el RSS y en `llms.txt`.

## Qué no va en una nota

No inventes precios, clientes, testimonios ni cifras. Si usás un número, la fuente va en el texto, con link.

## Componentes que ya vienen

- Firma de Martín Galmarino.
- Fecha de publicación y, si existe, de actualización.
- Tiempo de lectura.
- Tabla de contenidos con los `##` y `###`.
- Notas relacionadas de la misma categoría o con tags en común.
- Bloque de suscripción semanal: está vacío a propósito. Todavía no hay proveedor. No lo conectes por tu cuenta.
