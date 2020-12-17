import React from "react";
import "./global.css";
import { useEffect,useState } from 'react';
import Chart from "react-google-charts";
import fever from "./fever.svg"
import mask from "./mask.svg"
import skull from "./skull.svg"

function GlobalData({currentScreen}) {
  
  const [globalData,setGlobalData] = useState({});

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(apidata => {setGlobalData(apidata);})
        .catch(error => console.log(error));
    }, [])

  return (
    <div>
      <div className="globalmiddle container-fluid  text-center overflow-scroll">
        <h1 >Global Data</h1>
        <div className="row">
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-primary shadow-lg text-white  p-10 text-center">
            <div className="row">
            <div className="col-2 p-10"><img src={fever} alt="icon" width="60px"/></div>
            <div className="col-10 text-right"><h4 className="m-0 ">{globalData["active"]} </h4><h5 className="m-5 ">Active Cases </h5> 
              </div>
                    </div>
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-success shadow-lg text-white  p-10 text-center">
            <div className="row">
            <div className="col-2 p-10"><img src={mask} alt="icon" width="60px"/></div>
            <div className="col-10 text-right"><h4 className="m-0 ">{globalData["recovered"]}</h4><h5 className="m-5 ">Recovered </h5> 
              </div>
                    </div>
            </div>
          </div>
          <div className="col-sm p-5">
            <div className="card h-100 border-0 bg-danger shadow-lg text-white p-10 text-center">
            <div className="row">
            <div className="col-2 p-10"><img src={skull} alt="icon" width="70px"/></div>
            <div className="col-10 text-right"><h4 className="m-0 ">{globalData["deaths"]} </h4><h5 className="m-5 ">Deaths </h5></div> 
                    </div>
            </div>
          </div>
        </div>
        <Chart
          className="align-center "
          
          width={"100%"}
          height={"500px"}
          chartType="GeoChart"
          chartVersion="49"
          data={[
            ["Country", "Cases"],
            ["Afghanistan", 9305],
            ['Albania',23216],
            ['Algeria',29135],
            ['Andorra','597'],
            ['Angola','7000'],
            ['Anguilla','6'],
            ['Antigua and Barbuda','5'],
            ['Argentina','124699'],
            ['Armenia','18968'],
            ['Aruba','122'],
            ['Australia','1458'],
            ['Austria','34537'],
            ['Azerbaijan','62427'],
            ['Bahamas','1453'],
            ['Bahrain','1605'],
            ['Bangladesh','59334'],
            ['Barbados','17'],
            ['Belarus','21233'],
            ['Belgium','551271'],
            ['Belize','4786'],
            ['Benin','74'],
            ['Bermuda','208'],
            ['Bhutan','31'],
            ['Bolivia','11970'],
            ['Bosnia','31476'],
            ['Botswana','2379'],
            ['Brazil','734640'],
            ['British Virgin Islands','3'],
            ['Brunei','1'],
            ['Bulgaria','90347'],
            ['Burkina Faso','1287'],
            ['Burundi','94'],
            ['Cabo Verde','230'],
            ['Cambodia','43'],
            ['Cameroon','1063'],
            ['Canada','76214'],
            ['Caribbean Netherlands','8'],
            ['Cayman Islands','23'],
            ['Central African Republic','2949'],
            ['Chad','71'],
            ['Channel Islands','805'],
            ['Chile','10920'],
            ['China','315'],
            ['Colombia','76860'],
            ['Comoros','20'],
            ['CG','1112'],
            ['Costa Rica','31109'],
            ['Croatia','22402'],
            ['Cuba','876'],
            ['Curaçao','1799'],
            ['Cyprus','13648'],
            ['Czechia','67480'],
            ["Côte d'Ivoire",'307'],
            ["CD",'1707'],
            ['Denmark','35003'],
            ['Diamond Princess','0'],
            ['Djibouti','70'],
            ['Dominica','5'],
            ['Dominican Republic','32225'],
            ['Ecuador','10509'],
            ['Egypt','10193'],
            ['El Salvador','2697'],
            ['Equatorial Guinea','49'],
            ['Eritrea','147'],
            ['Estonia','6994'],
            ['Ethiopia','18219'],
            ['Falkland Islands (Malvinas)','6'],
            ['Faroe Islands','20'],
            ['Fiji','6'],
            ['Finland','8898'],
            ['France','2153288'],
            ['French Guiana','1960'],
            ['French Polynesia','10931'],
            ['Gabon','84'],
            ['Gambia','9'],
            ['Georgia','29184'],
            ['Germany','341059'],
            ['Ghana','1011'],
            ['Gibraltar','73'],
            ['Greece','113698'],
            ['Greenland','1'],
            ['Grenada','44'],
            ['Guadeloupe','6128'],
            ['Guatemala','7030'],
            ['Guinea','667'],
            ['Guinea-Bissau','25'],
            ['Guyana','673'],
            ['Haiti','1083'],
            ['Holy See (Vatican City State)','12'],
            ['Honduras','59550'],
            ['Hong Kong','1242'],
            ['Hungary','197246'],
            ['Iceland','129'],
            ['India',329056],
            ['Indonesia','94922'],
            ['Iran','233764'],
            ['Iraq','52875'],
            ['Ireland','51278'],
            ['Isle of Man','4'],
            ['Israel','20112'],
            ['Italy','645706'],
            ['Jamaica','3260'],
            ['Japan','25807'],
            ['Jordan','33846'],
            ['Kazakhstan','13370'],
            ['Kenya','16836'],
            ["KP",'16836'],
            ["KR",'16836'],
            ['Kuwait','3149'],
            ['Kyrgyzstan','5564'],
            ['Lao People Democratic Republic','5'],
            ['Latvia','8960'],
            ['Lebanon','44492'],
            ['Lesotho','896'],
            ['Liberia','284'],
            ['Libya','28533'],
            ['Liechtenstein','202'],
            ['Lithuania','55583'],
            ['Luxembourg','8504'],
            ['MS Zaandam','0'],
            ['Macao','0'],
            ['Macedonia','21910'],
            ['Madagascar','336'],
            ['Malawi','243'],
            ['Malaysia','14751'],
            ['Maldives','584'],
            ['Mali','1976'],
            ['Malta','1719'],
            ['Marshall Islands','0'],
            ['Martinique','5435'],
            ['Mauritania','2947'],
            ['Mauritius','25'],
            ['Mayotte','2599'],
            ['Mexico','214014'],
            ['Moldova','15002'],
            ['Monaco','66'],
            ['Mongolia','534'],
            ['Montenegro','9403'],
            ['Montserrat','0'],
            ['Morocco','33997'],
            ['Mozambique','1757'],
            ['Myanmar','19101'],
            ['Namibia','1916'],
            ['Nepal','10604'],
            ['Netherlands','629500'],
            ['New Caledonia','2'],
            ['New Zealand','43'],
            ['Nicaragua','1500'],
            ['Niger','950'],
            ['Nigeria','6438'],
            ['Norway','6893'],
            ['Oman','6619'],
            ['Pakistan','48369'],
            ['Palestine','23606'],
            ['Panama','28721'],
            ['Papua New Guinea','120'],
            ['Puerto Rico','0'],
            ['Paraguay','25409'],
            ['Peru','28544'],
            ['Philippines','24873'],
            ['Poland','243337'],
            ['Portugal','68762'],
            ['Qatar','2133'],
            ['Republic of the Congo','88388'],
            ['Romania','88388'],
            ['Russia','509790'],
            ['Rwanda','739'],
            ['Réunion','455'],
            ['Saint Kitts and Nevis','5'],
            ['Saint Lucia','34'],
            ['Saint Martin','114'],
            ['Saint Pierre Miquelon','0'],
            ['Saint Vincent and the Grenadines','17'],
            ['Samoa','0'],
            ['San Marino','277'],
            ['Sao Tome and Principe','41'],
            ['Saudi Arabia','3063'],
            ['Senegal','635'],
            ['Serbia','248583'],
            ['Seychelles','18'],
            ['Sierra Leone','523'],
            ['Singapore','86'],
            ['Sint Maarten','132'],
            ['Slovakia','36195'],
            ['Slovenia','20746'],
            ['Solomon Islands','12'],
            ['Somalia','929'],
            ['South Africa','85041'],
            ['SS','117'],
            ['Spain','1723087'],
            ['Sri Lanka','8923'],
            ['St. Barth','34'],
            ['Sudan','7945'],
            ['Suriname','33'],
            ['Svalbard and Jan Mayen','0'],
            ['Swaziland','304'],
            ['Sweden','340783'],
            ['Switzerland','76579'],
            ['Syrian Arab Republic','4415'],
            ['Taiwan','130'],
            ['Tajikistan','473'],
            ['Tanzania','305'],
            ['Thailand','224'],
            ['Timor-Leste','1'],
            ['Togo','408'],
            ['Trinidad and Tobago','573'],
            ['Tunisia','22484'],
            ['Turkey','219931'],
            ['Turkmenistan','24'],
            ['UAE','22170'],
            ['united kingdom','1823208'],
            ['United states','6849604'],
            ['Uganda','18438'],
            ['Ukraine','368543'],
            ['Uruguay','3425'],
            ['Uzbekistan','2123'],
            ['Vanuatu','0'],
            ['Venezuela','4244'],
            ['Vietnam','118'],
            ['Wallis and Futuna','2'],
            ['Western Sahara','1'],
            ['Yemen','95'],
            ['Zambia','452'],
            ['Zimbabwe','1613']
          ]}
          options={
            {
              'backgroundColor': 'transparent',
              colorAxis: {colors: ['#850d0d', '#5e0909','#400606','#2b0404',]},
            }
          }
          mapsApiKey="AIzaSyDFlf6SC6TkCAi09f7BRhcIiA3Ah_pijaU"
          rootProps={{ 'data-testid': '1' }}
        /><br/>


      </div>
    </div>
  );
}

export default GlobalData;
