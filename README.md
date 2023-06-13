# merger-arb
Finds active mergers from SEC.gov and provides information about an arbitrage for that merger

Add wkhtmltopdf install to directory to get pdf downloader working (github wont allow files of that size here)

Project temporarily on pause to foucs on larger version of this (SECDocuViewer)
 - instead of just 8k mergers its every filing

#CURRENT FUNCTIOANLITY
 - scrape 8k filings and determine if merger relates, saves as pdf and meta data to database, frontend connects to database and displays metadata to website (cik, unix, accession)
 - not a working product until display merger data and not meta data (need model to extract info from the file then its finished)


#TODO
fix crappy code on scraper and add comments to every code file 


