const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    "_id": {
        "type": "String"
    },
    "listing_url": {
        "type": "String"
    },
    "name": {
        "type": "String"
    },
    "summary": {
        "type": "String"
    },
    "space": {
        "type": "String"
    },
    "description": {
        "type": "String"
    },
    "neighborhood_overview": {
        "type": "String"
    },
    "notes": {
        "type": "String"
    },
    "transit": {
        "type": "String"
    },
    "access": {
        "type": "String"
    },
    "interaction": {
        "type": "String"
    },
    "house_rules": {
        "type": "String"
    },
    "property_type": {
        "type": "String"
    },
    "room_type": {
        "type": "String"
    },
    "bed_type": {
        "type": "String"
    },
    "minimum_nights": {
        "type": "String"
    },
    "maximum_nights": {
        "type": "number"
    },
    "cancellation_policy": {
        "type": "String"
    },
    "last_scraped": {
        "$date": {
            "$numberLong": {
                "type": "String"
            }
        }
    },
    "calendar_last_scraped": {
        "$date": {
            "$numberLong": {
                "type": "String"
            }
        }
    },
    "first_review": {
        "$date": {
            "$numberLong": {
                "type": "String"
            }
        }
    },
    "last_review": {
        "$date": {
            "$numberLong": {
                "type": "String"
            }
        }
    },
    "accommodates": {
        "$numberInt": {
            "type": "Date"
        }
    },
    "bedrooms": {
        "$numberInt": {
            "type": "Date"
        }
    },
    "beds": {
        "$numberInt": {
            "type": "Date"
        }
    },
    "number_of_reviews": {
        "$numberInt": {
            "type": "Date"
        }
    },
    "bathrooms": {
            "type": "number"
    },
    "amenities": {
        "type": [
            "String"
        ]
    },
    "price": {
        "type": "number"
    },
    "extra_people": {
         "type": "number"
    },
    "guests_included": {
            "type": "number"
    },
    "images": {
        "thumbnail_url": {
            "type": "String"
        },
        "medium_url": {
            "type": "String"
        },
        "picture_url": {
            "type": "String"
        },
        "xl_picture_url": {
            "type": "String"
        }
    },
    "host": {
        "host_id": {
            "type": "String"
        },
        "host_url": {
            "type": "String"
        },
        "host_name": {
            "type": "String"
        },
        "host_location": {
            "type": "String"
        },
        "host_about": {
            "type": "String"
        },
        "host_thumbnail_url": {
            "type": "String"
        },
        "host_picture_url": {
            "type": "String"
        },
        "host_neighbourhood": {
            "type": "String"
        },
        "host_is_superhost": {
            "type": "Boolean"
        },
        "host_has_profile_pic": {
            "type": "Boolean"
        },
        "host_identity_verified": {
            "type": "Boolean"
        },
        "host_listings_count": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "host_total_listings_count": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "host_verifications": {
            "type": [
                "String"
            ]
        }
    },
    "address": {
        "street": {
            "type": "String"
        },
        "suburb": {
            "type": "String"
        },
        "government_area": {
            "type": "String"
        },
        "market": {
            "type": "String"
        },
        "country": {
            "type": "String"
        },
        "country_code": {
            "type": "String"
        },
        "location": {
            "type": {
                "type": "String"
            },
            "coordinates": {
                "type": [
                    "Mixed"
                ]
            },
            "is_location_exact": {
                "type": "Boolean"
            }
        }
    },
    "availability": {
        "availability_30": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "availability_60": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "availability_90": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "availability_365": {
            "$numberInt": {
                "type": "Date"
            }
        }
    },
    "review_scores": {
        "review_scores_accuracy": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "review_scores_cleanliness": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "review_scores_checkin": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "review_scores_communication": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "review_scores_location": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "review_scores_value": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "review_scores_rating": {
            "$numberInt": {
                "type": "Date"
            }
        }
    },
    "reviews": {
        "type": [
            "Mixed"
        ]
    }
});

module.exports = mongoose.model('Room', RoomSchema, 'listingsAndReviews');