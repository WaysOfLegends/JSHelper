enum StatusCode {
    InformationalClassResponse = "\\b10[0-2]\\b",
    SuccessClassResponse = "\\b2(?:0[0-8]|26)\\b",
    RedirectionClassResponse = "\\b30[0-578]\\b",
    ClientErrorResponse = "\\b4(?:0/d|1[0-8]|2[1-4689]|31|4{2}|51|9{2})\\b",
    ServerErrorResponse = "\\b5(?:0[08]|1[01]|9{2})\\b"
}

export StatusCode;
