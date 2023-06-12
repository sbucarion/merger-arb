import os
from django.conf import settings
from django.http import JsonResponse
from django.db import connections
import sqlite3
import json

DB_PATH = r"C:\Users\sbuca\Desktop\code_post_grad\merger_arb\database\filing_data.sqlite3"


def get_data(request):
    connection = sqlite3.connect(DB_PATH)
    cursor = connection.cursor()

    query = """SELECT * FROM data"""

    cursor.execute(query)
    results = cursor.fetchall()

    results = [{ 'accession_no': col1, 'cik': col2, 'unix_number': col3 } for col1, col2, col3 in results]

    print(results)

    cursor.close()
    connection.close()

    serialized_data = {f"item_{i}": item for i, item in enumerate(results)}

    return JsonResponse(serialized_data)