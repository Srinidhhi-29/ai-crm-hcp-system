
from fastapi import FastAPI
from pydantic import BaseModel
from agent import run_agent
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI CRM HCP")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class AgentRequest(BaseModel):
    action:str
    payload:dict

@app.get("/health")
def health():
    return {"status":"running"}

@app.post("/agent")
def agent(req:AgentRequest):
    return run_agent(req.action,req.payload)
