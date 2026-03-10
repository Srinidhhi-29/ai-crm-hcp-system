# AI CRM – HCP Interaction Platform

This project implements an AI-first CRM system for managing interactions with Healthcare Professionals (HCPs).

## Tech Stack

Frontend:
- React
- Material UI

Backend:
- Python FastAPI

AI Agent:
- Tool-based architecture inspired by LangGraph

LLM:
- Designed for integration with Groq models such as gemma2-9b-it.

Database:
- PostgreSQL / MySQL (design ready)

## Features

1. Log HCP Interaction (Structured Form)
2. Conversational AI Assistant
3. AI-based Follow-up Recommendation
4. Modular Agent Tools
5. FastAPI Backend APIs

## AI Agent Tools

- Log Interaction Tool
- Edit Interaction Tool
- HCP Insight Tool
- Follow-up Recommendation Tool
- Compliance Tool

## Architecture

React UI → FastAPI Backend → AI Agent → Tools

## How to Run

Backend:

uvicorn main:app --reload

Frontend:

npm install
npm start
