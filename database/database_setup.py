import sqlite3
import os

file_path = os.path.abspath(__file__)
directory = os.path.dirname(file_path)
DB_PATH = directory + '\\filing_data.sqlite3'

conn = sqlite3.connect(DB_PATH)

cursor = conn.cursor()

#Acc no -> used to find file in the storage directory
#Cik -> link 8-ks with a compangy and group all 8ks
#Unix -> store in sequential order and know what was the last 8k for everything or per company
cursor.execute('''CREATE TABLE data
                  (accession_no TEXT,
                   cik TEXT,
                   unix_number INTEGER)''')


cursor.execute('''CREATE TABLE seen_filings
                  (accession_no TEXT,
                   unix_number INTEGER)''')

conn.commit()
conn.close()