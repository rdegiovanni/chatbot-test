from datetime import datetime, date, time
from typing import List, Optional, Union, Set
from enum import Enum
from pydantic import BaseModel, field_validator


############################################
# Enumerations are defined here
############################################

############################################
# Classes are defined here
############################################
class UserCreate(BaseModel):
    isActive: bool
    username: str
    id: int
    dateOfBirth: date
    email: str


