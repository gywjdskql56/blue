import sqlite3

import pymssql
import pandas as pd
# conn = pymssql.connect(host='10.93.20.194', user='quant', password='mirae', database = 'MARKET',charset='utf8') # 운영DB
conn = pymssql.connect(host='10.93.20.65', user='quant', password='mirae', database = 'MARKET',charset='utf8') # 개발DB
sql = '''
select top 100 *
from EUMQNTDB..GQPM_MAST3
where 1=1
and ticker = 'AAPL US EQUITY' 
'''
df = pd.read_sql(sql, con= conn)
print(df)