
from tools import *

def run_agent(action,payload):
    if action=="log":
        return log_interaction_tool(payload)
    if action=="edit":
        return edit_interaction_tool(payload)
    if action=="insight":
        return insight_tool(payload)
    if action=="followup":
        return followup_tool(payload)
    if action=="compliance":
        return compliance_tool(payload)
    return {"error":"unknown action"}
