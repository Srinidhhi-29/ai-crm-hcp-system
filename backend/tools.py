def log_interaction_tool(payload):
    return {
        "tool": "log_interaction",
        "data": payload
    }


def edit_interaction_tool(payload):
    return {
        "tool": "edit_interaction",
        "data": payload
    }


def insight_tool(payload):
    return {
        "tool": "hcp_insight",
        "hcp": payload.get("hcp_name")
    }


def followup_tool(payload):

    text = payload.get("text", "").lower()

    if "dosage" in text:
        suggestion = "Share dosage guidelines and follow up tomorrow"

    elif "brochure" in text:
        suggestion = "Send product brochure and schedule follow up next week"

    elif "clinical trial" in text:
        suggestion = "Provide clinical trial data and arrange meeting with medical team"

    elif "side effects" in text:
        suggestion = "Share safety profile and adverse effects documentation"

    else:
        suggestion = "Schedule follow up next week"

    return {
        "tool": "followup",
        "suggestion": suggestion
    }


def compliance_tool(payload):
    return {
        "tool": "compliance",
        "status": "ok"
    }