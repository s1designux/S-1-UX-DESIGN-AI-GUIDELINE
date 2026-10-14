/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* 승인 조합 목록 — 표(specs/*.js)의 루트가 읽는 상태에서 기계로 뽑았다.
   props 는 부품에 그대로 넘기는 값이고, web 은 같은 조합을 웹 배포본 DOM 으로 만들 때 쓰는 정보다(렌더 대조 도구가 읽는다). */
export const CASES = [
 {
  "id": "input/pc/-/xxsm/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xxsm/default",
  "props": {
   "breakName": "pc",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "input/pc/-/xsm/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xsm/default",
  "props": {
   "breakName": "pc",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "input/pc/-/md/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/md/default",
  "props": {
   "breakName": "pc",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "input/pc/-/xxsm/filled",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xxsm/filled",
  "props": {
   "breakName": "pc",
   "defaultValue": "입력한 내용",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "value": "입력한 내용"
     }
    }
   ]
  }
 },
 {
  "id": "input/pc/-/xxsm/focus",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xxsm/focus",
  "props": {
   "breakName": "pc",
   "forceState": "focus",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "control",
     "force": "focus"
    }
   ],
   "force": "focus"
  }
 },
 {
  "id": "input/pc/-/xxsm/error",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xxsm/error",
  "props": {
   "breakName": "pc",
   "invalid": true,
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "aria-invalid": "true"
     }
    }
   ]
  }
 },
 {
  "id": "input/pc/-/xxsm/correct",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xxsm/correct",
  "props": {
   "breakName": "pc",
   "data-state": "correct",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm",
    "data-state": "correct"
   }
  }
 },
 {
  "id": "input/pc/-/xxsm/readOnly",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xxsm/readOnly",
  "props": {
   "breakName": "pc",
   "readOnly": true,
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "readonly": ""
     }
    }
   ]
  }
 },
 {
  "id": "input/pc/-/xxsm/disabled",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc · -/xxsm/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "input/mobile/-/md/default",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile · -/md/default",
  "props": {
   "breakName": "mobile",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "input/mobile/-/md/filled",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile · -/md/filled",
  "props": {
   "breakName": "mobile",
   "defaultValue": "입력한 내용",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "value": "입력한 내용"
     }
    }
   ]
  }
 },
 {
  "id": "input/mobile/-/md/focus",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile · -/md/focus",
  "props": {
   "breakName": "mobile",
   "forceState": "focus",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "control",
     "force": "focus"
    }
   ],
   "force": "focus"
  }
 },
 {
  "id": "input/mobile/-/md/error",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile · -/md/error",
  "props": {
   "breakName": "mobile",
   "invalid": true,
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "aria-invalid": "true"
     }
    }
   ]
  }
 },
 {
  "id": "input/mobile/-/md/correct",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile · -/md/correct",
  "props": {
   "breakName": "mobile",
   "data-state": "correct",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md",
    "data-state": "correct"
   }
  }
 },
 {
  "id": "input/mobile/-/md/readOnly",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile · -/md/readOnly",
  "props": {
   "breakName": "mobile",
   "readOnly": true,
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "readonly": ""
     }
    }
   ]
  }
 },
 {
  "id": "input/mobile/-/md/disabled",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile · -/md/disabled",
  "props": {
   "breakName": "mobile",
   "disabled": true,
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "control",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "input/pc:password/-/xxsm/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc:password · -/xxsm/default",
  "props": {
   "breakName": "pc",
   "mode": "password",
   "size": "xxsm"
  },
  "web": {
   "example": "password",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "input/pc:password/-/xsm/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc:password · -/xsm/default",
  "props": {
   "breakName": "pc",
   "mode": "password",
   "size": "xsm"
  },
  "web": {
   "example": "password",
   "instance": 0,
   "attributes": {
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "input/pc:password/-/md/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc:password · -/md/default",
  "props": {
   "breakName": "pc",
   "mode": "password",
   "size": "md"
  },
  "web": {
   "example": "password",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "input/mobile:password/-/md/default",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile:password · -/md/default",
  "props": {
   "breakName": "mobile",
   "mode": "password",
   "size": "md"
  },
  "web": {
   "example": "password-mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "input/pc:search/-/xxsm/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc:search · -/xxsm/default",
  "props": {
   "breakName": "pc",
   "mode": "search",
   "size": "xxsm"
  },
  "web": {
   "example": "search",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "input/pc:search/-/xsm/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc:search · -/xsm/default",
  "props": {
   "breakName": "pc",
   "mode": "search",
   "size": "xsm"
  },
  "web": {
   "example": "search",
   "instance": 0,
   "attributes": {
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "input/pc:search/-/md/default",
  "component": "S1Input",
  "break": "pc",
  "title": "input · pc:search · -/md/default",
  "props": {
   "breakName": "pc",
   "mode": "search",
   "size": "md"
  },
  "web": {
   "example": "search",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "input/mobile:search/-/md/default",
  "component": "S1Input",
  "break": "mobile",
  "title": "input · mobile:search · -/md/default",
  "props": {
   "breakName": "mobile",
   "mode": "search",
   "size": "md"
  },
  "web": {
   "example": "search-mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "button/pc/primary/md/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · primary/md/default",
  "props": {
   "breakName": "pc",
   "variant": "primary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "md"
   }
  }
 },
 {
  "id": "button/pc/primary/xsm/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · primary/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "primary",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "button/pc/primary/xxsm/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · primary/xxsm/default",
  "props": {
   "breakName": "pc",
   "variant": "primary",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "button/pc/secondary/md/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · secondary/md/default",
  "props": {
   "breakName": "pc",
   "variant": "secondary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "md"
   }
  }
 },
 {
  "id": "button/pc/secondary/xsm/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · secondary/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "secondary",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "button/pc/secondary/xxsm/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · secondary/xxsm/default",
  "props": {
   "breakName": "pc",
   "variant": "secondary",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "button/pc/blue-line/md/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · blue-line/md/default",
  "props": {
   "breakName": "pc",
   "variant": "blue-line",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "md"
   }
  }
 },
 {
  "id": "button/pc/blue-line/xsm/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · blue-line/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "blue-line",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "button/pc/blue-line/xxsm/default",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · blue-line/xxsm/default",
  "props": {
   "breakName": "pc",
   "variant": "blue-line",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "button/pc/primary/md/hover",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · primary/md/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover",
   "variant": "primary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "md"
   },
   "force": "hover"
  }
 },
 {
  "id": "button/pc/primary/md/pressed",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · primary/md/pressed",
  "props": {
   "breakName": "pc",
   "forceState": "pressed",
   "variant": "primary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "md"
   },
   "force": "pressed"
  }
 },
 {
  "id": "button/pc/primary/md/disabled",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · primary/md/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "variant": "primary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "md"
   },
   "disabled": true
  }
 },
 {
  "id": "button/pc/secondary/md/hover",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · secondary/md/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover",
   "variant": "secondary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "md"
   },
   "force": "hover"
  }
 },
 {
  "id": "button/pc/secondary/md/pressed",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · secondary/md/pressed",
  "props": {
   "breakName": "pc",
   "forceState": "pressed",
   "variant": "secondary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "md"
   },
   "force": "pressed"
  }
 },
 {
  "id": "button/pc/secondary/md/disabled",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · secondary/md/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "variant": "secondary",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "md"
   },
   "disabled": true
  }
 },
 {
  "id": "button/pc/blue-line/md/hover",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · blue-line/md/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover",
   "variant": "blue-line",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "md"
   },
   "force": "hover"
  }
 },
 {
  "id": "button/pc/blue-line/md/pressed",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · blue-line/md/pressed",
  "props": {
   "breakName": "pc",
   "forceState": "pressed",
   "variant": "blue-line",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "md"
   },
   "force": "pressed"
  }
 },
 {
  "id": "button/pc/blue-line/md/disabled",
  "component": "S1Button",
  "break": "pc",
  "title": "button · pc · blue-line/md/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "variant": "blue-line",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "md"
   },
   "disabled": true
  }
 },
 {
  "id": "button/mobile/primary/lg/default",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · primary/lg/default",
  "props": {
   "breakName": "mobile",
   "variant": "primary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "lg"
   }
  }
 },
 {
  "id": "button/mobile/secondary/lg/default",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · secondary/lg/default",
  "props": {
   "breakName": "mobile",
   "variant": "secondary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "lg"
   }
  }
 },
 {
  "id": "button/mobile/blue-line/lg/default",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · blue-line/lg/default",
  "props": {
   "breakName": "mobile",
   "variant": "blue-line",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "lg"
   }
  }
 },
 {
  "id": "button/mobile/primary/lg/hover",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · primary/lg/hover",
  "props": {
   "breakName": "mobile",
   "forceState": "hover",
   "variant": "primary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "lg"
   },
   "force": "hover"
  }
 },
 {
  "id": "button/mobile/primary/lg/pressed",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · primary/lg/pressed",
  "props": {
   "breakName": "mobile",
   "forceState": "pressed",
   "variant": "primary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "lg"
   },
   "force": "pressed"
  }
 },
 {
  "id": "button/mobile/primary/lg/disabled",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · primary/lg/disabled",
  "props": {
   "breakName": "mobile",
   "disabled": true,
   "variant": "primary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "primary",
    "data-size": "lg"
   },
   "disabled": true
  }
 },
 {
  "id": "button/mobile/secondary/lg/hover",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · secondary/lg/hover",
  "props": {
   "breakName": "mobile",
   "forceState": "hover",
   "variant": "secondary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "lg"
   },
   "force": "hover"
  }
 },
 {
  "id": "button/mobile/secondary/lg/pressed",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · secondary/lg/pressed",
  "props": {
   "breakName": "mobile",
   "forceState": "pressed",
   "variant": "secondary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "lg"
   },
   "force": "pressed"
  }
 },
 {
  "id": "button/mobile/secondary/lg/disabled",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · secondary/lg/disabled",
  "props": {
   "breakName": "mobile",
   "disabled": true,
   "variant": "secondary",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary",
    "data-size": "lg"
   },
   "disabled": true
  }
 },
 {
  "id": "button/mobile/blue-line/lg/hover",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · blue-line/lg/hover",
  "props": {
   "breakName": "mobile",
   "forceState": "hover",
   "variant": "blue-line",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "lg"
   },
   "force": "hover"
  }
 },
 {
  "id": "button/mobile/blue-line/lg/pressed",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · blue-line/lg/pressed",
  "props": {
   "breakName": "mobile",
   "forceState": "pressed",
   "variant": "blue-line",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "lg"
   },
   "force": "pressed"
  }
 },
 {
  "id": "button/mobile/blue-line/lg/disabled",
  "component": "S1Button",
  "break": "mobile",
  "title": "button · mobile · blue-line/lg/disabled",
  "props": {
   "breakName": "mobile",
   "disabled": true,
   "variant": "blue-line",
   "size": "lg"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "blue-line",
    "data-size": "lg"
   },
   "disabled": true
  }
 },
 {
  "id": "checkbox/pc/-/-/default",
  "component": "S1Checkbox",
  "break": "pc",
  "title": "checkbox · pc · -/-/default",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "checkbox/pc/-/-/hover",
  "component": "S1Checkbox",
  "break": "pc",
  "title": "checkbox · pc · -/-/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "control": {
     "forceState": "hover"
    }
   }
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "checkbox/pc/-/-/checked",
  "component": "S1Checkbox",
  "break": "pc",
  "title": "checkbox · pc · -/-/checked",
  "props": {
   "breakName": "pc",
   "checked": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "checked": ""
     }
    }
   ]
  }
 },
 {
  "id": "checkbox/pc/-/-/disabled",
  "component": "S1Checkbox",
  "break": "pc",
  "title": "checkbox · pc · -/-/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "checkbox/pc/-/-/disabledChecked",
  "component": "S1Checkbox",
  "break": "pc",
  "title": "checkbox · pc · -/-/disabledChecked",
  "props": {
   "breakName": "pc",
   "checked": true,
   "disabled": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "checked": "",
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "radio/pc/-/-/default",
  "component": "S1Radio",
  "break": "pc",
  "title": "radio · pc · -/-/default",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "radio/pc/-/-/hover",
  "component": "S1Radio",
  "break": "pc",
  "title": "radio · pc · -/-/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "control": {
     "forceState": "hover"
    }
   }
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "radio/pc/-/-/selected",
  "component": "S1Radio",
  "break": "pc",
  "title": "radio · pc · -/-/selected",
  "props": {
   "breakName": "pc",
   "checked": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "checked": ""
     }
    }
   ]
  }
 },
 {
  "id": "radio/pc/-/-/disabled",
  "component": "S1Radio",
  "break": "pc",
  "title": "radio · pc · -/-/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "radio/pc/-/-/disabledSelected",
  "component": "S1Radio",
  "break": "pc",
  "title": "radio · pc · -/-/disabledSelected",
  "props": {
   "breakName": "pc",
   "checked": true,
   "disabled": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "checked": "",
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "toggle/pc/-/-/default",
  "component": "S1Toggle",
  "break": "pc",
  "title": "toggle · pc · -/-/default",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "toggle/pc/-/-/disabled",
  "component": "S1Toggle",
  "break": "pc",
  "title": "toggle · pc · -/-/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "disabled": true
  }
 },
 {
  "id": "toggle/pc/-/-/aria-checked=true",
  "component": "S1Toggle",
  "break": "pc",
  "title": "toggle · pc · -/-/aria-checked=true",
  "props": {
   "breakName": "pc",
   "aria-checked": "true"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "aria-checked": "true"
   }
  }
 },
 {
  "id": "toggle/pc/-/-/disabledOn",
  "component": "S1Toggle",
  "break": "pc",
  "title": "toggle · pc · -/-/disabledOn",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "aria-checked": "true"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "aria-checked": "true"
   },
   "disabled": true
  }
 },
 {
  "id": "chip/pc/line/sm/default",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · line/sm/default",
  "props": {
   "breakName": "pc",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "chip/pc/line/md/default",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · line/md/default",
  "props": {
   "breakName": "pc",
   "variant": "line",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "md"
   }
  }
 },
 {
  "id": "chip/pc/solid/sm/default",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · solid/sm/default",
  "props": {
   "breakName": "pc",
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "chip/pc/solid/md/default",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · solid/md/default",
  "props": {
   "breakName": "pc",
   "variant": "solid",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "md"
   }
  }
 },
 {
  "id": "chip/pc/line/sm/hover",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · line/sm/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "force": "hover"
  }
 },
 {
  "id": "chip/pc/line/sm/disabled",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · line/sm/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "disabled": true
  }
 },
 {
  "id": "chip/pc/line/sm/aria-pressed=true",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · line/sm/aria-pressed=true",
  "props": {
   "breakName": "pc",
   "aria-pressed": "true",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm",
    "aria-pressed": "true"
   }
  }
 },
 {
  "id": "chip/pc/solid/sm/hover",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · solid/sm/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover",
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   },
   "force": "hover"
  }
 },
 {
  "id": "chip/pc/solid/sm/disabled",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · solid/sm/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   },
   "disabled": true
  }
 },
 {
  "id": "chip/pc/solid/sm/aria-pressed=true",
  "component": "S1Chip",
  "break": "pc",
  "title": "chip · pc · solid/sm/aria-pressed=true",
  "props": {
   "breakName": "pc",
   "aria-pressed": "true",
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm",
    "aria-pressed": "true"
   }
  }
 },
 {
  "id": "chip/mobile/line/sm/default",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · line/sm/default",
  "props": {
   "breakName": "mobile",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "chip/mobile/solid/sm/default",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · solid/sm/default",
  "props": {
   "breakName": "mobile",
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "chip/mobile/line/sm/hover",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · line/sm/hover",
  "props": {
   "breakName": "mobile",
   "forceState": "hover",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "force": "hover"
  }
 },
 {
  "id": "chip/mobile/line/sm/disabled",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · line/sm/disabled",
  "props": {
   "breakName": "mobile",
   "disabled": true,
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "disabled": true
  }
 },
 {
  "id": "chip/mobile/line/sm/aria-pressed=true",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · line/sm/aria-pressed=true",
  "props": {
   "breakName": "mobile",
   "aria-pressed": "true",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm",
    "aria-pressed": "true"
   }
  }
 },
 {
  "id": "chip/mobile/solid/sm/hover",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · solid/sm/hover",
  "props": {
   "breakName": "mobile",
   "forceState": "hover",
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   },
   "force": "hover"
  }
 },
 {
  "id": "chip/mobile/solid/sm/disabled",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · solid/sm/disabled",
  "props": {
   "breakName": "mobile",
   "disabled": true,
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   },
   "disabled": true
  }
 },
 {
  "id": "chip/mobile/solid/sm/aria-pressed=true",
  "component": "S1Chip",
  "break": "mobile",
  "title": "chip · mobile · solid/sm/aria-pressed=true",
  "props": {
   "breakName": "mobile",
   "aria-pressed": "true",
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm",
    "aria-pressed": "true"
   }
  }
 },
 {
  "id": "dropdown/pc#text.0/text/xxsm/default",
  "component": "S1Dropdown",
  "break": "pc",
  "title": "dropdown · pc#text.0 · text/xxsm/default",
  "props": {
   "breakName": "pc",
   "variant": "text",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "text",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "dropdown/pc#text.0/text/xsm/default",
  "component": "S1Dropdown",
  "break": "pc",
  "title": "dropdown · pc#text.0 · text/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "text",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "text",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "dropdown/pc#text.0/text/md/default",
  "component": "S1Dropdown",
  "break": "pc",
  "title": "dropdown · pc#text.0 · text/md/default",
  "props": {
   "breakName": "pc",
   "variant": "text",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "text",
    "data-size": "md"
   }
  }
 },
 {
  "id": "dropdown/pc#text.0/text/xxsm/hover",
  "component": "S1Dropdown",
  "break": "pc",
  "title": "dropdown · pc#text.0 · text/xxsm/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "option": {
     "forceState": "hover"
    }
   },
   "variant": "text",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "text",
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "option",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "dropdown/pc#checkbox.1/checkbox/xxsm/default",
  "component": "S1Dropdown",
  "break": "pc",
  "title": "dropdown · pc#checkbox.1 · checkbox/xxsm/default",
  "props": {
   "breakName": "pc",
   "variant": "checkbox",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "checkbox",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "dropdown/pc#checkbox.1/checkbox/xsm/default",
  "component": "S1Dropdown",
  "break": "pc",
  "title": "dropdown · pc#checkbox.1 · checkbox/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "checkbox",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "checkbox",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "dropdown/pc#checkbox.1/checkbox/md/default",
  "component": "S1Dropdown",
  "break": "pc",
  "title": "dropdown · pc#checkbox.1 · checkbox/md/default",
  "props": {
   "breakName": "pc",
   "variant": "checkbox",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "checkbox",
    "data-size": "md"
   }
  }
 },
 {
  "id": "select/pc/-/xxsm/default",
  "component": "S1Select",
  "break": "pc",
  "title": "select · pc · -/xxsm/default",
  "props": {
   "breakName": "pc",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "select/pc/-/xsm/default",
  "component": "S1Select",
  "break": "pc",
  "title": "select · pc · -/xsm/default",
  "props": {
   "breakName": "pc",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "select/pc/-/md/default",
  "component": "S1Select",
  "break": "pc",
  "title": "select · pc · -/md/default",
  "props": {
   "breakName": "pc",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "select/pc/-/xxsm/open",
  "component": "S1Select",
  "break": "pc",
  "title": "select · pc · -/xxsm/open",
  "frame": {
   "width": 480,
   "height": 200
  },
  "props": {
   "breakName": "pc",
   "open": true,
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "open": true
  }
 },
 {
  "id": "select/pc/-/xxsm/hover",
  "component": "S1Select",
  "break": "pc",
  "title": "select · pc · -/xxsm/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "select/pc/-/xxsm/filled",
  "component": "S1Select",
  "break": "pc",
  "title": "select · pc · -/xxsm/filled",
  "props": {
   "breakName": "pc",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "act": [
    {
     "part": "trigger"
    },
    {
     "part": "option",
     "text": "서울"
    }
   ]
  }
 },
 {
  "id": "select/pc/-/xxsm/disabled",
  "component": "S1Select",
  "break": "pc",
  "title": "select · pc · -/xxsm/disabled",
  "props": {
   "breakName": "pc",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "select/mobile/-/md/default",
  "component": "S1Select",
  "break": "mobile",
  "title": "select · mobile · -/md/default",
  "props": {
   "breakName": "mobile",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "select/mobile/-/md/open",
  "component": "S1Select",
  "break": "mobile",
  "title": "select · mobile · -/md/open",
  "frame": {
   "width": 360,
   "height": 200
  },
  "props": {
   "breakName": "mobile",
   "open": true,
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "open": true
  }
 },
 {
  "id": "select/mobile/-/md/hover",
  "component": "S1Select",
  "break": "mobile",
  "title": "select · mobile · -/md/hover",
  "props": {
   "breakName": "mobile",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "select/mobile/-/md/filled",
  "component": "S1Select",
  "break": "mobile",
  "title": "select · mobile · -/md/filled",
  "props": {
   "breakName": "mobile",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "act": [
    {
     "part": "trigger"
    },
    {
     "part": "option",
     "text": "서울"
    }
   ]
  }
 },
 {
  "id": "select/mobile/-/md/disabled",
  "component": "S1Select",
  "break": "mobile",
  "title": "select · mobile · -/md/disabled",
  "props": {
   "breakName": "mobile",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "filter-chip/pc/line/sm/default",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · line/sm/default",
  "props": {
   "breakName": "pc",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "filter-chip/pc/line/md/default",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · line/md/default",
  "props": {
   "breakName": "pc",
   "variant": "line",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "md"
   }
  }
 },
 {
  "id": "filter-chip/pc/solid/sm/default",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · solid/sm/default",
  "props": {
   "breakName": "pc",
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "filter-chip/pc/solid/md/default",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · solid/md/default",
  "props": {
   "breakName": "pc",
   "variant": "solid",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "md"
   }
  }
 },
 {
  "id": "filter-chip/pc/line/sm/open",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · line/sm/open",
  "frame": {
   "width": 480,
   "height": 200
  },
  "props": {
   "breakName": "pc",
   "open": true,
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "open": true
  }
 },
 {
  "id": "filter-chip/pc/solid/sm/open",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · solid/sm/open",
  "frame": {
   "width": 480,
   "height": 200
  },
  "props": {
   "breakName": "pc",
   "open": true,
   "variant": "solid",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "sm"
   },
   "open": true
  }
 },
 {
  "id": "filter-chip/pc/line/sm/hover",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · line/sm/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "filter-chip/pc/line/sm/complete",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · line/sm/complete",
  "props": {
   "breakName": "pc",
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "act": [
    {
     "part": "trigger"
    },
    {
     "part": "option",
     "text": "인기순"
    }
   ]
  }
 },
 {
  "id": "filter-chip/pc/line/sm/disabled",
  "component": "S1FilterChip",
  "break": "pc",
  "title": "filter-chip · pc · line/sm/disabled",
  "props": {
   "breakName": "pc",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "variant": "line",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "sm"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "filter-chip/mobile/line/md/default",
  "component": "S1FilterChip",
  "break": "mobile",
  "title": "filter-chip · mobile · line/md/default",
  "props": {
   "breakName": "mobile",
   "variant": "line",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "md"
   }
  }
 },
 {
  "id": "filter-chip/mobile/solid/md/default",
  "component": "S1FilterChip",
  "break": "mobile",
  "title": "filter-chip · mobile · solid/md/default",
  "props": {
   "breakName": "mobile",
   "variant": "solid",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "md"
   }
  }
 },
 {
  "id": "filter-chip/mobile/line/md/open",
  "component": "S1FilterChip",
  "break": "mobile",
  "title": "filter-chip · mobile · line/md/open",
  "frame": {
   "width": 360,
   "height": 200
  },
  "props": {
   "breakName": "mobile",
   "open": true,
   "variant": "line",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "md"
   },
   "open": true
  }
 },
 {
  "id": "filter-chip/mobile/solid/md/open",
  "component": "S1FilterChip",
  "break": "mobile",
  "title": "filter-chip · mobile · solid/md/open",
  "frame": {
   "width": 360,
   "height": 200
  },
  "props": {
   "breakName": "mobile",
   "open": true,
   "variant": "solid",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "solid",
    "data-size": "md"
   },
   "open": true
  }
 },
 {
  "id": "filter-chip/mobile/line/md/hover",
  "component": "S1FilterChip",
  "break": "mobile",
  "title": "filter-chip · mobile · line/md/hover",
  "props": {
   "breakName": "mobile",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "variant": "line",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "filter-chip/mobile/line/md/complete",
  "component": "S1FilterChip",
  "break": "mobile",
  "title": "filter-chip · mobile · line/md/complete",
  "props": {
   "breakName": "mobile",
   "variant": "line",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "md"
   },
   "act": [
    {
     "part": "trigger"
    },
    {
     "part": "option",
     "text": "인기순"
    }
   ]
  }
 },
 {
  "id": "filter-chip/mobile/line/md/disabled",
  "component": "S1FilterChip",
  "break": "mobile",
  "title": "filter-chip · mobile · line/md/disabled",
  "props": {
   "breakName": "mobile",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "variant": "line",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-variant": "line",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "tab/pc/-/md/default",
  "component": "S1Tab",
  "break": "pc",
  "title": "tab · pc · -/md/default",
  "props": {
   "breakName": "pc",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "tab/pc/-/sm/default",
  "component": "S1Tab",
  "break": "pc",
  "title": "tab · pc · -/sm/default",
  "props": {
   "breakName": "pc",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "sm"
   }
  }
 },
 {
  "id": "tab/pc/-/xsm/default",
  "component": "S1Tab",
  "break": "pc",
  "title": "tab · pc · -/xsm/default",
  "props": {
   "breakName": "pc",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "tab/pc/-/md/hover",
  "component": "S1Tab",
  "break": "pc",
  "title": "tab · pc · -/md/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "tab": {
     "forceState": "hover"
    }
   },
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "tab",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "tab/mobile/-/sm/default",
  "component": "S1Tab",
  "break": "mobile",
  "title": "tab · mobile · -/sm/default",
  "props": {
   "breakName": "mobile",
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "sm"
   }
  }
 },
 {
  "id": "tab/mobile/-/sm/hover",
  "component": "S1Tab",
  "break": "mobile",
  "title": "tab · mobile · -/sm/hover",
  "props": {
   "breakName": "mobile",
   "partProps": {
    "tab": {
     "forceState": "hover"
    }
   },
   "size": "sm"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-size": "sm"
   },
   "parts": [
    {
     "part": "tab",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "pagination/pc/-/-/default",
  "component": "S1Pagination",
  "break": "pc",
  "title": "pagination · pc · -/-/default",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "pagination/pc/-/-/single",
  "component": "S1Pagination",
  "break": "pc",
  "title": "pagination · pc · -/-/single",
  "props": {
   "breakName": "pc",
   "totalPages": 1,
   "pages": [
    {
     "content": "1",
     "attrs": {
      "data-page": "1"
     }
    }
   ]
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-total-pages": "1"
   },
   "parts": [
    {
     "part": "page",
     "fromNth": 1,
     "remove": true
    }
   ]
  }
 },
 {
  "id": "pagination/pc/-/-/middle",
  "component": "S1Pagination",
  "break": "pc",
  "title": "pagination · pc · -/-/middle",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "act": [
    {
     "part": "page",
     "text": "3"
    }
   ]
  }
 },
 {
  "id": "pagination/pc/-/-/last",
  "component": "S1Pagination",
  "break": "pc",
  "title": "pagination · pc · -/-/last",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "act": [
    {
     "part": "page",
     "text": "6"
    }
   ]
  }
 },
 {
  "id": "textarea/pc/-/-/default",
  "component": "S1Textarea",
  "break": "pc",
  "title": "textarea · pc · -/-/default",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "textarea/pc/-/-/focus",
  "component": "S1Textarea",
  "break": "pc",
  "title": "textarea · pc · -/-/focus",
  "props": {
   "breakName": "pc",
   "forceState": "focus"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "force": "focus"
    }
   ],
   "force": "focus"
  }
 },
 {
  "id": "textarea/pc/-/-/filled",
  "component": "S1Textarea",
  "break": "pc",
  "title": "textarea · pc · -/-/filled",
  "props": {
   "breakName": "pc",
   "defaultValue": "입력한 내용"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "text": "입력한 내용"
    }
   ]
  }
 },
 {
  "id": "textarea/pc/-/-/disabled",
  "component": "S1Textarea",
  "break": "pc",
  "title": "textarea · pc · -/-/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "textarea/pc/-/-/readonly",
  "component": "S1Textarea",
  "break": "pc",
  "title": "textarea · pc · -/-/readonly",
  "props": {
   "breakName": "pc",
   "readOnly": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "readonly": ""
     }
    }
   ]
  }
 },
 {
  "id": "textarea/mobile/-/-/default",
  "component": "S1Textarea",
  "break": "mobile",
  "title": "textarea · mobile · -/-/default",
  "props": {
   "breakName": "mobile"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "textarea/mobile/-/-/focus",
  "component": "S1Textarea",
  "break": "mobile",
  "title": "textarea · mobile · -/-/focus",
  "props": {
   "breakName": "mobile",
   "forceState": "focus"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "force": "focus"
    }
   ],
   "force": "focus"
  }
 },
 {
  "id": "textarea/mobile/-/-/filled",
  "component": "S1Textarea",
  "break": "mobile",
  "title": "textarea · mobile · -/-/filled",
  "props": {
   "breakName": "mobile",
   "defaultValue": "입력한 내용"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "text": "입력한 내용"
    }
   ]
  }
 },
 {
  "id": "textarea/mobile/-/-/disabled",
  "component": "S1Textarea",
  "break": "mobile",
  "title": "textarea · mobile · -/-/disabled",
  "props": {
   "breakName": "mobile",
   "disabled": true
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "textarea/mobile/-/-/readonly",
  "component": "S1Textarea",
  "break": "mobile",
  "title": "textarea · mobile · -/-/readonly",
  "props": {
   "breakName": "mobile",
   "readOnly": true
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "control",
     "attrs": {
      "readonly": ""
     }
    }
   ]
  }
 },
 {
  "id": "multi-toggle/pc/-/md/default",
  "component": "S1MultiToggle",
  "break": "pc",
  "title": "multi-toggle · pc · -/md/default",
  "props": {
   "breakName": "pc",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "multi-toggle/pc/-/sm/default",
  "component": "S1MultiToggle",
  "break": "pc",
  "title": "multi-toggle · pc · -/sm/default",
  "props": {
   "breakName": "pc",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "sm"
   }
  }
 },
 {
  "id": "multi-toggle/pc/-/xsm/default",
  "component": "S1MultiToggle",
  "break": "pc",
  "title": "multi-toggle · pc · -/xsm/default",
  "props": {
   "breakName": "pc",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "multi-toggle/pc/-/md/hover",
  "component": "S1MultiToggle",
  "break": "pc",
  "title": "multi-toggle · pc · -/md/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "cell": {
     "forceState": "hover"
    }
   },
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "cell",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "multi-toggle/pc/-/md/disabled",
  "component": "S1MultiToggle",
  "break": "pc",
  "title": "multi-toggle · pc · -/md/disabled",
  "props": {
   "breakName": "pc",
   "cells": [
    {
     "content": "왼쪽"
    },
    {
     "content": "가운데",
     "attrs": {
      "aria-disabled": "true"
     }
    },
    {
     "content": "오른쪽"
    }
   ],
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "cell",
     "nth": 1,
     "attrs": {
      "aria-disabled": "true"
     }
    }
   ]
  }
 },
 {
  "id": "modal/pc/single/-/default",
  "component": "S1Modal",
  "break": "pc",
  "title": "modal · pc · single/-/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "single",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "single"
   }
  }
 },
 {
  "id": "modal/pc/dual/-/default",
  "component": "S1Modal",
  "break": "pc",
  "title": "modal · pc · dual/-/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "dual",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "dual"
   }
  }
 },
 {
  "id": "modal/pc/single/-/closed",
  "component": "S1Modal",
  "break": "pc",
  "title": "modal · pc · single/-/closed",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "open": false,
   "variant": "single"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "single"
   }
  }
 },
 {
  "id": "modal/mobile/single/-/default",
  "component": "S1Modal",
  "break": "mobile",
  "title": "modal · mobile · single/-/default",
  "frame": {
   "width": 360,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "mobile",
   "variant": "single",
   "open": true
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-footer": "single"
   }
  }
 },
 {
  "id": "modal/mobile/dual/-/default",
  "component": "S1Modal",
  "break": "mobile",
  "title": "modal · mobile · dual/-/default",
  "frame": {
   "width": 360,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "mobile",
   "variant": "dual",
   "open": true
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-footer": "dual"
   }
  }
 },
 {
  "id": "modal/mobile/single/-/closed",
  "component": "S1Modal",
  "break": "mobile",
  "title": "modal · mobile · single/-/closed",
  "frame": {
   "width": 360,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "mobile",
   "open": false,
   "variant": "single"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-footer": "single"
   }
  }
 },
 {
  "id": "table/pc/-/md/default",
  "component": "S1Table",
  "break": "pc",
  "title": "table · pc · -/md/default",
  "props": {
   "breakName": "pc",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   }
  }
 },
 {
  "id": "table/pc/-/sm/default",
  "component": "S1Table",
  "break": "pc",
  "title": "table · pc · -/sm/default",
  "props": {
   "breakName": "pc",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "sm"
   }
  }
 },
 {
  "id": "table/pc/-/xsm/default",
  "component": "S1Table",
  "break": "pc",
  "title": "table · pc · -/xsm/default",
  "props": {
   "breakName": "pc",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "table/pc/-/md/hover",
  "component": "S1Table",
  "break": "pc",
  "title": "table · pc · -/md/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "row": {
     "forceState": "hover"
    }
   },
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "parts": [
    {
     "part": "row",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "table/pc/-/md/selected",
  "component": "S1Table",
  "break": "pc",
  "title": "table · pc · -/md/selected",
  "props": {
   "breakName": "pc",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-size": "md"
   },
   "act": [
    {
     "part": "control",
     "nth": 1
    }
   ]
  }
 },
 {
  "id": "mobile-bottom-nav/pc/home/-/default",
  "component": "S1MobileBottomNav",
  "break": "pc",
  "title": "mobile-bottom-nav · pc · home/-/default",
  "props": {
   "breakName": "pc",
   "variant": "home"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-icon": "home"
   }
  }
 },
 {
  "id": "mobile-bottom-nav/pc/search/-/default",
  "component": "S1MobileBottomNav",
  "break": "pc",
  "title": "mobile-bottom-nav · pc · search/-/default",
  "props": {
   "breakName": "pc",
   "variant": "search"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-icon": "search"
   }
  }
 },
 {
  "id": "mobile-bottom-nav/pc/notification/-/default",
  "component": "S1MobileBottomNav",
  "break": "pc",
  "title": "mobile-bottom-nav · pc · notification/-/default",
  "props": {
   "breakName": "pc",
   "variant": "notification"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-icon": "notification"
   }
  }
 },
 {
  "id": "mobile-bottom-nav/pc/settings/-/default",
  "component": "S1MobileBottomNav",
  "break": "pc",
  "title": "mobile-bottom-nav · pc · settings/-/default",
  "props": {
   "breakName": "pc",
   "variant": "settings"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-icon": "settings"
   }
  }
 },
 {
  "id": "mobile-bottom-nav/pc/home/-/unselected",
  "component": "S1MobileBottomNav",
  "break": "pc",
  "title": "mobile-bottom-nav · pc · home/-/unselected",
  "props": {
   "breakName": "pc",
   "aria-selected": "false",
   "variant": "home"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-icon": "home",
    "aria-selected": "false"
   }
  }
 },
 {
  "id": "mobile-header/pc/home-title/-/default",
  "component": "S1MobileHeader",
  "break": "pc",
  "title": "mobile-header · pc · home-title/-/default",
  "props": {
   "breakName": "pc",
   "variant": "home-title"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "home-title"
   }
  }
 },
 {
  "id": "mobile-header/pc/home-title-subtitle/-/default",
  "component": "S1MobileHeader",
  "break": "pc",
  "title": "mobile-header · pc · home-title-subtitle/-/default",
  "props": {
   "breakName": "pc",
   "variant": "home-title-subtitle"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "home-title-subtitle"
   }
  }
 },
 {
  "id": "mobile-header/pc/standard-title/-/default",
  "component": "S1MobileHeader",
  "break": "pc",
  "title": "mobile-header · pc · standard-title/-/default",
  "props": {
   "breakName": "pc",
   "variant": "standard-title"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "standard-title"
   }
  }
 },
 {
  "id": "mobile-header/pc/standard-title-close/-/default",
  "component": "S1MobileHeader",
  "break": "pc",
  "title": "mobile-header · pc · standard-title-close/-/default",
  "props": {
   "breakName": "pc",
   "variant": "standard-title-close"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "standard-title-close"
   }
  }
 },
 {
  "id": "mobile-header/pc/standard-no-title/-/default",
  "component": "S1MobileHeader",
  "break": "pc",
  "title": "mobile-header · pc · standard-no-title/-/default",
  "props": {
   "breakName": "pc",
   "variant": "standard-no-title"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "standard-no-title"
   }
  }
 },
 {
  "id": "mobile-header/pc/standard-no-title-close/-/default",
  "component": "S1MobileHeader",
  "break": "pc",
  "title": "mobile-header · pc · standard-no-title-close/-/default",
  "props": {
   "breakName": "pc",
   "variant": "standard-no-title-close"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "standard-no-title-close"
   }
  }
 },
 {
  "id": "time-picker/pc#default.0/-/xxsm/default",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.0 · -/xxsm/default",
  "props": {
   "breakName": "pc",
   "data-type": "24h",
   "data-minute-step": "1",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "24h",
    "data-minute-step": "1",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "time-picker/pc#default.0/-/xsm/default",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.0 · -/xsm/default",
  "props": {
   "breakName": "pc",
   "data-type": "24h",
   "data-minute-step": "1",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "24h",
    "data-minute-step": "1",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "time-picker/pc#default.0/-/md/default",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.0 · -/md/default",
  "props": {
   "breakName": "pc",
   "data-type": "24h",
   "data-minute-step": "1",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "24h",
    "data-minute-step": "1",
    "data-size": "md"
   }
  }
 },
 {
  "id": "time-picker/pc#default.0/-/xxsm/open",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.0 · -/xxsm/open",
  "frame": {
   "width": 480,
   "height": 420
  },
  "props": {
   "breakName": "pc",
   "data-type": "24h",
   "data-minute-step": "1",
   "open": true,
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "24h",
    "data-minute-step": "1",
    "data-size": "xxsm"
   },
   "open": true
  }
 },
 {
  "id": "time-picker/pc#default.0/-/xxsm/hover",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.0 · -/xxsm/hover",
  "props": {
   "breakName": "pc",
   "data-type": "24h",
   "data-minute-step": "1",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "24h",
    "data-minute-step": "1",
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "time-picker/pc#default.0/-/xxsm/filled",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.0 · -/xxsm/filled",
  "props": {
   "breakName": "pc",
   "data-type": "24h",
   "data-minute-step": "1",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "24h",
    "data-minute-step": "1",
    "data-size": "xxsm"
   },
   "act": [
    {
     "part": "trigger"
    },
    {
     "part": "cell",
     "text": "05",
     "nth": 0
    },
    {
     "part": "cell",
     "text": "30",
     "nth": 0
    },
    {
     "part": "confirm"
    }
   ]
  }
 },
 {
  "id": "time-picker/pc#default.0/-/xxsm/disabled",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.0 · -/xxsm/disabled",
  "props": {
   "breakName": "pc",
   "data-type": "24h",
   "data-minute-step": "1",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "24h",
    "data-minute-step": "1",
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "time-picker/pc#default.1/-/xxsm/default",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.1 · -/xxsm/default",
  "props": {
   "breakName": "pc",
   "data-type": "12h",
   "data-minute-step": "5",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "12h",
    "data-minute-step": "5",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "time-picker/pc#default.1/-/xsm/default",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.1 · -/xsm/default",
  "props": {
   "breakName": "pc",
   "data-type": "12h",
   "data-minute-step": "5",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "12h",
    "data-minute-step": "5",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "time-picker/pc#default.1/-/md/default",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.1 · -/md/default",
  "props": {
   "breakName": "pc",
   "data-type": "12h",
   "data-minute-step": "5",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "12h",
    "data-minute-step": "5",
    "data-size": "md"
   }
  }
 },
 {
  "id": "time-picker/pc#default.1/-/xxsm/open",
  "component": "S1TimePicker",
  "break": "pc",
  "title": "time-picker · pc#default.1 · -/xxsm/open",
  "frame": {
   "width": 480,
   "height": 420
  },
  "props": {
   "breakName": "pc",
   "data-type": "12h",
   "data-minute-step": "5",
   "open": true,
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "12h",
    "data-minute-step": "5",
    "data-size": "xxsm"
   },
   "open": true
  }
 },
 {
  "id": "time-picker/mobile#default.0/-/md/default",
  "component": "S1TimePicker",
  "break": "mobile",
  "title": "time-picker · mobile#default.0 · -/md/default",
  "props": {
   "breakName": "mobile",
   "data-mobile-content": "time-only",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mobile-content": "time-only",
    "data-size": "md"
   }
  }
 },
 {
  "id": "time-picker/mobile#default.0/-/md/open",
  "component": "S1TimePicker",
  "break": "mobile",
  "title": "time-picker · mobile#default.0 · -/md/open",
  "frame": {
   "width": 360,
   "height": 700
  },
  "skipCompare": true,
  "props": {
   "breakName": "mobile",
   "data-mobile-content": "time-only",
   "open": true,
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mobile-content": "time-only",
    "data-size": "md"
   },
   "open": true
  }
 },
 {
  "id": "time-picker/mobile#default.0/-/md/hover",
  "component": "S1TimePicker",
  "break": "mobile",
  "title": "time-picker · mobile#default.0 · -/md/hover",
  "props": {
   "breakName": "mobile",
   "data-mobile-content": "time-only",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mobile-content": "time-only",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "time-picker/mobile#default.0/-/md/disabled",
  "component": "S1TimePicker",
  "break": "mobile",
  "title": "time-picker · mobile#default.0 · -/md/disabled",
  "props": {
   "breakName": "mobile",
   "data-mobile-content": "time-only",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mobile-content": "time-only",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "time-picker/mobile#default.1/-/md/default",
  "component": "S1TimePicker",
  "break": "mobile",
  "title": "time-picker · mobile#default.1 · -/md/default",
  "props": {
   "breakName": "mobile",
   "data-mobile-content": "date-time",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 1,
   "attributes": {
    "data-mobile-content": "date-time",
    "data-size": "md"
   }
  }
 },
 {
  "id": "time-picker/mobile#default.1/-/md/open",
  "component": "S1TimePicker",
  "break": "mobile",
  "title": "time-picker · mobile#default.1 · -/md/open",
  "frame": {
   "width": 360,
   "height": 700
  },
  "skipCompare": true,
  "props": {
   "breakName": "mobile",
   "data-mobile-content": "date-time",
   "open": true,
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 1,
   "attributes": {
    "data-mobile-content": "date-time",
    "data-size": "md"
   },
   "open": true
  }
 },
 {
  "id": "date-picker/pc/single/xxsm/default",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · single/xxsm/default",
  "props": {
   "breakName": "pc",
   "variant": "single",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "date-picker/pc/single/xsm/default",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · single/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "single",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "date-picker/pc/single/md/default",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · single/md/default",
  "props": {
   "breakName": "pc",
   "variant": "single",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "md"
   }
  }
 },
 {
  "id": "date-picker/pc/range/xxsm/default",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · range/xxsm/default",
  "props": {
   "breakName": "pc",
   "variant": "range",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "range",
    "data-size": "xxsm"
   }
  }
 },
 {
  "id": "date-picker/pc/range/xsm/default",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · range/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "range",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "range",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "date-picker/pc/range/md/default",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · range/md/default",
  "props": {
   "breakName": "pc",
   "variant": "range",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "range",
    "data-size": "md"
   }
  }
 },
 {
  "id": "date-picker/pc/single/xxsm/open",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · single/xxsm/open",
  "frame": {
   "width": 480,
   "height": 460
  },
  "props": {
   "breakName": "pc",
   "open": true,
   "variant": "single",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "xxsm"
   },
   "open": true
  }
 },
 {
  "id": "date-picker/pc/range/xxsm/open",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · range/xxsm/open",
  "frame": {
   "width": 480,
   "height": 460
  },
  "props": {
   "breakName": "pc",
   "open": true,
   "variant": "range",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "range",
    "data-size": "xxsm"
   },
   "open": true
  }
 },
 {
  "id": "date-picker/pc/single/xxsm/hover",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · single/xxsm/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "variant": "single",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "date-picker/pc/single/xxsm/filled",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · single/xxsm/filled",
  "props": {
   "breakName": "pc",
   "variant": "single",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "xxsm"
   },
   "act": [
    {
     "part": "trigger"
    },
    {
     "part": "cell",
     "text": "15"
    }
   ]
  }
 },
 {
  "id": "date-picker/pc/single/xxsm/disabled",
  "component": "S1DatePicker",
  "break": "pc",
  "title": "date-picker · pc · single/xxsm/disabled",
  "props": {
   "breakName": "pc",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "variant": "single",
   "size": "xxsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "xxsm"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "date-picker/mobile/single/md/default",
  "component": "S1DatePicker",
  "break": "mobile",
  "title": "date-picker · mobile · single/md/default",
  "props": {
   "breakName": "mobile",
   "variant": "single",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "md"
   }
  }
 },
 {
  "id": "date-picker/mobile/range/md/default",
  "component": "S1DatePicker",
  "break": "mobile",
  "title": "date-picker · mobile · range/md/default",
  "props": {
   "breakName": "mobile",
   "variant": "range",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mode": "range",
    "data-size": "md"
   }
  }
 },
 {
  "id": "date-picker/mobile/single/md/open",
  "component": "S1DatePicker",
  "break": "mobile",
  "title": "date-picker · mobile · single/md/open",
  "frame": {
   "width": 360,
   "height": 700
  },
  "skipCompare": true,
  "props": {
   "breakName": "mobile",
   "open": true,
   "variant": "single",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "md"
   },
   "open": true
  }
 },
 {
  "id": "date-picker/mobile/range/md/open",
  "component": "S1DatePicker",
  "break": "mobile",
  "title": "date-picker · mobile · range/md/open",
  "frame": {
   "width": 360,
   "height": 700
  },
  "skipCompare": true,
  "props": {
   "breakName": "mobile",
   "open": true,
   "variant": "range",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mode": "range",
    "data-size": "md"
   },
   "open": true
  }
 },
 {
  "id": "date-picker/mobile/single/md/hover",
  "component": "S1DatePicker",
  "break": "mobile",
  "title": "date-picker · mobile · single/md/hover",
  "props": {
   "breakName": "mobile",
   "partProps": {
    "trigger": {
     "forceState": "hover"
    }
   },
   "variant": "single",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "date-picker/mobile/single/md/filled",
  "component": "S1DatePicker",
  "break": "mobile",
  "title": "date-picker · mobile · single/md/filled",
  "props": {
   "breakName": "mobile",
   "variant": "single",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "md"
   },
   "act": [
    {
     "part": "trigger"
    },
    {
     "part": "cell",
     "text": "15"
    }
   ]
  }
 },
 {
  "id": "date-picker/mobile/single/md/disabled",
  "component": "S1DatePicker",
  "break": "mobile",
  "title": "date-picker · mobile · single/md/disabled",
  "props": {
   "breakName": "mobile",
   "partProps": {
    "trigger": {
     "disabled": true
    }
   },
   "variant": "single",
   "size": "md"
  },
  "web": {
   "example": "mobile",
   "instance": 0,
   "attributes": {
    "data-mode": "single",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "trigger",
     "attrs": {
      "disabled": ""
     }
    }
   ]
  }
 },
 {
  "id": "gnb/pc/center-between/md/default",
  "component": "S1Gnb",
  "break": "pc",
  "title": "gnb · pc · center-between/md/default",
  "props": {
   "breakName": "pc",
   "variant": "center-between",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "center-between",
    "data-size": "md"
   }
  }
 },
 {
  "id": "gnb/pc/center-between/sm/default",
  "component": "S1Gnb",
  "break": "pc",
  "title": "gnb · pc · center-between/sm/default",
  "props": {
   "breakName": "pc",
   "variant": "center-between",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "center-between",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "gnb/pc/center-between/xsm/default",
  "component": "S1Gnb",
  "break": "pc",
  "title": "gnb · pc · center-between/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "center-between",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "center-between",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "gnb/pc/start/md/default",
  "component": "S1Gnb",
  "break": "pc",
  "title": "gnb · pc · start/md/default",
  "props": {
   "breakName": "pc",
   "variant": "start",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "start",
    "data-size": "md"
   }
  }
 },
 {
  "id": "gnb/pc/start/sm/default",
  "component": "S1Gnb",
  "break": "pc",
  "title": "gnb · pc · start/sm/default",
  "props": {
   "breakName": "pc",
   "variant": "start",
   "size": "sm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "start",
    "data-size": "sm"
   }
  }
 },
 {
  "id": "gnb/pc/start/xsm/default",
  "component": "S1Gnb",
  "break": "pc",
  "title": "gnb · pc · start/xsm/default",
  "props": {
   "breakName": "pc",
   "variant": "start",
   "size": "xsm"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "start",
    "data-size": "xsm"
   }
  }
 },
 {
  "id": "gnb/pc/center-between/md/hover",
  "component": "S1Gnb",
  "break": "pc",
  "title": "gnb · pc · center-between/md/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "menu": {
     "forceState": "hover"
    }
   },
   "variant": "center-between",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "center-between",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "menu",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "gnb-sub-menu-item/pc#default.0/-/-/default",
  "component": "S1GnbSubMenuItem",
  "break": "pc",
  "title": "gnb-sub-menu-item · pc#default.0 · -/-/default",
  "props": {
   "breakName": "pc",
   "data-depth": "1depth"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-depth": "1depth"
   }
  }
 },
 {
  "id": "gnb-sub-menu-item/pc#default.0/-/-/hover",
  "component": "S1GnbSubMenuItem",
  "break": "pc",
  "title": "gnb-sub-menu-item · pc#default.0 · -/-/hover",
  "props": {
   "breakName": "pc",
   "data-depth": "1depth",
   "forceState": "hover"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-depth": "1depth"
   },
   "force": "hover"
  }
 },
 {
  "id": "gnb-sub-menu-item/pc#default.1/-/-/default",
  "component": "S1GnbSubMenuItem",
  "break": "pc",
  "title": "gnb-sub-menu-item · pc#default.1 · -/-/default",
  "props": {
   "breakName": "pc",
   "data-depth": "2depth",
   "href": "#",
   "aria-current": "page"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-depth": "2depth",
    "href": "#",
    "aria-current": "page"
   }
  }
 },
 {
  "id": "gnb-sub-menu-item/pc#default.1/-/-/hover",
  "component": "S1GnbSubMenuItem",
  "break": "pc",
  "title": "gnb-sub-menu-item · pc#default.1 · -/-/hover",
  "props": {
   "breakName": "pc",
   "data-depth": "2depth",
   "href": "#",
   "aria-current": "page",
   "forceState": "hover"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-depth": "2depth",
    "href": "#",
    "aria-current": "page"
   },
   "force": "hover"
  }
 },
 {
  "id": "gnb-sub-menu/pc#default.0/-/-/default",
  "component": "S1GnbSubMenu",
  "break": "pc",
  "title": "gnb-sub-menu · pc#default.0 · -/-/default",
  "props": {
   "breakName": "pc",
   "data-type": "regular"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "regular"
   }
  }
 },
 {
  "id": "gnb-sub-menu/pc#default.0/-/-/data-s1-layer=overlay",
  "component": "S1GnbSubMenu",
  "break": "pc",
  "title": "gnb-sub-menu · pc#default.0 · -/-/data-s1-layer=overlay",
  "props": {
   "breakName": "pc",
   "data-type": "regular",
   "data-s1-layer": "overlay"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-type": "regular",
    "data-s1-layer": "overlay"
   }
  }
 },
 {
  "id": "gnb-sub-menu/pc#default.1/-/-/default",
  "component": "S1GnbSubMenu",
  "break": "pc",
  "title": "gnb-sub-menu · pc#default.1 · -/-/default",
  "props": {
   "breakName": "pc",
   "data-type": "compact-1"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "compact-1"
   }
  }
 },
 {
  "id": "gnb-sub-menu/pc#default.1/-/-/data-s1-layer=overlay",
  "component": "S1GnbSubMenu",
  "break": "pc",
  "title": "gnb-sub-menu · pc#default.1 · -/-/data-s1-layer=overlay",
  "props": {
   "breakName": "pc",
   "data-type": "compact-1",
   "data-s1-layer": "overlay"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-type": "compact-1",
    "data-s1-layer": "overlay"
   }
  }
 },
 {
  "id": "gnb-sub-menu/pc#default.2/-/-/default",
  "component": "S1GnbSubMenu",
  "break": "pc",
  "title": "gnb-sub-menu · pc#default.2 · -/-/default",
  "props": {
   "breakName": "pc",
   "data-type": "compact-2"
  },
  "web": {
   "example": "pc",
   "instance": 2,
   "attributes": {
    "data-type": "compact-2"
   }
  }
 },
 {
  "id": "gnb-sub-menu/pc#default.2/-/-/data-s1-layer=overlay",
  "component": "S1GnbSubMenu",
  "break": "pc",
  "title": "gnb-sub-menu · pc#default.2 · -/-/data-s1-layer=overlay",
  "props": {
   "breakName": "pc",
   "data-type": "compact-2",
   "data-s1-layer": "overlay"
  },
  "web": {
   "example": "pc",
   "instance": 2,
   "attributes": {
    "data-type": "compact-2",
    "data-s1-layer": "overlay"
   }
  }
 },
 {
  "id": "assist-button/pc/-/-/default",
  "component": "S1AssistButton",
  "break": "pc",
  "title": "assist-button · pc · -/-/default",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "assist-button/pc/-/-/hover",
  "component": "S1AssistButton",
  "break": "pc",
  "title": "assist-button · pc · -/-/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "force": "hover"
  }
 },
 {
  "id": "assist-button/pc/-/-/pressed",
  "component": "S1AssistButton",
  "break": "pc",
  "title": "assist-button · pc · -/-/pressed",
  "props": {
   "breakName": "pc",
   "forceState": "pressed"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "force": "pressed"
  }
 },
 {
  "id": "assist-button/pc/-/-/disabled",
  "component": "S1AssistButton",
  "break": "pc",
  "title": "assist-button · pc · -/-/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "disabled": true
  }
 },
 {
  "id": "text-button/pc/primary/-/default",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · primary/-/default",
  "props": {
   "breakName": "pc",
   "variant": "primary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary"
   }
  }
 },
 {
  "id": "text-button/pc/secondary/-/default",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · secondary/-/default",
  "props": {
   "breakName": "pc",
   "variant": "secondary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary"
   }
  }
 },
 {
  "id": "text-button/pc/primary/-/hover",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · primary/-/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover",
   "variant": "primary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary"
   },
   "force": "hover"
  }
 },
 {
  "id": "text-button/pc/primary/-/pressed",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · primary/-/pressed",
  "props": {
   "breakName": "pc",
   "forceState": "pressed",
   "variant": "primary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary"
   },
   "force": "pressed"
  }
 },
 {
  "id": "text-button/pc/primary/-/disabled",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · primary/-/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "variant": "primary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "primary"
   },
   "disabled": true
  }
 },
 {
  "id": "text-button/pc/secondary/-/hover",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · secondary/-/hover",
  "props": {
   "breakName": "pc",
   "forceState": "hover",
   "variant": "secondary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary"
   },
   "force": "hover"
  }
 },
 {
  "id": "text-button/pc/secondary/-/pressed",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · secondary/-/pressed",
  "props": {
   "breakName": "pc",
   "forceState": "pressed",
   "variant": "secondary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary"
   },
   "force": "pressed"
  }
 },
 {
  "id": "text-button/pc/secondary/-/disabled",
  "component": "S1TextButton",
  "break": "pc",
  "title": "text-button · pc · secondary/-/disabled",
  "props": {
   "breakName": "pc",
   "disabled": true,
   "variant": "secondary"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-variant": "secondary"
   },
   "disabled": true
  }
 },
 {
  "id": "modal-content/pc/single/md/default",
  "component": "S1ModalContent",
  "break": "pc",
  "title": "modal-content · pc · single/md/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "single",
   "size": "md",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "single",
    "data-size": "md"
   }
  }
 },
 {
  "id": "modal-content/pc/single/lg/default",
  "component": "S1ModalContent",
  "break": "pc",
  "title": "modal-content · pc · single/lg/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "single",
   "size": "lg",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "single",
    "data-size": "lg"
   }
  }
 },
 {
  "id": "modal-content/pc/single/xl/default",
  "component": "S1ModalContent",
  "break": "pc",
  "title": "modal-content · pc · single/xl/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "single",
   "size": "xl",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "single",
    "data-size": "xl"
   }
  }
 },
 {
  "id": "modal-content/pc/dual/md/default",
  "component": "S1ModalContent",
  "break": "pc",
  "title": "modal-content · pc · dual/md/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "dual",
   "size": "md",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "dual",
    "data-size": "md"
   }
  }
 },
 {
  "id": "modal-content/pc/dual/lg/default",
  "component": "S1ModalContent",
  "break": "pc",
  "title": "modal-content · pc · dual/lg/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "dual",
   "size": "lg",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "dual",
    "data-size": "lg"
   }
  }
 },
 {
  "id": "modal-content/pc/dual/xl/default",
  "component": "S1ModalContent",
  "break": "pc",
  "title": "modal-content · pc · dual/xl/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "dual",
   "size": "xl",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "dual",
    "data-size": "xl"
   }
  }
 },
 {
  "id": "modal-content/pc/single/md/closed",
  "component": "S1ModalContent",
  "break": "pc",
  "title": "modal-content · pc · single/md/closed",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "open": false,
   "variant": "single",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "single",
    "data-size": "md"
   }
  }
 },
 {
  "id": "bottom-sheet-option/pc#text.0/text/-/default",
  "component": "S1BottomSheetOption",
  "break": "pc",
  "title": "bottom-sheet-option · pc#text.0 · text/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "text"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "default",
    "data-type": "text"
   }
  }
 },
 {
  "id": "bottom-sheet-option/pc#text.1/text/-/default",
  "component": "S1BottomSheetOption",
  "break": "pc",
  "title": "bottom-sheet-option · pc#text.1 · text/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "selected",
   "variant": "text"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-state": "selected",
    "data-type": "text"
   }
  }
 },
 {
  "id": "bottom-sheet-option/pc#checkbox.2/checkbox/-/default",
  "component": "S1BottomSheetOption",
  "break": "pc",
  "title": "bottom-sheet-option · pc#checkbox.2 · checkbox/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "checkbox"
  },
  "web": {
   "example": "pc",
   "instance": 3,
   "attributes": {
    "data-state": "default",
    "data-type": "checkbox"
   }
  }
 },
 {
  "id": "bottom-sheet-option/pc#radio.3/radio/-/default",
  "component": "S1BottomSheetOption",
  "break": "pc",
  "title": "bottom-sheet-option · pc#radio.3 · radio/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "radio"
  },
  "web": {
   "example": "pc",
   "instance": 5,
   "attributes": {
    "data-state": "default",
    "data-type": "radio"
   }
  }
 },
 {
  "id": "bottom-sheet-option/pc#list.4/list/-/default",
  "component": "S1BottomSheetOption",
  "break": "pc",
  "title": "bottom-sheet-option · pc#list.4 · list/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "list"
  },
  "web": {
   "example": "pc",
   "instance": 7,
   "attributes": {
    "data-state": "default",
    "data-type": "list"
   }
  }
 },
 {
  "id": "bottom-sheet-option/pc#list.5/list/-/default",
  "component": "S1BottomSheetOption",
  "break": "pc",
  "title": "bottom-sheet-option · pc#list.5 · list/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "disabled",
   "variant": "list"
  },
  "web": {
   "example": "pc",
   "instance": 8,
   "attributes": {
    "data-state": "disabled",
    "data-type": "list"
   }
  }
 },
 {
  "id": "bottom-sheet/pc/none/-/default",
  "component": "S1BottomSheet",
  "break": "pc",
  "title": "bottom-sheet · pc · none/-/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "none",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "none"
   }
  }
 },
 {
  "id": "bottom-sheet/pc/single/-/default",
  "component": "S1BottomSheet",
  "break": "pc",
  "title": "bottom-sheet · pc · single/-/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "single",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "single"
   }
  }
 },
 {
  "id": "bottom-sheet/pc/dual/-/default",
  "component": "S1BottomSheet",
  "break": "pc",
  "title": "bottom-sheet · pc · dual/-/default",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "variant": "dual",
   "open": true
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "dual"
   }
  }
 },
 {
  "id": "bottom-sheet/pc/none/-/closed",
  "component": "S1BottomSheet",
  "break": "pc",
  "title": "bottom-sheet · pc · none/-/closed",
  "frame": {
   "width": 440,
   "height": 520,
   "clip": true
  },
  "props": {
   "breakName": "pc",
   "open": false,
   "variant": "none"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-footer": "none"
   }
  }
 },
 {
  "id": "list-row/pc#nav.0/nav/-/default",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#nav.0 · nav/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "nav"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "default",
    "data-type": "nav"
   }
  }
 },
 {
  "id": "list-row/pc#nav.0/nav/-/pressed",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#nav.0 · nav/-/pressed",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "forceState": "pressed",
   "variant": "nav"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "default",
    "data-type": "nav"
   },
   "force": "pressed"
  }
 },
 {
  "id": "list-row/pc#nav.0/nav/-/disabled",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#nav.0 · nav/-/disabled",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "disabled": true,
   "variant": "nav"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "default",
    "data-type": "nav"
   },
   "disabled": true
  }
 },
 {
  "id": "list-row/pc#nav.0/nav/-/aria-disabled=true",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#nav.0 · nav/-/aria-disabled=true",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "aria-disabled": "true",
   "variant": "nav"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "default",
    "data-type": "nav",
    "aria-disabled": "true"
   }
  }
 },
 {
  "id": "list-row/pc#value.1/value/-/default",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#value.1 · value/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "value"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-state": "default",
    "data-type": "value"
   }
  }
 },
 {
  "id": "list-row/pc#value.1/value/-/pressed",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#value.1 · value/-/pressed",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "forceState": "pressed",
   "variant": "value"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-state": "default",
    "data-type": "value"
   },
   "force": "pressed"
  }
 },
 {
  "id": "list-row/pc#value.1/value/-/disabled",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#value.1 · value/-/disabled",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "disabled": true,
   "variant": "value"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-state": "default",
    "data-type": "value"
   },
   "disabled": true
  }
 },
 {
  "id": "list-row/pc#value.1/value/-/aria-disabled=true",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#value.1 · value/-/aria-disabled=true",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "aria-disabled": "true",
   "variant": "value"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-state": "default",
    "data-type": "value",
    "aria-disabled": "true"
   }
  }
 },
 {
  "id": "list-row/pc#read.2/read/-/default",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#read.2 · read/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "read"
  },
  "web": {
   "example": "pc",
   "instance": 2,
   "attributes": {
    "data-state": "default",
    "data-type": "read"
   }
  }
 },
 {
  "id": "list-row/pc#read.2/read/-/pressed",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#read.2 · read/-/pressed",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "forceState": "pressed",
   "variant": "read"
  },
  "web": {
   "example": "pc",
   "instance": 2,
   "attributes": {
    "data-state": "default",
    "data-type": "read"
   },
   "force": "pressed"
  }
 },
 {
  "id": "list-row/pc#read.2/read/-/aria-disabled=true",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#read.2 · read/-/aria-disabled=true",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "aria-disabled": "true",
   "variant": "read"
  },
  "web": {
   "example": "pc",
   "instance": 2,
   "attributes": {
    "data-state": "default",
    "data-type": "read",
    "aria-disabled": "true"
   }
  }
 },
 {
  "id": "list-row/pc#pick.3/pick/-/default",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#pick.3 · pick/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "pick"
  },
  "web": {
   "example": "pc",
   "instance": 3,
   "attributes": {
    "data-state": "default",
    "data-type": "pick"
   }
  }
 },
 {
  "id": "list-row/pc#pick.3/pick/-/pressed",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#pick.3 · pick/-/pressed",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "forceState": "pressed",
   "variant": "pick"
  },
  "web": {
   "example": "pc",
   "instance": 3,
   "attributes": {
    "data-state": "default",
    "data-type": "pick"
   },
   "force": "pressed"
  }
 },
 {
  "id": "list-row/pc#pick.3/pick/-/aria-disabled=true",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#pick.3 · pick/-/aria-disabled=true",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "aria-disabled": "true",
   "variant": "pick"
  },
  "web": {
   "example": "pc",
   "instance": 3,
   "attributes": {
    "data-state": "default",
    "data-type": "pick",
    "aria-disabled": "true"
   }
  }
 },
 {
  "id": "list-row/pc#agree.4/agree/-/default",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#agree.4 · agree/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "agree"
  },
  "web": {
   "example": "pc",
   "instance": 4,
   "attributes": {
    "data-state": "default",
    "data-type": "agree"
   }
  }
 },
 {
  "id": "list-row/pc#agree.4/agree/-/pressed",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#agree.4 · agree/-/pressed",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "forceState": "pressed",
   "variant": "agree"
  },
  "web": {
   "example": "pc",
   "instance": 4,
   "attributes": {
    "data-state": "default",
    "data-type": "agree"
   },
   "force": "pressed"
  }
 },
 {
  "id": "list-row/pc#agree.4/agree/-/aria-disabled=true",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#agree.4 · agree/-/aria-disabled=true",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "aria-disabled": "true",
   "variant": "agree"
  },
  "web": {
   "example": "pc",
   "instance": 4,
   "attributes": {
    "data-state": "default",
    "data-type": "agree",
    "aria-disabled": "true"
   }
  }
 },
 {
  "id": "list-row/pc#switch.5/switch/-/default",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#switch.5 · switch/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "switch"
  },
  "web": {
   "example": "pc",
   "instance": 5,
   "attributes": {
    "data-state": "default",
    "data-type": "switch"
   }
  }
 },
 {
  "id": "list-row/pc#switch.5/switch/-/pressed",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#switch.5 · switch/-/pressed",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "forceState": "pressed",
   "variant": "switch"
  },
  "web": {
   "example": "pc",
   "instance": 5,
   "attributes": {
    "data-state": "default",
    "data-type": "switch"
   },
   "force": "pressed"
  }
 },
 {
  "id": "list-row/pc#switch.5/switch/-/aria-disabled=true",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#switch.5 · switch/-/aria-disabled=true",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "aria-disabled": "true",
   "variant": "switch"
  },
  "web": {
   "example": "pc",
   "instance": 5,
   "attributes": {
    "data-state": "default",
    "data-type": "switch",
    "aria-disabled": "true"
   }
  }
 },
 {
  "id": "list-row/pc#thumb.6/thumb/-/default",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#thumb.6 · thumb/-/default",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "variant": "thumb"
  },
  "web": {
   "example": "pc",
   "instance": 6,
   "attributes": {
    "data-state": "default",
    "data-type": "thumb"
   }
  }
 },
 {
  "id": "list-row/pc#thumb.6/thumb/-/pressed",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#thumb.6 · thumb/-/pressed",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "forceState": "pressed",
   "variant": "thumb"
  },
  "web": {
   "example": "pc",
   "instance": 6,
   "attributes": {
    "data-state": "default",
    "data-type": "thumb"
   },
   "force": "pressed"
  }
 },
 {
  "id": "list-row/pc#thumb.6/thumb/-/aria-disabled=true",
  "component": "S1ListRow",
  "break": "pc",
  "title": "list-row · pc#thumb.6 · thumb/-/aria-disabled=true",
  "props": {
   "breakName": "pc",
   "data-state": "default",
   "aria-disabled": "true",
   "variant": "thumb"
  },
  "web": {
   "example": "pc",
   "instance": 6,
   "attributes": {
    "data-state": "default",
    "data-type": "thumb",
    "aria-disabled": "true"
   }
  }
 },
 {
  "id": "expandable-card/pc/-/-/default",
  "component": "S1ExpandableCard",
  "break": "pc",
  "title": "expandable-card · pc · -/-/default",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {}
  }
 },
 {
  "id": "expandable-card/pc/-/-/open",
  "component": "S1ExpandableCard",
  "break": "pc",
  "title": "expandable-card · pc · -/-/open",
  "props": {
   "breakName": "pc"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "act": [
    {
     "part": "header"
    }
   ]
  }
 },
 {
  "id": "expandable-card/pc/-/-/hover",
  "component": "S1ExpandableCard",
  "break": "pc",
  "title": "expandable-card · pc · -/-/hover",
  "props": {
   "breakName": "pc",
   "partProps": {
    "header": {
     "forceState": "hover"
    }
   }
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {},
   "parts": [
    {
     "part": "header",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "data-tag/pc/blue/-/default",
  "component": "S1DataTag",
  "break": "pc",
  "title": "data-tag · pc · blue/-/default",
  "props": {
   "breakName": "pc",
   "variant": "blue"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-tone": "blue"
   }
  }
 },
 {
  "id": "data-tag/pc/red/-/default",
  "component": "S1DataTag",
  "break": "pc",
  "title": "data-tag · pc · red/-/default",
  "props": {
   "breakName": "pc",
   "variant": "red"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-tone": "red"
   }
  }
 },
 {
  "id": "data-tag/pc/gray/-/default",
  "component": "S1DataTag",
  "break": "pc",
  "title": "data-tag · pc · gray/-/default",
  "props": {
   "breakName": "pc",
   "variant": "gray"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-tone": "gray"
   }
  }
 },
 {
  "id": "divider/pc/x/-/default",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · x/-/default",
  "props": {
   "breakName": "pc",
   "variant": "x"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "x"
   }
  }
 },
 {
  "id": "divider/pc/y/-/default",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · y/-/default",
  "props": {
   "breakName": "pc",
   "variant": "y"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "y"
   }
  }
 },
 {
  "id": "divider/pc/x/-/data-axis=y",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · x/-/data-axis=y",
  "props": {
   "breakName": "pc",
   "data-axis": "y",
   "variant": "x"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "y"
   }
  }
 },
 {
  "id": "divider/pc/x/-/data-inset=text",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · x/-/data-inset=text",
  "props": {
   "breakName": "pc",
   "data-inset": "text",
   "variant": "x"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "x",
    "data-inset": "text"
   }
  }
 },
 {
  "id": "divider/pc/x/-/data-weight=strong",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · x/-/data-weight=strong",
  "props": {
   "breakName": "pc",
   "data-weight": "strong",
   "variant": "x"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "x",
    "data-weight": "strong"
   }
  }
 },
 {
  "id": "divider/pc/y/-/data-axis=y",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · y/-/data-axis=y",
  "props": {
   "breakName": "pc",
   "data-axis": "y",
   "variant": "y"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "y"
   }
  }
 },
 {
  "id": "divider/pc/y/-/data-inset=text",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · y/-/data-inset=text",
  "props": {
   "breakName": "pc",
   "data-inset": "text",
   "variant": "y"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "y",
    "data-inset": "text"
   }
  }
 },
 {
  "id": "divider/pc/y/-/data-weight=strong",
  "component": "S1Divider",
  "break": "pc",
  "title": "divider · pc · y/-/data-weight=strong",
  "props": {
   "breakName": "pc",
   "data-weight": "strong",
   "variant": "y"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-axis": "y",
    "data-weight": "strong"
   }
  }
 },
 {
  "id": "lnb/pc#menu.0/menu/md/default",
  "component": "S1Lnb",
  "break": "pc",
  "title": "lnb · pc#menu.0 · menu/md/default",
  "props": {
   "breakName": "pc",
   "data-state": "expanded",
   "variant": "menu",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "expanded",
    "data-variant": "menu",
    "data-size": "md"
   }
  }
 },
 {
  "id": "lnb/pc#menu.0/menu/lg/default",
  "component": "S1Lnb",
  "break": "pc",
  "title": "lnb · pc#menu.0 · menu/lg/default",
  "props": {
   "breakName": "pc",
   "data-state": "expanded",
   "variant": "menu",
   "size": "lg"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "expanded",
    "data-variant": "menu",
    "data-size": "lg"
   }
  }
 },
 {
  "id": "lnb/pc#menu.0/menu/md/collapsed",
  "component": "S1Lnb",
  "break": "pc",
  "title": "lnb · pc#menu.0 · menu/md/collapsed",
  "props": {
   "breakName": "pc",
   "data-state": "expanded",
   "collapsed": true,
   "variant": "menu",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "collapsed",
    "data-variant": "menu",
    "data-size": "md"
   }
  }
 },
 {
  "id": "lnb/pc#menu.0/menu/md/hover",
  "component": "S1Lnb",
  "break": "pc",
  "title": "lnb · pc#menu.0 · menu/md/hover",
  "props": {
   "breakName": "pc",
   "data-state": "expanded",
   "partProps": {
    "item": {
     "forceState": "hover"
    }
   },
   "variant": "menu",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 0,
   "attributes": {
    "data-state": "expanded",
    "data-variant": "menu",
    "data-size": "md"
   },
   "parts": [
    {
     "part": "item",
     "force": "hover"
    }
   ]
  }
 },
 {
  "id": "lnb/pc#brand.1/brand/md/default",
  "component": "S1Lnb",
  "break": "pc",
  "title": "lnb · pc#brand.1 · brand/md/default",
  "props": {
   "breakName": "pc",
   "data-state": "expanded",
   "variant": "brand",
   "size": "md"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-state": "expanded",
    "data-variant": "brand",
    "data-size": "md"
   }
  }
 },
 {
  "id": "lnb/pc#brand.1/brand/lg/default",
  "component": "S1Lnb",
  "break": "pc",
  "title": "lnb · pc#brand.1 · brand/lg/default",
  "props": {
   "breakName": "pc",
   "data-state": "expanded",
   "variant": "brand",
   "size": "lg"
  },
  "web": {
   "example": "pc",
   "instance": 1,
   "attributes": {
    "data-state": "expanded",
    "data-variant": "brand",
    "data-size": "lg"
   }
  }
 }
];
