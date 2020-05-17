/**
 * Source code:
 * function foo(a: number=0): Foo { }
 */

exports.parseForESLint = () => ({
    ast: {
        "kind": "Document",
        "definitions": [
            {
                "kind": "ObjectTypeExtension",
                "name": {
                    "kind": "Name",
                    "value": "Query",
                    "loc": {
                        "start": 12,
                        "end": 17
                    }
                },
                "interfaces": [],
                "directives": [],
                "fields": [
                    {
                        "kind": "FieldDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "login",
                            "loc": {
                                "start": 24,
                                "end": 29
                            }
                        },
                        "arguments": [
                            {
                                "kind": "InputValueDefinition",
                                "name": {
                                    "kind": "Name",
                                    "value": "input",
                                    "loc": {
                                        "start": 30,
                                        "end": 35
                                    }
                                },
                                "directives": [],
                                "loc": {
                                    "start": 30,
                                    "end": 49
                                },
                                "fieldType": {
                                    "kind": "NonNullType",
                                    "loc": {
                                        "start": 37,
                                        "end": 49
                                    },
                                    "fieldType": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "Credentials",
                                            "loc": {
                                                "start": 37,
                                                "end": 48
                                            }
                                        },
                                        "loc": {
                                            "start": 37,
                                            "end": 48
                                        }
                                    }
                                }
                            }
                        ],
                        "directives": [],
                        "loc": {
                            "start": 24,
                            "end": 63
                        },
                        "fieldType": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "UserProfile",
                                "loc": {
                                    "start": 52,
                                    "end": 63
                                }
                            },
                            "loc": {
                                "start": 52,
                                "end": 63
                            }
                        }
                    }
                ],
                "loc": {
                    "start": 0,
                    "end": 65
                }
            },
            {
                "kind": "InputObjectTypeDefinition",
                "name": {
                    "kind": "Name",
                    "value": "Credentials",
                    "loc": {
                        "start": 73,
                        "end": 84
                    }
                },
                "directives": [],
                "fields": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "login",
                            "loc": {
                                "start": 91,
                                "end": 96
                            }
                        },
                        "directives": [],
                        "loc": {
                            "start": 91,
                            "end": 105
                        },
                        "fieldType": {
                            "kind": "NonNullType",
                            "loc": {
                                "start": 98,
                                "end": 105
                            },
                            "fieldType": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String",
                                    "loc": {
                                        "start": 98,
                                        "end": 104
                                    }
                                },
                                "loc": {
                                    "start": 98,
                                    "end": 104
                                }
                            }
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "password",
                            "loc": {
                                "start": 110,
                                "end": 118
                            }
                        },
                        "directives": [],
                        "loc": {
                            "start": 110,
                            "end": 127
                        },
                        "fieldType": {
                            "kind": "NonNullType",
                            "loc": {
                                "start": 120,
                                "end": 127
                            },
                            "fieldType": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String",
                                    "loc": {
                                        "start": 120,
                                        "end": 126
                                    }
                                },
                                "loc": {
                                    "start": 120,
                                    "end": 126
                                }
                            }
                        }
                    }
                ],
                "loc": {
                    "start": 67,
                    "end": 129
                }
            }
        ],
        "loc": {
            "start": 0,
            "end": 130
        },
        "tokens": [],
        "comments": [],
        "range": {}
    },
    services: {},
    scopeManager: { variables: [], scopes: [{ set: new Map(), variables: [], through: [] }], getDeclaredVariables: () => {} },
    visitorKeys: {
        Document: ['definitions'],
        ObjectTypeDefinition: ['interfaces', 'directives', 'fields'],
        ObjectTypeExtension: ['interfaces', 'directives', 'fields'],
        InputObjectTypeDefinition: ['directives', 'fields'],
        InputValueDefinition: ['directives', 'fieldType'],
        FieldDefinition: ['directives', 'fieldType', 'arguments'],
        EnumTypeDefinition: ['directives', 'values']
    },
    parserSettings: {
        nodeIdentifier: 'kind',
        supportCodePathAnalysis: false,
        supportScope: false
    }
});
