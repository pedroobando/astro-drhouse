---
tags:
  - IA
  - OpenCode
  - Modelos-LLM
  - Coding
  - Razonamiento
created: 2026-04-15
---

# Modelos OpenCode Go - Guía de Referencia

## Resumen

[[OpenCode Go]] es una suscripción de bajo costo ($5 primer mes, luego $10/mes) que ofrece acceso a modelos abiertos de programación optimizados para coding y razonamiento.

---

## Modelos Disponibles

| Modelo | Creador | Peticiones/mes* | Especialidad |
|--------|---------|-----------------|--------------|
| **GLM-5.1** | Zhipu AI | ~4,300 | Razonamiento complejo |
| **GLM-5** | Zhipu AI | ~5,750 | General + razonamiento |
| **Kimi K2.5** | Moonshot | ~9,250 | Coding + Agentes |
| **MiMo-V2-Pro** | Xiaomi | ~6,450 | Coding especializado |
| **MiMo-V2-Omni** | Xiaomi | ~10,900 | Multimodal + código |
| **Qwen3.6 Plus** | Alibaba | ~16,300 | Híbrido thinking/fast |
| **MiniMax M2.7** | MiniMax | ~17,000 | Contexto largo (4M tokens) |
| **MiniMax M2.5** | MiniMax | ~31,800 | Económico + contexto largo |
| **Qwen3.5 Plus** | Alibaba | ~50,500 | Más económico, buen balance |

*\*Basado en uso típico de OpenCode*

---

## Ranking por Caso de Uso

### 🧠 Razonamiento Complejo

| Rank | Modelo | Por qué |
|------|--------|---------|
| 🥇 1 | **Kimi K2.5** | Modo thinking, agentic capabilities, 256K contexto |
| 🥈 2 | **Qwen3.6 Plus** | Hybrid thinking modes (/think, /no_think), 128K |
| 🥉 3 | **GLM-5.1** | Razonamiento profundo, más lento pero preciso |

### 💻 Código / Coding

| Rank | Modelo | Por qué |
|------|--------|---------|
| 🥇 1 | **Kimi K2.5** | Supera GPT-4o en coding, excellent tool calling |
| 🥈 2 | **MiMo-V2-Pro** | Especializado Xiaomi, buen balance costo/calidad |
| 🥉 3 | **Qwen3.6 Plus** | Refactors complejos, 119 idiomas |

### 📏 Contexto Largo

| Rank | Modelo | Por qué |
|------|--------|---------|
| 🥇 1 | **MiniMax M2.7** | 4 MILLONES de tokens de contexto |
| 🥈 2 | **MiniMax M2.5** | 4M tokens, más económico |
| 🥉 3 | **Kimi K2.5** | 256K tokens |

### ⚡ Velocidad / Economía

| Rank | Modelo | Por qué |
|------|--------|---------|
| 🥇 1 | **Qwen3.5 Plus** | ~50,500 peticiones/mes, muy económico |
| 🥈 2 | **MiniMax M2.5** | ~31,800 peticiones/mes |
| 🥉 3 | **Qwen3.6 Plus** | ~16,300 peticiones/mes, rápido |

---

## Detalle de Modelos Top

### Kimi K2.5 ⭐ RECOMENDADO

- **Arquitectura**: MoE (Mixture-of-Experts) con 1T parámetros
- **Modo Thinking**: Sí (Chain-of-Thought)
- **Contexto**: 256K tokens
- **Especialidad**: Coding + Agentes + Razonamiento
- **Ideal para**: 
  - [[Arquitectura de Software]]
  - [[Clean Architecture]]
  - [[Domain-Driven Design]]
  - Debugging complejo
  - Proyectos grandes

### Qwen3.6 Plus

- **Feature**: Hybrid Thinking Modes
  - `/think` → Razonamiento profundo
  - `/no_think` → Respuesta rápida
- **Contexto**: 128K tokens
- **Idiomas**: 119 idiomas
- **Ideal para**: Tareas mixtas (razonamiento + velocidad)

### MiniMax M2.7

- **Contexto**: 4,000,000 tokens (4M) 🔥
- **Arquitectura**: 456B parámetros, 45.9B activados
- **Ideal para**: Proyectos con codebase enorme

### MiMo-V2-Pro

- **Desarrollador**: Xiaomi
- **Especialidad**: Coding especializado
- **Ideal para**: Code reviews, tests, documentación

---

## Comandos OpenCode

```bash
# Ver modelos disponibles
/models

# Cambiar modelo
/model opencode-go/kimi-k2.5
/model opencode-go/qwen3.6-plus
/model opencode-go/minimax-m2.7
```

---

## Recomendación por Escenario

| Escenario | Modelo Recomendado |
|-----------|-------------------|
| [[Arquitectura]] / [[DDD]] | **Kimi K2.5** |
| Coding puro | **Kimi K2.5** o **MiMo-V2-Pro** |
| Proyecto grande (mucho contexto) | **MiniMax M2.7** |
| Tareas rápidas | **Qwen3.5 Plus** o **MiniMax M2.5** |
| Híbrido (think + fast) | **Qwen3.6 Plus** |

---

## TL;DR

> **Para la mayoría de los casos**: Usá **Kimi K2.5** como default.
> 
> **Para código**: Kimi K2.5 o MiMo-V2-Pro.
> 
> **Para proyectos grandes**: MiniMax M2.7.

---

## Links

- [[OpenCode Go Pricing]]
- [[OpenCode Docs]]
- [[Modelos OpenRouter]]

---

*Última actualización: 2026-04-15*
