import logging

from mongoengine import Document
from mongoengine import StringField, IntField

from django.conf import settings

from crits.core.crits_mongoengine import CritsDocument, CritsSchemaDocument

logger = logging.getLogger(__name__)

class Bucket(CritsDocument, CritsSchemaDocument, Document):
    """
    CRITs Bucket Class
    """

    meta = {
        "collection": settings.COL_BUCKET_LISTS,
        "crits_type": 'Bucketlist',
        "latest_schema_version": 1,
        "schema_doc": {
            'name': 'Bucketlist name',
            'Campaign': 'Integer',
            'Certificate': 'Integer',
            'Disassembly': 'Integer',
            'Domain': 'Integer',
            'Email': 'Integer',
            'Target': 'Integer',
            'Event': 'Integer',
            'IP': 'Integer',
            'Indicator': 'Integer',
            'PCAP': 'Integer',
            'RawData': 'Integer',
            'Sample': 'Integer'
        },
    }

    name = StringField(required=True)
    Campaign = IntField(default=0)
    Certificate = IntField(default=0)
    Disassembly = IntField(default=0)
    Domain = IntField(default=0)
    Email = IntField(default=0)
    Event = IntField(default=0)
    Indicator = IntField(default=0)
    IP = IntField(default=0)
    PCAP = IntField(default=0)
    RawData = IntField(default=0)
    Sample = IntField(default=0)
    Target = IntField(default=0)

    def migrate(self):
        """
        Migrate to the latest schema version.
        """

        pass
