# BankOnIt
"Holding Banks Account-able"

## Project Description
BankOnIt is an application aimed at increasing transparency between banking institutions and the American consumer.  This application will allow users to search for their bank or ZIP code to see formal FDIC complaints that have been filed against that bank.  It will also provide in depth analysis of that data to create a more informed public.

## Problem Statement
Putting all your money into the hands of a company is very risky business.  In the past 2 decades the US has seen multiple financial scandals and crises resulting in the lose of trillions of citizen dollars.  The problem is it's hard to find out if the financial institution you have trusted your money to is actually a good choice. The sites currently available to search for reviews on your bank are busy, not state specific, and full of unverified reviews. They also combine positive and negative reviews which can cause confusing results.  

## Proposed Solution
The FDIC (Federal Deposit Insurance Company) is a Federal organization that was built to try and protect citizens from fraud and other harmful financial transactions. One of their main purposes is to file and resolve consumer complaints against financial institutions. These are all verified complaints and also contain if the issue was resolved and how.  BankOnIt will use this data to provide insight into these financial institutions so consumers can understand potential pitfalls or risks that could arise being a member of that institution. BankOnIt will allow users to experience more transparency with their financial partner. 

## User Stories
- As a consumer I can see a landing page with a brief description of the application.
- On the landing page I see the option to search by state or financial institution.
- As a consumer when I enter my state or bank name and hit search I am redirected to a page that lists complaints filed.
- As a consumer I can apply additional filters to this data, including state and zip code if I had not already picked that, and by service/product the complaint was filed for.
- As a consumer I can see some charts and analysis of the complaints against that institution.
- As a consumer I have the option to create another search. 

## Technologies 

### Frontend
- Vue 
- Vuetify 
- D3 for data analysis

### Backend
- CSVTOJSON [link](https://www.npmjs.com/package/csvtojson)
- Express / Knex