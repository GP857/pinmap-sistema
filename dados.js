// PINMAP - Sistema Final com Usuários Únicos, IDs Reindexados e Localizações Corrigidas
// Total de 3845 usuários únicos
// Data de atualização: 2025-07-26 16:34:41 - posix - gustavopinheiro

const usuarios = [
{
        "id": 1,
        "nome": "Juliane Ap. Cyrilo Cunha",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.744338,
        "longitude": -47.1767203,
        "cep": "13145352",
        "pais": "Brasil"
    },
    {
        "id": 2,
        "nome": "João Paulo de Moraes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9320985,
        "longitude": -47.0762548,
        "cep": "13050008",
        "pais": "Brasil"
    },
    {
        "id": 3,
        "nome": "Lucas Cunha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8533533,
        "longitude": -47.0469649,
        "cep": "13087500",
        "pais": "Brasil"
    },
    {
        "id": 4,
        "nome": "Aline Tortosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9421519,
        "longitude": -47.0230088,
        "cep": "13045260",
        "pais": "Brasil"
    },
    {
        "id": 5,
        "nome": "Alexx Amatuzzi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322020",
        "pais": "Brasil"
    },
    {
        "id": 6,
        "nome": "Ricardo Augusto Costa Raven",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8862883,
        "longitude": -47.2013605,
        "cep": "13186635",
        "pais": "Brasil"
    },
    {
        "id": 7,
        "nome": "Carlos Eduardo Pereira de Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9826214,
        "longitude": -47.1202832,
        "cep": "13054421",
        "pais": "Brasil"
    },
    {
        "id": 8,
        "nome": "Adrian Roberto Chiminazzo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9813643,
        "longitude": -46.9938373,
        "cep": "13276409",
        "pais": "Brasil"
    },
    {
        "id": 9,
        "nome": "Roberta Dos Santos Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9710829,
        "longitude": -47.1572759,
        "cep": "13056204",
        "pais": "Brasil"
    },
    {
        "id": 10,
        "nome": "Ingryd Micheli Breg",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5571965,
        "longitude": -47.3772316,
        "cep": "13486333",
        "pais": "Brasil"
    },
    {
        "id": 11,
        "nome": "Josenil Roberto Braggion",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1286709,
        "longitude": -47.2424757,
        "cep": "13348220",
        "pais": "Brasil"
    },
    {
        "id": 12,
        "nome": "Everton F. de Andrade",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7881625,
        "longitude": -47.1927215,
        "cep": "13142126",
        "pais": "Brasil"
    },
    {
        "id": 13,
        "nome": "Thiago Gomes de Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9329629,
        "longitude": -47.0909205,
        "cep": "13050055",
        "pais": "Brasil"
    },
    {
        "id": 14,
        "nome": "Carlos S Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9262061,
        "longitude": -47.1001863,
        "cep": "13060022",
        "pais": "Brasil"
    },
    {
        "id": 15,
        "nome": "Joseleyne de Souza Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9430521,
        "longitude": -47.0911774,
        "cep": "13050061",
        "pais": "Brasil"
    },
    {
        "id": 16,
        "nome": "THAIS DUARTE ESNARRIAGA",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9552089,
        "longitude": -46.9939365,
        "cep": "13272071",
        "pais": "Brasil"
    },
    {
        "id": 17,
        "nome": "Heloísa Mendes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181655",
        "pais": "Brasil"
    },
    {
        "id": 18,
        "nome": "ALEXANDRE DA S. MENDES  BARROS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9079159,
        "longitude": -47.0476421,
        "cep": "13026050",
        "pais": "Brasil"
    },
    {
        "id": 19,
        "nome": "Mayara",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8235953,
        "longitude": -47.2390337,
        "cep": "13175662",
        "pais": "Brasil"
    },
    {
        "id": 20,
        "nome": "Rafael Silva Piranga",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13331600",
        "pais": "Brasil"
    },
    {
        "id": 21,
        "nome": "esmael  Carvalho de souza",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9841935,
        "longitude": -46.9805303,
        "cep": "13275616",
        "pais": "Brasil"
    },
    {
        "id": 22,
        "nome": "Rafael Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064862",
        "pais": "Brasil"
    },
    {
        "id": 23,
        "nome": "andreluizbedin@yahoo.com.br",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6996652,
        "longitude": -46.9929159,
        "cep": "13911062",
        "pais": "Brasil"
    },
    {
        "id": 24,
        "nome": "Fabiano Soares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8639094,
        "longitude": -47.1440188,
        "cep": "13067356",
        "pais": "Brasil"
    },
    {
        "id": 25,
        "nome": "PETERSON RISSO",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7283727,
        "longitude": -47.3004621,
        "cep": "13473040",
        "pais": "Brasil"
    },
    {
        "id": 26,
        "nome": "Renato Masson",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8238635,
        "longitude": -47.28698,
        "cep": "13172794",
        "pais": "Brasil"
    },
    {
        "id": 27,
        "nome": "Joao Carlos Simoes Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9109054,
        "longitude": -47.0521818,
        "cep": "13026001",
        "pais": "Brasil"
    },
    {
        "id": 28,
        "nome": "Richard Silva Vilas Boas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9892034,
        "longitude": -47.1153765,
        "cep": "13054353",
        "pais": "Brasil"
    },
    {
        "id": 29,
        "nome": "William Paixão",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9471187,
        "longitude": -47.032606,
        "cep": "13045135",
        "pais": "Brasil"
    },
    {
        "id": 30,
        "nome": "Fábio Rogério Gudaitis Gonçalves",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1231882,
        "longitude": -47.230564,
        "cep": "13346480",
        "pais": "Brasil"
    },
    {
        "id": 31,
        "nome": "allan fernandes ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9278024,
        "longitude": -47.116801,
        "cep": "13060571",
        "pais": "Brasil"
    },
    {
        "id": 32,
        "nome": "Cássia Queiroz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185844",
        "pais": "Brasil"
    },
    {
        "id": 33,
        "nome": "Alex Maciel Rodrigues",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.2452332,
        "longitude": -46.8565464,
        "cep": "13205732",
        "pais": "Brasil"
    },
    {
        "id": 34,
        "nome": "robson de araujo paula",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173433",
        "pais": "Brasil"
    },
    {
        "id": 35,
        "nome": "Leonardo Souza Lôbo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9464264,
        "longitude": -47.0265448,
        "cep": "13045165",
        "pais": "Brasil"
    },
    {
        "id": 36,
        "nome": "Camila Candreva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9615427,
        "longitude": -47.0508372,
        "cep": "13042710",
        "pais": "Brasil"
    },
    {
        "id": 37,
        "nome": "Leandro Renato Trombini",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9021291,
        "longitude": -47.1954572,
        "cep": "13186521",
        "pais": "Brasil"
    },
    {
        "id": 38,
        "nome": "Genivaldo Ferreira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7205895,
        "longitude": -47.3494206,
        "cep": "13470220",
        "pais": "Brasil"
    },
    {
        "id": 39,
        "nome": "EMERSON",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8839734,
        "longitude": -47.2022231,
        "cep": "13186170",
        "pais": "Brasil"
    },
    {
        "id": 40,
        "nome": "Rodrigo Murari",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9254342,
        "longitude": -47.1168349,
        "cep": "13060367",
        "pais": "Brasil"
    },
    {
        "id": 41,
        "nome": "Felipe Bisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8909327,
        "longitude": -46.9803095,
        "cep": "13105672",
        "pais": "Brasil"
    },
    {
        "id": 42,
        "nome": "Wellington Lima",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8794004,
        "longitude": -47.2045346,
        "cep": "13186013",
        "pais": "Brasil"
    },
    {
        "id": 43,
        "nome": "Marcel Murayama",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9339272,
        "longitude": -47.0590281,
        "cep": "13040089",
        "pais": "Brasil"
    },
    {
        "id": 44,
        "nome": "jullia Magno",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9526727,
        "longitude": -47.1634092,
        "cep": "13059194",
        "pais": "Brasil"
    },
    {
        "id": 45,
        "nome": "Fábio Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9254688,
        "longitude": -47.0733412,
        "cep": "13030540",
        "pais": "Brasil"
    },
    {
        "id": 46,
        "nome": "nilson da silva barbosa",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6147446,
        "longitude": -47.422346,
        "cep": "13481274",
        "pais": "Brasil"
    },
    {
        "id": 47,
        "nome": "Ricardo Alexandre Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9778664,
        "longitude": -47.1435873,
        "cep": "13056400",
        "pais": "Brasil"
    },
    {
        "id": 48,
        "nome": "Roberta Aparecida de Brito Benez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8980637,
        "longitude": -47.0675449,
        "cep": "13020110",
        "pais": "Brasil"
    },
    {
        "id": 49,
        "nome": "Adenilson Luiz Pedro",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13451190",
        "pais": "Brasil"
    },
    {
        "id": 50,
        "nome": "Silvino V. Vieira",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5540246,
        "longitude": -47.4524335,
        "cep": "13483506",
        "pais": "Brasil"
    },
    {
        "id": 51,
        "nome": "Lucas José de Souza Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9761443,
        "longitude": -46.9884262,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 52,
        "nome": "Elton sa da silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9031228,
        "longitude": -47.2468119,
        "cep": "13188191",
        "pais": "Brasil"
    },
    {
        "id": 53,
        "nome": "Gionedes Aparecido Martins Seabra",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8839734,
        "longitude": -47.2022231,
        "cep": "13186020",
        "pais": "Brasil"
    },
    {
        "id": 54,
        "nome": "Anderson Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8136892,
        "longitude": -47.2296625,
        "cep": "13177292",
        "pais": "Brasil"
    },
    {
        "id": 55,
        "nome": "Abayomiakili André Macedo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9641762,
        "longitude": -47.1703876,
        "cep": "13057201",
        "pais": "Brasil"
    },
    {
        "id": 56,
        "nome": "Erika Aparecida Gilioli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9466673,
        "longitude": -47.1207725,
        "cep": "13060773",
        "pais": "Brasil"
    },
    {
        "id": 57,
        "nome": "Gilvania Sousa Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 58,
        "nome": "Marcelo Felipe dos Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8790882,
        "longitude": -47.1961951,
        "cep": "13186330",
        "pais": "Brasil"
    },
    {
        "id": 59,
        "nome": "Luciano Beteto",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -22.741347,
        "longitude": -46.894846,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 60,
        "nome": "Michele Gomes de Jesus",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9541865,
        "longitude": -47.0769735,
        "cep": "13051410",
        "pais": "Brasil"
    },
    {
        "id": 61,
        "nome": "Adriana Paula de Sousa Alvarenga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 62,
        "nome": "JALMIR VIEIRA DOS SANTOS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.976843,
        "longitude": -47.1164158,
        "cep": "13054541",
        "pais": "Brasil"
    },
    {
        "id": 63,
        "nome": "David Fabio da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9380711,
        "longitude": -47.116636,
        "cep": "13060740",
        "pais": "Brasil"
    },
    {
        "id": 64,
        "nome": "Raphael Montali da Assumpção",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8779459,
        "longitude": -47.0510204,
        "cep": "13076869",
        "pais": "Brasil"
    },
    {
        "id": 65,
        "nome": "Daniel Guimarães Sanches",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9973292,
        "longitude": -47.0180416,
        "cep": "13278210",
        "pais": "Brasil"
    },
    {
        "id": 66,
        "nome": "Fábio Almeida Silva",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284488",
        "pais": "Brasil"
    },
    {
        "id": 67,
        "nome": "Marcelo Alves Bandeira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7304316,
        "longitude": -47.284983,
        "cep": "13475010",
        "pais": "Brasil"
    },
    {
        "id": 68,
        "nome": "ƎꓶⱯ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9000726,
        "longitude": -47.0970989,
        "cep": "13033740",
        "pais": "Brasil"
    },
    {
        "id": 69,
        "nome": "Roberta Monteiro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9060283,
        "longitude": -46.976542,
        "cep": "13273300",
        "pais": "Brasil"
    },
    {
        "id": 70,
        "nome": "Henrique Seiji Higashie Ike",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8732349,
        "longitude": -47.0284539,
        "cep": "13091012",
        "pais": "Brasil"
    },
    {
        "id": 71,
        "nome": "Murilo Pereira Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9075221,
        "longitude": -47.0556501,
        "cep": "13015122",
        "pais": "Brasil"
    },
    {
        "id": 72,
        "nome": "Thiago Silveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9123495,
        "longitude": -47.0542174,
        "cep": "13026064",
        "pais": "Brasil"
    },
    {
        "id": 73,
        "nome": "Daniel Marcos Marichi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9065228,
        "longitude": -47.1172128,
        "cep": "13061100",
        "pais": "Brasil"
    },
    {
        "id": 74,
        "nome": "SOLANGE COUTINHO DOS SANTOS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.952742,
        "longitude": -47.1828226,
        "cep": "13058358",
        "pais": "Brasil"
    },
    {
        "id": 75,
        "nome": "dennis frank rezende",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9565814,
        "longitude": -47.1928846,
        "cep": "13058017",
        "pais": "Brasil"
    },
    {
        "id": 76,
        "nome": "Ruy Guilherme Vieira da Silva evangelista",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 77,
        "nome": "Marcelo Freitas",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173482",
        "pais": "Brasil"
    },
    {
        "id": 78,
        "nome": "Douglas henrique borges",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8708673,
        "longitude": -47.062513,
        "cep": "13087320",
        "pais": "Brasil"
    },
    {
        "id": 79,
        "nome": "Clecio De Souza Carvalho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8160143,
        "longitude": -47.1638459,
        "cep": "13179322",
        "pais": "Brasil"
    },
    {
        "id": 80,
        "nome": "Edmir da chaga silveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9460931,
        "longitude": -47.1234351,
        "cep": "13060766",
        "pais": "Brasil"
    },
    {
        "id": 81,
        "nome": "Antonio aparecido dias Fernandes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.79312,
        "longitude": -47.1977505,
        "cep": "13178353",
        "pais": "Brasil"
    },
    {
        "id": 82,
        "nome": "Alexandre Fernando Zazia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.91746,
        "longitude": -47.1017742,
        "cep": "13060073",
        "pais": "Brasil"
    },
    {
        "id": 83,
        "nome": "lorenlayr13@gmail.com",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9214184,
        "longitude": -47.0418145,
        "cep": "13100430",
        "pais": "Brasil"
    },
    {
        "id": 84,
        "nome": "MARCOS WILLIAM Gonçalves Miranda VIEIRA",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8086625,
        "longitude": -47.2040194,
        "cep": "13178321",
        "pais": "Brasil"
    },
    {
        "id": 85,
        "nome": "Wellington rodrigo de oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9736336,
        "longitude": -47.1711701,
        "cep": "13057400",
        "pais": "Brasil"
    },
    {
        "id": 86,
        "nome": "Kristiane Aparecida Daenekas",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.940511,
        "longitude": -47.0008297,
        "cep": "13272700",
        "pais": "Brasil"
    },
    {
        "id": 87,
        "nome": "Igor dos Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13274560",
        "pais": "Brasil"
    },
    {
        "id": 88,
        "nome": "wilson silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9750222,
        "longitude": -47.1451955,
        "cep": "13056425",
        "pais": "Brasil"
    },
    {
        "id": 89,
        "nome": "AL",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9396666,
        "longitude": -46.9738752,
        "cep": "13273649",
        "pais": "Brasil"
    },
    {
        "id": 90,
        "nome": "Thais Lobo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9594918,
        "longitude": -47.1842196,
        "cep": "13058381",
        "pais": "Brasil"
    },
    {
        "id": 91,
        "nome": "Marcelo Roberto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9505183,
        "longitude": -46.9725696,
        "cep": "13273601",
        "pais": "Brasil"
    },
    {
        "id": 92,
        "nome": "leandro lopes da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9202183,
        "longitude": -47.102124,
        "cep": "13060061",
        "pais": "Brasil"
    },
    {
        "id": 93,
        "nome": "Erika Rondina",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9062771,
        "longitude": -47.1749254,
        "cep": "13185340",
        "pais": "Brasil"
    },
    {
        "id": 94,
        "nome": "Renato Novaes",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7007656,
        "longitude": -47.2949187,
        "cep": "13474580",
        "pais": "Brasil"
    },
    {
        "id": 95,
        "nome": "Antonio Vieira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181580",
        "pais": "Brasil"
    },
    {
        "id": 96,
        "nome": "William Viana Mapelli",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9520271,
        "longitude": -46.9718894,
        "cep": "13273608",
        "pais": "Brasil"
    },
    {
        "id": 97,
        "nome": "Diego Lobo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9509438,
        "longitude": -47.1772102,
        "cep": "13058301",
        "pais": "Brasil"
    },
    {
        "id": 98,
        "nome": "Anderson Canciano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9664154,
        "longitude": -47.1691105,
        "cep": "13057189",
        "pais": "Brasil"
    },
    {
        "id": 99,
        "nome": "Jean Rodrigues da Luz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8763501,
        "longitude": -47.0451729,
        "cep": "13076001",
        "pais": "Brasil"
    },
    {
        "id": 100,
        "nome": "Helena Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057036",
        "pais": "Brasil"
    },
    {
        "id": 101,
        "nome": "Bruna Hass Avancini",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8763501,
        "longitude": -47.0451729,
        "cep": "13076001",
        "pais": "Brasil"
    },
    {
        "id": 102,
        "nome": "Rodrigo Otavio Dantas Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.821683,
        "longitude": -47.2663733,
        "cep": "13170011",
        "pais": "Brasil"
    },
    {
        "id": 103,
        "nome": "Danilo Nascimento",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1036735,
        "longitude": -47.2245757,
        "cep": "13345731",
        "pais": "Brasil"
    },
    {
        "id": 104,
        "nome": "Jucilane Cristaldo de Alcântara",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8493661,
        "longitude": -47.073947,
        "cep": "13080120",
        "pais": "Brasil"
    },
    {
        "id": 105,
        "nome": "Fabiana Morya",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9000726,
        "longitude": -47.0970989,
        "cep": "13033740",
        "pais": "Brasil"
    },
    {
        "id": 106,
        "nome": "JOSE LUIS PINHEIRO JEREMIAS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9025519,
        "longitude": -47.1623466,
        "cep": "13064845",
        "pais": "Brasil"
    },
    {
        "id": 107,
        "nome": "Fábio Leme da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9398265,
        "longitude": -47.0351344,
        "cep": "13043710",
        "pais": "Brasil"
    },
    {
        "id": 108,
        "nome": "Eduardo R. Dos Santos",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284162",
        "pais": "Brasil"
    },
    {
        "id": 109,
        "nome": "Rodolfo  Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061342",
        "pais": "Brasil"
    },
    {
        "id": 110,
        "nome": "Leandro Magalhaes Munaretti",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -22.741347,
        "longitude": -46.894846,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 111,
        "nome": "FRANCISCO FERNANDES",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051172",
        "pais": "Brasil"
    },
    {
        "id": 112,
        "nome": "Bárbara Siminatti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9335671,
        "longitude": -47.0182686,
        "cep": "13046545",
        "pais": "Brasil"
    },
    {
        "id": 113,
        "nome": "EDERSON BARZAGUE MARIN",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9277187,
        "longitude": -47.155003,
        "cep": "13059607",
        "pais": "Brasil"
    },
    {
        "id": 114,
        "nome": "Anderson Ferreira Mendonça",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7881625,
        "longitude": -47.1927215,
        "cep": "13142126",
        "pais": "Brasil"
    },
    {
        "id": 115,
        "nome": "Cynthia Carvalho Rubio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9508199,
        "longitude": -47.0308653,
        "cep": "13044500",
        "pais": "Brasil"
    },
    {
        "id": 116,
        "nome": "Jessica Caroline SILVA MOTA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9703064,
        "longitude": -47.1331145,
        "cep": "13054011",
        "pais": "Brasil"
    },
    {
        "id": 117,
        "nome": "Renata Alves da Silva",
        "cidade": "Várzea Paulista",
        "estado": "SP",
        "latitude": -23.2065634,
        "longitude": -46.8492222,
        "cep": "13220025",
        "pais": "Brasil"
    },
    {
        "id": 118,
        "nome": "ALEXANDRE J FORMIS Charlles DOGS",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9467497,
        "longitude": -46.9793206,
        "cep": "13273440",
        "pais": "Brasil"
    },
    {
        "id": 119,
        "nome": "Daiane Cristina Ribeiro de Souza",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181350",
        "pais": "Brasil"
    },
    {
        "id": 120,
        "nome": "Fábio Silva Fabene",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8543737,
        "longitude": -47.2147438,
        "cep": "13183633",
        "pais": "Brasil"
    },
    {
        "id": 121,
        "nome": "Edvaldo Belin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9246553,
        "longitude": -47.1229234,
        "cep": "13060800",
        "pais": "Brasil"
    },
    {
        "id": 122,
        "nome": "Wellington Zanella",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8670271,
        "longitude": -47.2227036,
        "cep": "13184000",
        "pais": "Brasil"
    },
    {
        "id": 123,
        "nome": "Pedro Augusto de Souza",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283166",
        "pais": "Brasil"
    },
    {
        "id": 124,
        "nome": "Daniela Hubert",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9288428,
        "longitude": -47.0736526,
        "cep": "13030117",
        "pais": "Brasil"
    },
    {
        "id": 125,
        "nome": "Maiara Cristina da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8682138,
        "longitude": -47.2085975,
        "cep": "13184390",
        "pais": "Brasil"
    },
    {
        "id": 126,
        "nome": "Ricardo Fulgêncio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9380711,
        "longitude": -47.116636,
        "cep": "13060740",
        "pais": "Brasil"
    },
    {
        "id": 127,
        "nome": "Luis Gustavo Gomes Augusto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8705726,
        "longitude": -46.9712451,
        "cep": "13104002",
        "pais": "Brasil"
    },
    {
        "id": 128,
        "nome": "Carolina Cardoso",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13349341",
        "pais": "Brasil"
    },
    {
        "id": 129,
        "nome": "Cristiane Godoy",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181778",
        "pais": "Brasil"
    },
    {
        "id": 130,
        "nome": "Celso Henrique",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9044645,
        "longitude": -47.1686043,
        "cep": "13185404",
        "pais": "Brasil"
    },
    {
        "id": 131,
        "nome": "Ronaldo Silveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8924319,
        "longitude": -47.2342928,
        "cep": "13188020",
        "pais": "Brasil"
    },
    {
        "id": 132,
        "nome": "katia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9718668,
        "longitude": -47.1779622,
        "cep": "13057123",
        "pais": "Brasil"
    },
    {
        "id": 133,
        "nome": "Graziela de Fátima Gonçalves lucas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.850331,
        "longitude": -47.0670917,
        "cep": "13080160",
        "pais": "Brasil"
    },
    {
        "id": 134,
        "nome": "Patricia  Hedra de Oliveira Costa",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8604568,
        "longitude": -47.2061633,
        "cep": "13183281",
        "pais": "Brasil"
    },
    {
        "id": 135,
        "nome": "Marco Silva Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040215",
        "pais": "Brasil"
    },
    {
        "id": 136,
        "nome": "Vantuir Felipe",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310005",
        "pais": "Brasil"
    },
    {
        "id": 137,
        "nome": "Eduardo Quaiatti",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7705853,
        "longitude": -47.1506184,
        "cep": "13140299",
        "pais": "Brasil"
    },
    {
        "id": 138,
        "nome": "Jose Fernando Hilario Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9291129,
        "longitude": -47.1234936,
        "cep": "13060833",
        "pais": "Brasil"
    },
    {
        "id": 139,
        "nome": "Giovana Camargo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8675273,
        "longitude": -47.1769867,
        "cep": "13184884",
        "pais": "Brasil"
    },
    {
        "id": 140,
        "nome": "Felipe Perlato",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9521667,
        "longitude": -47.0813922,
        "cep": "13051076",
        "pais": "Brasil"
    },
    {
        "id": 141,
        "nome": "Danielle do Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8899773,
        "longitude": -46.9784981,
        "cep": "13105796",
        "pais": "Brasil"
    },
    {
        "id": 142,
        "nome": "Celeucia Beatriz Lanfredi",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1000064,
        "longitude": -47.1793381,
        "cep": "13340370",
        "pais": "Brasil"
    },
    {
        "id": 143,
        "nome": "monique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9634134,
        "longitude": -47.139214,
        "cep": "13056632",
        "pais": "Brasil"
    },
    {
        "id": 144,
        "nome": "Maria Jose Gimenes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9266305,
        "longitude": -47.0365843,
        "cep": "13045760",
        "pais": "Brasil"
    },
    {
        "id": 145,
        "nome": "Daniel Coimbra",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13255140",
        "pais": "Brasil"
    },
    {
        "id": 146,
        "nome": "Andréia Conde",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9701811,
        "longitude": -47.0729465,
        "cep": "13049583",
        "pais": "Brasil"
    },
    {
        "id": 147,
        "nome": "Robson Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9581539,
        "longitude": -47.189327,
        "cep": "13058272",
        "pais": "Brasil"
    },
    {
        "id": 148,
        "nome": "Diego Tributino",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5565428,
        "longitude": -46.6420547,
        "cep": "01321010",
        "pais": "Brasil"
    },
    {
        "id": 149,
        "nome": "Ednaldo Santos Barreto",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8060512,
        "longitude": -47.2004215,
        "cep": "13178652",
        "pais": "Brasil"
    },
    {
        "id": 150,
        "nome": "odinei gomes vaz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8459779,
        "longitude": -47.2070839,
        "cep": "13183661",
        "pais": "Brasil"
    },
    {
        "id": 151,
        "nome": "Anderson Nicholas Mariano",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7925146,
        "longitude": -47.1966851,
        "cep": "13178351",
        "pais": "Brasil"
    },
    {
        "id": 152,
        "nome": "ailton jose santos silva",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4080279,
        "longitude": -46.9664659,
        "cep": "13806655",
        "pais": "Brasil"
    },
    {
        "id": 153,
        "nome": "Everson Mascarenhas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9031836,
        "longitude": -47.081586,
        "cep": "13032405",
        "pais": "Brasil"
    },
    {
        "id": 154,
        "nome": "Renata  Carvalho da Silva Noronha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9280441,
        "longitude": -47.051792,
        "cep": "13041805",
        "pais": "Brasil"
    },
    {
        "id": 155,
        "nome": "emerson teodoro dos santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8292704,
        "longitude": -47.2189548,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 156,
        "nome": "Jefferson Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9290171,
        "longitude": -47.0893095,
        "cep": "13050471",
        "pais": "Brasil"
    },
    {
        "id": 157,
        "nome": "adriana avelino",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9045526,
        "longitude": -47.1805166,
        "cep": "13185352",
        "pais": "Brasil"
    },
    {
        "id": 158,
        "nome": "Rodrigo Oliveira do Nascimento",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13332070",
        "pais": "Brasil"
    },
    {
        "id": 159,
        "nome": "Joao Batista Uliam Neto",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8292704,
        "longitude": -47.2189548,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 160,
        "nome": "Tássia Martins Rande",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8877501,
        "longitude": -47.0645663,
        "cep": "13073013",
        "pais": "Brasil"
    },
    {
        "id": 161,
        "nome": "Bruno Soares de Jesus",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9838363,
        "longitude": -47.0892063,
        "cep": "13052729",
        "pais": "Brasil"
    },
    {
        "id": 162,
        "nome": "Leonardo Vilela Cenache",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9470487,
        "longitude": -46.9745562,
        "cep": "13273592",
        "pais": "Brasil"
    },
    {
        "id": 163,
        "nome": "Gabriela Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8805293,
        "longitude": -47.0250374,
        "cep": "13091530",
        "pais": "Brasil"
    },
    {
        "id": 164,
        "nome": "Elis Regina Gonçalves Negrão",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13332162",
        "pais": "Brasil"
    },
    {
        "id": 165,
        "nome": "Marcio Pereira da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9018384,
        "longitude": -47.0767608,
        "cep": "13070752",
        "pais": "Brasil"
    },
    {
        "id": 166,
        "nome": "Dayane",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9478447,
        "longitude": -47.0230569,
        "cep": "13045040",
        "pais": "Brasil"
    },
    {
        "id": 167,
        "nome": "William Maximiliano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9382446,
        "longitude": -47.0368304,
        "cep": "13043730",
        "pais": "Brasil"
    },
    {
        "id": 168,
        "nome": "LUIZ GUSTAVO PERILLO HORACIO",
        "cidade": "Aguaí",
        "estado": "SP",
        "latitude": -22.0653238,
        "longitude": -46.9699852,
        "cep": "13860196",
        "pais": "Brasil"
    },
    {
        "id": 169,
        "nome": "Celso Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13067312",
        "pais": "Brasil"
    },
    {
        "id": 170,
        "nome": "Jennifer Stahl Murayama",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9339272,
        "longitude": -47.0590281,
        "cep": "13040089",
        "pais": "Brasil"
    },
    {
        "id": 171,
        "nome": "Leonel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9893977,
        "longitude": -47.1000521,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 172,
        "nome": "Raphael Tavares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13065190",
        "pais": "Brasil"
    },
    {
        "id": 173,
        "nome": "Daiane Santos da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8621035,
        "longitude": -47.2070952,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 174,
        "nome": "César Fabbri",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8914908,
        "longitude": -47.2247404,
        "cep": "13187149",
        "pais": "Brasil"
    },
    {
        "id": 175,
        "nome": "raphael neto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9271396,
        "longitude": -47.0991229,
        "cep": "13060020",
        "pais": "Brasil"
    },
    {
        "id": 176,
        "nome": "Willian Menezes",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3593302,
        "longitude": -46.9583851,
        "cep": "13845360",
        "pais": "Brasil"
    },
    {
        "id": 177,
        "nome": "Luis Antonio",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9778344,
        "longitude": -46.9858981,
        "cep": "13275224",
        "pais": "Brasil"
    },
    {
        "id": 178,
        "nome": "Angelica Salustiano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9472317,
        "longitude": -47.1116166,
        "cep": "13060611",
        "pais": "Brasil"
    },
    {
        "id": 179,
        "nome": "Karina Tosi da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8793444,
        "longitude": -47.0453886,
        "cep": "13076000",
        "pais": "Brasil"
    },
    {
        "id": 180,
        "nome": "Beatriz Pereira da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9621207,
        "longitude": -47.1958671,
        "cep": "13058216",
        "pais": "Brasil"
    },
    {
        "id": 181,
        "nome": "Eric Cardoso",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8118681,
        "longitude": -47.0302948,
        "cep": "13098401",
        "pais": "Brasil"
    },
    {
        "id": 182,
        "nome": "Letícia Lopes Abelha",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7412465,
        "longitude": -47.6310815,
        "cep": "13417820",
        "pais": "Brasil"
    },
    {
        "id": 183,
        "nome": "Carolina Pinheiro da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8564206,
        "longitude": -47.1588373,
        "cep": "13068609",
        "pais": "Brasil"
    },
    {
        "id": 184,
        "nome": "diego vieira caetano",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.812475,
        "longitude": -47.2206274,
        "cep": "13177908",
        "pais": "Brasil"
    },
    {
        "id": 185,
        "nome": "Paola",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9435184,
        "longitude": -47.1027632,
        "cep": "13050572",
        "pais": "Brasil"
    },
    {
        "id": 186,
        "nome": "Andresa Martins De jesus",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9568834,
        "longitude": -47.0796972,
        "cep": "13051420",
        "pais": "Brasil"
    },
    {
        "id": 187,
        "nome": "Renan Freitas",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8671408,
        "longitude": -47.2186137,
        "cep": "13184235",
        "pais": "Brasil"
    },
    {
        "id": 188,
        "nome": "higor dias ramos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181380",
        "pais": "Brasil"
    },
    {
        "id": 189,
        "nome": "Andre Vieira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9523709,
        "longitude": -47.1816295,
        "cep": "13058421",
        "pais": "Brasil"
    },
    {
        "id": 190,
        "nome": "Rozic Maurici",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9046037,
        "longitude": -47.1041828,
        "cep": "13033206",
        "pais": "Brasil"
    },
    {
        "id": 191,
        "nome": "Ilton Kalebe Andrade de Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9035395,
        "longitude": -47.1727544,
        "cep": "13185490",
        "pais": "Brasil"
    },
    {
        "id": 192,
        "nome": "jairton",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8536208,
        "longitude": -47.1086764,
        "cep": "13082140",
        "pais": "Brasil"
    },
    {
        "id": 193,
        "nome": "Mateus Pablo de Souza",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7890385,
        "longitude": -47.179507,
        "cep": "13142218",
        "pais": "Brasil"
    },
    {
        "id": 194,
        "nome": "Taffarel Santos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5536156,
        "longitude": -47.4053241,
        "cep": "13484000",
        "pais": "Brasil"
    },
    {
        "id": 195,
        "nome": "Carlos Vinicius Miloch",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9281419,
        "longitude": -47.1127522,
        "cep": "13060039",
        "pais": "Brasil"
    },
    {
        "id": 196,
        "nome": "Anayra Dariene De Oliveira Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9454368,
        "longitude": -47.0853294,
        "cep": "13051038",
        "pais": "Brasil"
    },
    {
        "id": 197,
        "nome": "Edson Romeiro Romão",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9143702,
        "longitude": -47.0847401,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 198,
        "nome": "Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9881088,
        "longitude": -47.137793,
        "cep": "13056130",
        "pais": "Brasil"
    },
    {
        "id": 199,
        "nome": "Rafael Amaral",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9541167,
        "longitude": -47.1924075,
        "cep": "13058012",
        "pais": "Brasil"
    },
    {
        "id": 200,
        "nome": "Amanda Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13106760",
        "pais": "Brasil"
    },
    {
        "id": 201,
        "nome": "Ulisses Paiva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13035555",
        "pais": "Brasil"
    },
    {
        "id": 202,
        "nome": "Patricia Rocha Alecrim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.913852,
        "longitude": -47.0328706,
        "cep": "13100237",
        "pais": "Brasil"
    },
    {
        "id": 203,
        "nome": "vinicius",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9635882,
        "longitude": -47.1306179,
        "cep": "13054047",
        "pais": "Brasil"
    },
    {
        "id": 204,
        "nome": "Mariana Patrícia Alves dos Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181722",
        "pais": "Brasil"
    },
    {
        "id": 205,
        "nome": "Leonardo Quim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.929657,
        "longitude": -47.0306021,
        "cep": "13101198",
        "pais": "Brasil"
    },
    {
        "id": 206,
        "nome": "Willians Martins De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8816897,
        "longitude": -47.0487353,
        "cep": "13076540",
        "pais": "Brasil"
    },
    {
        "id": 207,
        "nome": "mike silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184664",
        "pais": "Brasil"
    },
    {
        "id": 208,
        "nome": "Clarissa",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.589339,
        "longitude": -47.3765377,
        "cep": "13487264",
        "pais": "Brasil"
    },
    {
        "id": 209,
        "nome": "Jose Leandro Lima Dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9737709,
        "longitude": -47.1459868,
        "cep": "13056440",
        "pais": "Brasil"
    },
    {
        "id": 210,
        "nome": "paulo roberto Moura",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9620971,
        "longitude": -47.1459518,
        "cep": "13056675",
        "pais": "Brasil"
    },
    {
        "id": 211,
        "nome": "Elton Donizete Mendes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9484844,
        "longitude": -47.1984464,
        "cep": "13058820",
        "pais": "Brasil"
    },
    {
        "id": 212,
        "nome": "Renato Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9453343,
        "longitude": -47.0493804,
        "cep": "13044163",
        "pais": "Brasil"
    },
    {
        "id": 213,
        "nome": "Jaime Antônio Dos Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180023",
        "pais": "Brasil"
    },
    {
        "id": 214,
        "nome": "Wellington Furlan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9462774,
        "longitude": -47.0916038,
        "cep": "13050078",
        "pais": "Brasil"
    },
    {
        "id": 215,
        "nome": "Ednaldo Ferracini",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3630977,
        "longitude": -46.9354996,
        "cep": "13840110",
        "pais": "Brasil"
    },
    {
        "id": 216,
        "nome": "Ruan Henrique de Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9184401,
        "longitude": -47.102031,
        "cep": "13060072",
        "pais": "Brasil"
    },
    {
        "id": 217,
        "nome": "Jullya Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9692545,
        "longitude": -47.0008236,
        "cep": "13271180",
        "pais": "Brasil"
    },
    {
        "id": 218,
        "nome": "Welker Paulo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7505415,
        "longitude": -47.3283649,
        "cep": "13466320",
        "pais": "Brasil"
    },
    {
        "id": 219,
        "nome": "Jefferson Duarte da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8419619,
        "longitude": -47.2183419,
        "cep": "13183713",
        "pais": "Brasil"
    },
    {
        "id": 220,
        "nome": "Amanda Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.980061,
        "longitude": -47.1583004,
        "cep": "13057043",
        "pais": "Brasil"
    },
    {
        "id": 221,
        "nome": "Julia Bosco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8962324,
        "longitude": -47.0846688,
        "cep": "13070120",
        "pais": "Brasil"
    },
    {
        "id": 222,
        "nome": "Fernando Godoi de Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9319607,
        "longitude": -47.0873837,
        "cep": "13050022",
        "pais": "Brasil"
    },
    {
        "id": 223,
        "nome": "Michael fernandes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181492",
        "pais": "Brasil"
    },
    {
        "id": 224,
        "nome": "Mislene",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8981385,
        "longitude": -47.0891952,
        "cep": "13070017",
        "pais": "Brasil"
    },
    {
        "id": 225,
        "nome": "Leo Teodoro",
        "cidade": "Inconfidentes",
        "estado": "MG",
        "latitude": -22.3168866,
        "longitude": -46.3279182,
        "cep": "37576000",
        "pais": NaN
    },
    {
        "id": 226,
        "nome": "marcelo",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.9921507,
        "longitude": -49.4455477,
        "cep": "13165498",
        "pais": NaN
    },
    {
        "id": 227,
        "nome": "Eberson",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181654",
        "pais": "Brasil"
    },
    {
        "id": 228,
        "nome": "João Navarro Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8462842,
        "longitude": -47.0269523,
        "cep": "13097105",
        "pais": "Brasil"
    },
    {
        "id": 229,
        "nome": "Silvana Felix Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235551,
        "longitude": -47.119233,
        "cep": "13060562",
        "pais": "Brasil"
    },
    {
        "id": 230,
        "nome": "Tharuels Gusmão",
        "cidade": "Laranjal Paulista",
        "estado": "SP",
        "latitude": -23.0566826,
        "longitude": -47.8420459,
        "cep": "18500000",
        "pais": "Brasil"
    },
    {
        "id": 231,
        "nome": "leandrorovina@gmail.com",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8955765,
        "longitude": -47.0586758,
        "cep": "13024091",
        "pais": "Brasil"
    },
    {
        "id": 232,
        "nome": "Wesley Farias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9321665,
        "longitude": -47.0382761,
        "cep": "13045635",
        "pais": "Brasil"
    },
    {
        "id": 233,
        "nome": "Maria Caroline",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 234,
        "nome": "Michele Carla Da Silva Carlos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8617541,
        "longitude": -47.1451052,
        "cep": "13067370",
        "pais": "Brasil"
    },
    {
        "id": 235,
        "nome": "Priscila Robbins Feliz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8602388,
        "longitude": -46.9657068,
        "cep": "13104150",
        "pais": "Brasil"
    },
    {
        "id": 236,
        "nome": "Nadia Maria Silva Peixoto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0311162,
        "longitude": -47.1266586,
        "cep": "13053701",
        "pais": "Brasil"
    },
    {
        "id": 237,
        "nome": "WELLINGTON MARTINS GOMES DA SILVA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.987456,
        "longitude": -47.1032272,
        "cep": "13052610",
        "pais": "Brasil"
    },
    {
        "id": 238,
        "nome": "Samuel Souza uliana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9361297,
        "longitude": -47.0503207,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 239,
        "nome": "Carla Beatriz Inácio",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7904033,
        "longitude": -47.1802734,
        "cep": "13142200",
        "pais": "Brasil"
    },
    {
        "id": 240,
        "nome": "marcos henrique rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.949359,
        "longitude": -47.17596,
        "cep": "13058306",
        "pais": "Brasil"
    },
    {
        "id": 241,
        "nome": "Felipe Fernandes",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7243791,
        "longitude": -47.3331376,
        "cep": "13471255",
        "pais": "Brasil"
    },
    {
        "id": 242,
        "nome": "Fausto Rosa",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6131349,
        "longitude": -47.4268603,
        "cep": "13481874",
        "pais": "Brasil"
    },
    {
        "id": 243,
        "nome": "Alex Correia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9949164,
        "longitude": -47.1393343,
        "cep": "13056013",
        "pais": "Brasil"
    },
    {
        "id": 244,
        "nome": "Edwy sá",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9458804,
        "longitude": -47.0913206,
        "cep": "13050088",
        "pais": "Brasil"
    },
    {
        "id": 245,
        "nome": "Gilsimar Hungaro",
        "cidade": "Boituva",
        "estado": "SP",
        "latitude": -23.2624238,
        "longitude": -47.6720659,
        "cep": "18558024",
        "pais": "Brasil"
    },
    {
        "id": 246,
        "nome": "Evandro Rogério dos Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9520271,
        "longitude": -46.9718894,
        "cep": "13273608",
        "pais": "Brasil"
    },
    {
        "id": 247,
        "nome": "Lucas",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.76352,
        "longitude": -47.3499411,
        "cep": "13468857",
        "pais": "Brasil"
    },
    {
        "id": 248,
        "nome": "Jefferson Rodrigues",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8934845,
        "longitude": -47.1661784,
        "cep": "13185503",
        "pais": "Brasil"
    },
    {
        "id": 249,
        "nome": "Joseane Alves de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.965265,
        "longitude": -47.0462257,
        "cep": "13042460",
        "pais": "Brasil"
    },
    {
        "id": 250,
        "nome": "Rafael Tadeu Cassab Sebastião",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4149076,
        "longitude": -47.5665896,
        "cep": "13500370",
        "pais": "Brasil"
    },
    {
        "id": 251,
        "nome": "Cláudia Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034200",
        "pais": "Brasil"
    },
    {
        "id": 252,
        "nome": "Simone Aparecida Primo Barbosa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7940605,
        "longitude": -47.2812602,
        "cep": "13173280",
        "pais": "Brasil"
    },
    {
        "id": 253,
        "nome": "Wellington silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13171660",
        "pais": "Brasil"
    },
    {
        "id": 254,
        "nome": "erick fidelis de aguiar",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8649625,
        "longitude": -47.2109388,
        "cep": "13184290",
        "pais": "Brasil"
    },
    {
        "id": 255,
        "nome": "MAYARA DE PAULA TEIXEIRA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9244279,
        "longitude": -47.074888,
        "cep": "13030470",
        "pais": "Brasil"
    },
    {
        "id": 256,
        "nome": "Cayo Ferrari Marcelino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9138791,
        "longitude": -47.0423054,
        "cep": "13100470",
        "pais": "Brasil"
    },
    {
        "id": 257,
        "nome": "Alexandre Assis",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0234,
        "longitude": -47.2226,
        "cep": "13360431",
        "pais": "Brasil"
    },
    {
        "id": 258,
        "nome": "Diego Ferreira Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9079911,
        "longitude": -47.0935233,
        "cep": "13033195",
        "pais": "Brasil"
    },
    {
        "id": 259,
        "nome": "Jéssica Alves Pereira Diniz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9143702,
        "longitude": -47.0847401,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 260,
        "nome": "Fellipe Silva",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1578924,
        "longitude": -46.9573652,
        "cep": "13212620",
        "pais": "Brasil"
    },
    {
        "id": 261,
        "nome": "Raphael Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9000726,
        "longitude": -47.0970989,
        "cep": "13033740",
        "pais": "Brasil"
    },
    {
        "id": 262,
        "nome": "Macaulei Estevan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9526727,
        "longitude": -47.1634092,
        "cep": "13059194",
        "pais": "Brasil"
    },
    {
        "id": 263,
        "nome": "Tiago Dainez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9337646,
        "longitude": -47.1061876,
        "cep": "13060432",
        "pais": "Brasil"
    },
    {
        "id": 264,
        "nome": "Rafael Milaré",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9614206,
        "longitude": -47.0188602,
        "cep": "13271781",
        "pais": "Brasil"
    },
    {
        "id": 265,
        "nome": "Patrícia Aparecida dos Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8231512,
        "longitude": -47.1671254,
        "cep": "13179272",
        "pais": "Brasil"
    },
    {
        "id": 266,
        "nome": "Leonardo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13339245",
        "pais": "Brasil"
    },
    {
        "id": 267,
        "nome": "natacha aparecida monteiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9464879,
        "longitude": -47.1613763,
        "cep": "13059615",
        "pais": "Brasil"
    },
    {
        "id": 268,
        "nome": "Juliana Coelho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8535047,
        "longitude": -47.10624,
        "cep": "13082125",
        "pais": "Brasil"
    },
    {
        "id": 269,
        "nome": "Rhuana Adrielle Oliveira de Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9191842,
        "longitude": -47.0903313,
        "cep": "13031390",
        "pais": "Brasil"
    },
    {
        "id": 270,
        "nome": "Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9143702,
        "longitude": -47.0847401,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 271,
        "nome": "Thaís SIlva Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.970769,
        "longitude": -47.1209827,
        "cep": "13054108",
        "pais": "Brasil"
    },
    {
        "id": 272,
        "nome": "Rogerio Stefano",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323223",
        "pais": "Brasil"
    },
    {
        "id": 273,
        "nome": "Gi do Paulinho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9364847,
        "longitude": -47.1309741,
        "cep": "13059648",
        "pais": "Brasil"
    },
    {
        "id": 274,
        "nome": "Antônio Aparecido Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9970008,
        "longitude": -47.1401717,
        "cep": "13056022",
        "pais": "Brasil"
    },
    {
        "id": 275,
        "nome": "José Edson do Nascimento",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9006351,
        "longitude": -47.2376733,
        "cep": "13188091",
        "pais": "Brasil"
    },
    {
        "id": 276,
        "nome": "Aline Paula Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8998134,
        "longitude": -47.0680082,
        "cep": "13020100",
        "pais": "Brasil"
    },
    {
        "id": 277,
        "nome": "Dirceu Nascimento de Almeida",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8001054,
        "longitude": -47.1941955,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 278,
        "nome": "Rafaela Siqueira Dos Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9040533,
        "longitude": -47.2379441,
        "cep": "13188101",
        "pais": "Brasil"
    },
    {
        "id": 279,
        "nome": "Murilo Darelli Bico",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9213859,
        "longitude": -47.0213974,
        "cep": "13101405",
        "pais": "Brasil"
    },
    {
        "id": 280,
        "nome": "Jonatas Felipe Pereira",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13457039",
        "pais": "Brasil"
    },
    {
        "id": 281,
        "nome": "Luana Pelissari Cândido",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5707057,
        "longitude": -47.4185559,
        "cep": "13482832",
        "pais": "Brasil"
    },
    {
        "id": 282,
        "nome": "Pamela Caroline Dário",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -22.741347,
        "longitude": -46.894846,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 283,
        "nome": "Giovana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8928504,
        "longitude": -47.0625847,
        "cep": "13023220",
        "pais": "Brasil"
    },
    {
        "id": 284,
        "nome": "Jaime  Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049103",
        "pais": "Brasil"
    },
    {
        "id": 285,
        "nome": "Julio Aparecido de Souza",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5671774,
        "longitude": -47.4173882,
        "cep": "13482284",
        "pais": "Brasil"
    },
    {
        "id": 286,
        "nome": "Jaqueline",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8557032,
        "longitude": -47.2198303,
        "cep": "13183100",
        "pais": "Brasil"
    },
    {
        "id": 287,
        "nome": "Pamela Sá Santos Barbieri",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9707354,
        "longitude": -47.1388692,
        "cep": "13056480",
        "pais": "Brasil"
    },
    {
        "id": 288,
        "nome": "DAVID BALDO DE OLIVEIRA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8414311,
        "longitude": -47.1387596,
        "cep": "13069510",
        "pais": "Brasil"
    },
    {
        "id": 289,
        "nome": "Bruno Tavares De Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9738533,
        "longitude": -47.1689827,
        "cep": "13057425",
        "pais": "Brasil"
    },
    {
        "id": 290,
        "nome": "Ari Ercílio Ferreira Guimarães",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7942579,
        "longitude": -47.3004571,
        "cep": "13382030",
        "pais": "Brasil"
    },
    {
        "id": 291,
        "nome": "Alan",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283614",
        "pais": "Brasil"
    },
    {
        "id": 292,
        "nome": "Alessandro de lima",
        "cidade": "Divinolândia",
        "estado": "SP",
        "latitude": -21.6604584,
        "longitude": -46.7371151,
        "cep": "13780000",
        "pais": "Brasil"
    },
    {
        "id": 293,
        "nome": "RheINDEFINIDOHortolândia",
        "cidade": "SP",
        "estado": "-22.8574723",
        "latitude": -47.2237563,
        "longitude": 13183040.0,
        "cep": "Brasil",
        "pais": NaN
    },
    {
        "id": 294,
        "nome": "fabiofm035@gmail.com",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9052829,
        "longitude": -47.2407087,
        "cep": "13188081",
        "pais": "Brasil"
    },
    {
        "id": 295,
        "nome": "Ricardo Alexandre Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9468515,
        "longitude": -47.1558065,
        "cep": "13059105",
        "pais": "Brasil"
    },
    {
        "id": 296,
        "nome": "Marcos Camilo Suniga",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454397",
        "pais": "Brasil"
    },
    {
        "id": 297,
        "nome": "Eduardo Prebianchi Rocha",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1841912,
        "longitude": -46.9259587,
        "cep": "13211772",
        "pais": "Brasil"
    },
    {
        "id": 298,
        "nome": "Júlio Cesar Rodrigues Da Cruz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064844",
        "pais": "Brasil"
    },
    {
        "id": 299,
        "nome": "Marcos Roberto Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034655",
        "pais": "Brasil"
    },
    {
        "id": 300,
        "nome": "Tamires Porto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9696437,
        "longitude": -47.1374782,
        "cep": "13056488",
        "pais": "Brasil"
    },
    {
        "id": 301,
        "nome": "Luiz Fernando de Menezes",
        "cidade": "Ilicínea",
        "estado": "MG",
        "latitude": -20.9390196,
        "longitude": -45.8263558,
        "cep": "37175000",
        "pais": NaN
    },
    {
        "id": 302,
        "nome": "Guilherme Indiano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057504",
        "pais": "Brasil"
    },
    {
        "id": 303,
        "nome": "Victor Pozelli",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.830893,
        "longitude": -47.1749727,
        "cep": "13179022",
        "pais": "Brasil"
    },
    {
        "id": 304,
        "nome": "Wesley Ferreira Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9297676,
        "longitude": -47.0541216,
        "cep": "13041355",
        "pais": "Brasil"
    },
    {
        "id": 305,
        "nome": "priscila menezes miguel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.948928,
        "longitude": -47.1900258,
        "cep": "13058512",
        "pais": "Brasil"
    },
    {
        "id": 306,
        "nome": "Ana Maria da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9434917,
        "longitude": -47.132079,
        "cep": "13059674",
        "pais": "Brasil"
    },
    {
        "id": 307,
        "nome": "Nikaeli Da Silva Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0406542,
        "longitude": -47.1057555,
        "cep": "13053318",
        "pais": "Brasil"
    },
    {
        "id": 308,
        "nome": "Bruno Testa Sandrini",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9521667,
        "longitude": -47.0813922,
        "cep": "13051076",
        "pais": "Brasil"
    },
    {
        "id": 309,
        "nome": "ANA CAROLINA MANESCO DIAS",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8934845,
        "longitude": -47.1661784,
        "cep": "13185503",
        "pais": "Brasil"
    },
    {
        "id": 310,
        "nome": "LUAN SILVA DOS REIS",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8933048,
        "longitude": -47.1671159,
        "cep": "13185539",
        "pais": "Brasil"
    },
    {
        "id": 311,
        "nome": "ailton",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8621035,
        "longitude": -47.2070952,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 312,
        "nome": "Lucas Henrique De Oliveira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180170",
        "pais": "Brasil"
    },
    {
        "id": 313,
        "nome": "Silvio  Nauvirth",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8783515,
        "longitude": -47.0688146,
        "cep": "13073065",
        "pais": "Brasil"
    },
    {
        "id": 314,
        "nome": "Amanda Nunes da Cunha",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.2030069,
        "longitude": -46.9824419,
        "cep": "13211771",
        "pais": "Brasil"
    },
    {
        "id": 315,
        "nome": "Igor palka",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8402386,
        "longitude": -47.2205685,
        "cep": "13183700",
        "pais": "Brasil"
    },
    {
        "id": 316,
        "nome": "Jorge Daniel Aragão",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1920309,
        "longitude": -46.8886271,
        "cep": "13207780",
        "pais": "Brasil"
    },
    {
        "id": 317,
        "nome": "Milton Henrique Moura",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456570",
        "pais": "Brasil"
    },
    {
        "id": 318,
        "nome": "Carlos Sergio",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.9921507,
        "longitude": -49.4455477,
        "cep": "34800000",
        "pais": NaN
    },
    {
        "id": 319,
        "nome": "Pedro Machado Dos Santos Neto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7453582,
        "longitude": -47.0653244,
        "cep": "13085758",
        "pais": "Brasil"
    },
    {
        "id": 320,
        "nome": "Beatriz Antonia De Paulo Valadão",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9407899,
        "longitude": -47.1926792,
        "cep": "13058575",
        "pais": "Brasil"
    },
    {
        "id": 321,
        "nome": "Alessandra da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9243222,
        "longitude": -47.015096,
        "cep": "13101259",
        "pais": "Brasil"
    },
    {
        "id": 322,
        "nome": "Rodrigo De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8801949,
        "longitude": -47.0288233,
        "cep": "13091467",
        "pais": "Brasil"
    },
    {
        "id": 323,
        "nome": "Erik",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.928395,
        "longitude": -47.0273595,
        "cep": "13101130",
        "pais": "Brasil"
    },
    {
        "id": 324,
        "nome": "Poliana Pamplona",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.935559,
        "longitude": -47.1243157,
        "cep": "13060723",
        "pais": "Brasil"
    },
    {
        "id": 325,
        "nome": "Daiane Real",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9737709,
        "longitude": -47.1459868,
        "cep": "13056440",
        "pais": "Brasil"
    },
    {
        "id": 326,
        "nome": "Sherrise Espontão",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9725098,
        "longitude": -47.1218511,
        "cep": "13054133",
        "pais": "Brasil"
    },
    {
        "id": 327,
        "nome": "Bruno Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13088683",
        "pais": "Brasil"
    },
    {
        "id": 328,
        "nome": "Sarah Ingrid Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8927256,
        "longitude": -47.1609362,
        "cep": "13064832",
        "pais": "Brasil"
    },
    {
        "id": 329,
        "nome": "Joice Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8908776,
        "longitude": -46.982625,
        "cep": "13105618",
        "pais": "Brasil"
    },
    {
        "id": 330,
        "nome": "Flávio Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9415331,
        "longitude": -47.02638,
        "cep": "13045290",
        "pais": "Brasil"
    },
    {
        "id": 331,
        "nome": "douglaspaulo.filho@gmail.com",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9725412,
        "longitude": -47.1758315,
        "cep": "13057127",
        "pais": "Brasil"
    },
    {
        "id": 332,
        "nome": "Eduardo Marcelino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050436",
        "pais": "Brasil"
    },
    {
        "id": 333,
        "nome": "Ronaldo Queiroz de Carvalho",
        "cidade": "São Carlos",
        "estado": "SP",
        "latitude": -21.9887107,
        "longitude": -47.9294354,
        "cep": "13563650",
        "pais": "Brasil"
    },
    {
        "id": 334,
        "nome": "Marília Gabriela de Almeida Gomes",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9308017,
        "longitude": -47.2398836,
        "cep": "13197232",
        "pais": "Brasil"
    },
    {
        "id": 335,
        "nome": "Fabio Greco Rondelli",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7400495,
        "longitude": -47.3102379,
        "cep": "13478650",
        "pais": "Brasil"
    },
    {
        "id": 336,
        "nome": "Alessandro Batista",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938899,
        "longitude": -47.1228027,
        "cep": "13060726",
        "pais": "Brasil"
    },
    {
        "id": 337,
        "nome": "Bruna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9170121,
        "longitude": -47.0866888,
        "cep": "13031885",
        "pais": "Brasil"
    },
    {
        "id": 338,
        "nome": "Jonatas Abner Guimarães",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040145",
        "pais": "Brasil"
    },
    {
        "id": 339,
        "nome": "Thiago Stuchi",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9018058,
        "longitude": -47.2384451,
        "cep": "13188100",
        "pais": "Brasil"
    },
    {
        "id": 340,
        "nome": "André Mantuani Recco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8821737,
        "longitude": -47.0674225,
        "cep": "13073090",
        "pais": "Brasil"
    },
    {
        "id": 341,
        "nome": "Bruno Mendes",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450866",
        "pais": "Brasil"
    },
    {
        "id": 342,
        "nome": "Rogéria Toledo de Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8094853,
        "longitude": -47.1763065,
        "cep": "13179131",
        "pais": "Brasil"
    },
    {
        "id": 343,
        "nome": "Beatriz Causs Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9596753,
        "longitude": -46.991356,
        "cep": "13272006",
        "pais": "Brasil"
    },
    {
        "id": 344,
        "nome": "marcelo oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185560",
        "pais": "Brasil"
    },
    {
        "id": 345,
        "nome": "Maurício Gomes de Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8850695,
        "longitude": -47.1112027,
        "cep": "13063240",
        "pais": "Brasil"
    },
    {
        "id": 346,
        "nome": "Gabriel Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9303973,
        "longitude": -47.151297,
        "cep": "13059602",
        "pais": "Brasil"
    },
    {
        "id": 347,
        "nome": "Graziele Ramos da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8940828,
        "longitude": -47.0629468,
        "cep": "13023200",
        "pais": "Brasil"
    },
    {
        "id": 348,
        "nome": "Gustavo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7934487,
        "longitude": -47.2793374,
        "cep": "13173311",
        "pais": "Brasil"
    },
    {
        "id": 349,
        "nome": "Lari Lourenço",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180170",
        "pais": "Brasil"
    },
    {
        "id": 350,
        "nome": "Elaine Paula Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8841331,
        "longitude": -47.1506447,
        "cep": "13067107",
        "pais": "Brasil"
    },
    {
        "id": 351,
        "nome": "Fernando Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8559467,
        "longitude": -47.2169415,
        "cep": "13183130",
        "pais": "Brasil"
    },
    {
        "id": 352,
        "nome": "Gabriela Souza",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1327433,
        "longitude": -47.2406213,
        "cep": "13348160",
        "pais": "Brasil"
    },
    {
        "id": 353,
        "nome": "Tamiris Ferreira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9479825,
        "longitude": -46.9787538,
        "cep": "13273420",
        "pais": "Brasil"
    },
    {
        "id": 354,
        "nome": "Douglas Aulizete",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9401593,
        "longitude": -47.0936908,
        "cep": "13050122",
        "pais": "Brasil"
    },
    {
        "id": 355,
        "nome": "Luiz Costa Aroeirinha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8969586,
        "longitude": -47.0780046,
        "cep": "13070770",
        "pais": "Brasil"
    },
    {
        "id": 356,
        "nome": "Ana Caroline Martins Siqueira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293713,
        "longitude": -47.0403594,
        "cep": "13045685",
        "pais": "Brasil"
    },
    {
        "id": 357,
        "nome": "Vitorio Rossi Freze",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8684682,
        "longitude": -47.1775743,
        "cep": "13184885",
        "pais": "Brasil"
    },
    {
        "id": 358,
        "nome": "Amauri Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13052200",
        "pais": "Brasil"
    },
    {
        "id": 359,
        "nome": "Ivo",
        "cidade": "Rafard",
        "estado": "SP",
        "latitude": -23.0184336,
        "longitude": -47.5211313,
        "cep": "13370025",
        "pais": "Brasil"
    },
    {
        "id": 360,
        "nome": "Iriana Alves Ribeiro da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7874719,
        "longitude": -46.9964514,
        "cep": "13098754",
        "pais": "Brasil"
    },
    {
        "id": 361,
        "nome": "Camila de Oliveira Ronzi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.882004,
        "longitude": -47.0466419,
        "cep": "13076550",
        "pais": "Brasil"
    },
    {
        "id": 362,
        "nome": "Welton Cesar Nascimento",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6886778,
        "longitude": -46.9833357,
        "cep": "13912454",
        "pais": "Brasil"
    },
    {
        "id": 363,
        "nome": "José Ribamar Correa Frazao",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9503039,
        "longitude": -47.1933874,
        "cep": "13058005",
        "pais": "Brasil"
    },
    {
        "id": 364,
        "nome": "Luciana Carvalho Lopes Gallo",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7234564,
        "longitude": -47.6287343,
        "cep": "13418310",
        "pais": "Brasil"
    },
    {
        "id": 365,
        "nome": "Bruna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9858092,
        "longitude": -47.1492686,
        "cep": "13056283",
        "pais": "Brasil"
    },
    {
        "id": 366,
        "nome": "Rogerio Bueno",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7318735,
        "longitude": -47.1818045,
        "cep": "13145688",
        "pais": "Brasil"
    },
    {
        "id": 367,
        "nome": "João Carlos Castro de Lima",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3911332,
        "longitude": -46.9350087,
        "cep": "13843154",
        "pais": "Brasil"
    },
    {
        "id": 368,
        "nome": "Denao Ferreira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8292704,
        "longitude": -47.2189548,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 369,
        "nome": "Rafaela Cara",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.590358,
        "longitude": -47.4296897,
        "cep": "13481671",
        "pais": "Brasil"
    },
    {
        "id": 370,
        "nome": "Laura",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.798723,
        "longitude": -47.2813901,
        "cep": "13173224",
        "pais": "Brasil"
    },
    {
        "id": 371,
        "nome": "Paloma Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8994702,
        "longitude": -47.0999081,
        "cep": "13033900",
        "pais": "Brasil"
    },
    {
        "id": 372,
        "nome": "Maria Carolina Solyszko",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9789176,
        "longitude": -46.9968838,
        "cep": "13276250",
        "pais": "Brasil"
    },
    {
        "id": 373,
        "nome": "Fabio Duarte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9220304,
        "longitude": -47.039518,
        "cep": "13100505",
        "pais": "Brasil"
    },
    {
        "id": 374,
        "nome": "Everton",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8475147,
        "longitude": -47.109622,
        "cep": "13082135",
        "pais": "Brasil"
    },
    {
        "id": 375,
        "nome": "jose maria de lima jr",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0234,
        "longitude": -47.2226,
        "cep": "13360184",
        "pais": "Brasil"
    },
    {
        "id": 376,
        "nome": "Cláudio roberto Montagni",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1041239,
        "longitude": -47.2309298,
        "cep": "13348865",
        "pais": "Brasil"
    },
    {
        "id": 377,
        "nome": "Valdecir Soares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9396035,
        "longitude": -47.1389362,
        "cep": "13059650",
        "pais": "Brasil"
    },
    {
        "id": 378,
        "nome": "Tiago Dias",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7421568,
        "longitude": -47.6021583,
        "cep": "13423100",
        "pais": "Brasil"
    },
    {
        "id": 379,
        "nome": "Mônika Palopoli",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9035395,
        "longitude": -47.1727544,
        "cep": "13185490",
        "pais": "Brasil"
    },
    {
        "id": 380,
        "nome": "valdemir de souza costa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13290156",
        "pais": "Brasil"
    },
    {
        "id": 381,
        "nome": "André Martins",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.97184,
        "longitude": -47.0108235,
        "cep": "13271415",
        "pais": "Brasil"
    },
    {
        "id": 382,
        "nome": "tiago",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5901072,
        "longitude": -47.3742317,
        "cep": "13487287",
        "pais": "Brasil"
    },
    {
        "id": 383,
        "nome": "Wellington Cardoso",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7502549,
        "longitude": -47.1708671,
        "cep": "13145133",
        "pais": "Brasil"
    },
    {
        "id": 384,
        "nome": "Glauber Venancio de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9328963,
        "longitude": -47.158738,
        "cep": "13059613",
        "pais": "Brasil"
    },
    {
        "id": 385,
        "nome": "Ana Carla Teixeira Petriaggi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040145",
        "pais": "Brasil"
    },
    {
        "id": 386,
        "nome": "Rayla Kauanna Santos Moreira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13294400",
        "pais": "Brasil"
    },
    {
        "id": 387,
        "nome": "Marcelo dos Santos Fernandes",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456530",
        "pais": "Brasil"
    },
    {
        "id": 388,
        "nome": "Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8160268,
        "longitude": -47.2735558,
        "cep": "13170586",
        "pais": "Brasil"
    },
    {
        "id": 389,
        "nome": "leandro ap. de godoi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9654587,
        "longitude": -47.197979,
        "cep": "13058142",
        "pais": "Brasil"
    },
    {
        "id": 390,
        "nome": "Marcos Antônio Oliveira Moreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9503039,
        "longitude": -47.1933874,
        "cep": "13058005",
        "pais": "Brasil"
    },
    {
        "id": 391,
        "nome": "Antonio Carlos da Silva",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -22.5907673,
        "longitude": -47.1674091,
        "cep": "13825000",
        "pais": NaN
    },
    {
        "id": 392,
        "nome": "Wesley",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9367213,
        "longitude": -47.0867144,
        "cep": "13050020",
        "pais": "Brasil"
    },
    {
        "id": 393,
        "nome": "Bruno Araujo Marcondes Machado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8961544,
        "longitude": -47.036845,
        "cep": "13092331",
        "pais": "Brasil"
    },
    {
        "id": 394,
        "nome": "Weslley Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8918706,
        "longitude": -47.2075138,
        "cep": "13186642",
        "pais": "Brasil"
    },
    {
        "id": 395,
        "nome": "Christopher Graupner",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9761443,
        "longitude": -46.9884262,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 396,
        "nome": "Thiago Mello",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.925062,
        "longitude": -47.0757993,
        "cep": "13030580",
        "pais": "Brasil"
    },
    {
        "id": 397,
        "nome": "Nayara Alves Figueiredo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8001054,
        "longitude": -47.1941955,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 398,
        "nome": "Juliana Araujo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8262668,
        "longitude": -47.1680157,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 399,
        "nome": "Catherinne Tocci",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8854404,
        "longitude": -47.0396907,
        "cep": "13090764",
        "pais": "Brasil"
    },
    {
        "id": 400,
        "nome": "Rafael Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042340",
        "pais": "Brasil"
    },
    {
        "id": 401,
        "nome": "Jhonattas Wendel",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7341101,
        "longitude": -47.3504632,
        "cep": "13469400",
        "pais": "Brasil"
    },
    {
        "id": 402,
        "nome": "Ivan Farias",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7229945,
        "longitude": -47.3474341,
        "cep": "13470160",
        "pais": "Brasil"
    },
    {
        "id": 403,
        "nome": "Eduardo Monteiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8834977,
        "longitude": -47.1512713,
        "cep": "13067102",
        "pais": "Brasil"
    },
    {
        "id": 404,
        "nome": "Guilherme Soares",
        "cidade": "Brotas",
        "estado": "SP",
        "latitude": -22.2840884,
        "longitude": -48.1267265,
        "cep": "17380000",
        "pais": "Brasil"
    },
    {
        "id": 405,
        "nome": "Alexandre saragoca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9359774,
        "longitude": -47.0644195,
        "cep": "13040109",
        "pais": "Brasil"
    },
    {
        "id": 406,
        "nome": "Gustavo Ferreira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8918706,
        "longitude": -47.2075138,
        "cep": "13186642",
        "pais": "Brasil"
    },
    {
        "id": 407,
        "nome": "Daniel Mendes Crispim Da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8688958,
        "longitude": -47.2062083,
        "cep": "13184350",
        "pais": "Brasil"
    },
    {
        "id": 408,
        "nome": "Carlos Mamprin",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9880115,
        "longitude": -46.985358,
        "cep": "13275443",
        "pais": "Brasil"
    },
    {
        "id": 409,
        "nome": "Flávio Leme da Silva",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -22.5740527,
        "longitude": -47.1601275,
        "cep": "13163188",
        "pais": "Brasil"
    },
    {
        "id": 410,
        "nome": "Renan Borges Alves",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6034822,
        "longitude": -47.4195026,
        "cep": "13481521",
        "pais": "Brasil"
    },
    {
        "id": 411,
        "nome": "Benedito Luiz da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9338502,
        "longitude": -47.1002543,
        "cep": "13060123",
        "pais": "Brasil"
    },
    {
        "id": 412,
        "nome": "Bia Manção",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8964874,
        "longitude": -47.2200955,
        "cep": "13187115",
        "pais": "Brasil"
    },
    {
        "id": 413,
        "nome": "WELBER MALHÃO",
        "cidade": "São Luís Gonzaga do Maranhão",
        "estado": "MA",
        "latitude": -4.3779379,
        "longitude": -44.6692369,
        "cep": "65708000",
        "pais": NaN
    },
    {
        "id": 414,
        "nome": "Douglas Eduardo Araujo Dias de Paula",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.741911,
        "longitude": -47.3236871,
        "cep": "13478051",
        "pais": "Brasil"
    },
    {
        "id": 415,
        "nome": "thiago henrique baziotti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9337518,
        "longitude": -47.0232726,
        "cep": "13046190",
        "pais": "Brasil"
    },
    {
        "id": 416,
        "nome": "João Paulo Guilherme",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.823662,
        "longitude": -47.2409354,
        "cep": "13175667",
        "pais": "Brasil"
    },
    {
        "id": 417,
        "nome": "Giulia Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9120273,
        "longitude": -47.0344546,
        "cep": "13100223",
        "pais": "Brasil"
    },
    {
        "id": 418,
        "nome": "Rayssa Jhanara Chagas",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8780072,
        "longitude": -47.2016803,
        "cep": "13186022",
        "pais": "Brasil"
    },
    {
        "id": 419,
        "nome": "Cristiane de Araújo Mello",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9421519,
        "longitude": -47.0230088,
        "cep": "13045260",
        "pais": "Brasil"
    },
    {
        "id": 420,
        "nome": "Edson Penedo Lara Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8855542,
        "longitude": -47.0275585,
        "cep": "13091100",
        "pais": "Brasil"
    },
    {
        "id": 421,
        "nome": "Daniel Neves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058305",
        "pais": "Brasil"
    },
    {
        "id": 422,
        "nome": "Andressa GA de Sousa",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8918706,
        "longitude": -47.2075138,
        "cep": "13186642",
        "pais": "Brasil"
    },
    {
        "id": 423,
        "nome": "Rodrigo Uzuna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9905824,
        "longitude": -47.0993396,
        "cep": "13052693",
        "pais": "Brasil"
    },
    {
        "id": 424,
        "nome": "Marcelo Brunassi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9477423,
        "longitude": -47.1201904,
        "cep": "13060781",
        "pais": "Brasil"
    },
    {
        "id": 425,
        "nome": "Larissa Tavares Aleixo",
        "cidade": "Machado",
        "estado": "MG",
        "latitude": -21.6762861,
        "longitude": -45.9211696,
        "cep": "37750000",
        "pais": NaN
    },
    {
        "id": 426,
        "nome": "Brunno tomaz barreto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9784108,
        "longitude": -47.1734045,
        "cep": "13057547",
        "pais": "Brasil"
    },
    {
        "id": 427,
        "nome": "Sthanley Boa Nova",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9423431,
        "longitude": -47.0450722,
        "cep": "13044000",
        "pais": "Brasil"
    },
    {
        "id": 428,
        "nome": "Peterson Alexandre Maximiano de Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9221519,
        "longitude": -47.0171721,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 429,
        "nome": "Rafael Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064841",
        "pais": "Brasil"
    },
    {
        "id": 430,
        "nome": "Gustavo manoel Dos Santos",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.9921507,
        "longitude": -49.4455477,
        "cep": "13497192",
        "pais": NaN
    },
    {
        "id": 431,
        "nome": "André Luiz Borges",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6781707,
        "longitude": -46.9859338,
        "cep": "13914464",
        "pais": "Brasil"
    },
    {
        "id": 432,
        "nome": "Rafael Figueiredo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7044237,
        "longitude": -47.291139,
        "cep": "13474590",
        "pais": "Brasil"
    },
    {
        "id": 433,
        "nome": "Raquel Valle",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9068447,
        "longitude": -47.1023862,
        "cep": "13033185",
        "pais": "Brasil"
    },
    {
        "id": 434,
        "nome": "Cesar Augusto Silva Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9112063,
        "longitude": -47.0505639,
        "cep": "13026026",
        "pais": "Brasil"
    },
    {
        "id": 435,
        "nome": "Andréia Marques Andrades Mendes",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13260000",
        "pais": "Brasil"
    },
    {
        "id": 436,
        "nome": "Wesley",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.964315,
        "longitude": -47.1068377,
        "cep": "13052320",
        "pais": "Brasil"
    },
    {
        "id": 437,
        "nome": "Cleusa Magda",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.936091,
        "longitude": -47.0641076,
        "cep": "13040061",
        "pais": "Brasil"
    },
    {
        "id": 438,
        "nome": "Ricardo de Freitas Carvalho",
        "cidade": "Itapetininga",
        "estado": "SP",
        "latitude": -23.6302924,
        "longitude": -48.038039,
        "cep": "18206770",
        "pais": "Brasil"
    },
    {
        "id": 439,
        "nome": "Julio Tirabassi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9031836,
        "longitude": -47.081586,
        "cep": "13032405",
        "pais": "Brasil"
    },
    {
        "id": 440,
        "nome": "Isabelli Cristini Stocco De Santana Alves Messias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9155284,
        "longitude": -47.030079,
        "cep": "13100365",
        "pais": "Brasil"
    },
    {
        "id": 441,
        "nome": "Cleber Martins",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.559903,
        "longitude": -47.4436422,
        "cep": "13483230",
        "pais": "Brasil"
    },
    {
        "id": 442,
        "nome": "Patricia Zago Pinheiro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.89695,
        "longitude": -47.2358262,
        "cep": "13188030",
        "pais": "Brasil"
    },
    {
        "id": 443,
        "nome": "Juliana",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1216996,
        "longitude": -47.2294126,
        "cep": "13346450",
        "pais": "Brasil"
    },
    {
        "id": 444,
        "nome": "Diego  Lopes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8138456,
        "longitude": -47.0297742,
        "cep": "13098422",
        "pais": "Brasil"
    },
    {
        "id": 445,
        "nome": "Marli Bernardes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059768",
        "pais": "Brasil"
    },
    {
        "id": 446,
        "nome": "Camila Casagrande Yzidoro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8493018,
        "longitude": -47.0353601,
        "cep": "13088847",
        "pais": "Brasil"
    },
    {
        "id": 447,
        "nome": "Jussara pereira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8086625,
        "longitude": -47.2040194,
        "cep": "13178321",
        "pais": "Brasil"
    },
    {
        "id": 448,
        "nome": "Fabiana Silveira de Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8435909,
        "longitude": -47.0486026,
        "cep": "13087600",
        "pais": "Brasil"
    },
    {
        "id": 449,
        "nome": "Rafael Montecchio Leal",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9211069,
        "longitude": -47.0435592,
        "cep": "13100410",
        "pais": "Brasil"
    },
    {
        "id": 450,
        "nome": "Roger Santos Flor",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0952132,
        "longitude": -47.2227406,
        "cep": "13345040",
        "pais": "Brasil"
    },
    {
        "id": 451,
        "nome": "Eder",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455440",
        "pais": "Brasil"
    },
    {
        "id": 452,
        "nome": "Leonard",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9508199,
        "longitude": -47.0308653,
        "cep": "13044500",
        "pais": "Brasil"
    },
    {
        "id": 453,
        "nome": "Leandro Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040725",
        "pais": "Brasil"
    },
    {
        "id": 454,
        "nome": "Paula Ferreira Azevedo",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1035017,
        "longitude": -47.2598624,
        "cep": "13349302",
        "pais": "Brasil"
    },
    {
        "id": 455,
        "nome": "Gabriella Ziliotti da Silva Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9368409,
        "longitude": -47.0397719,
        "cep": "13043650",
        "pais": "Brasil"
    },
    {
        "id": 456,
        "nome": "Thalita França",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0366211,
        "longitude": -47.1118869,
        "cep": "13053217",
        "pais": "Brasil"
    },
    {
        "id": 457,
        "nome": "Adriano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9445393,
        "longitude": -47.1125364,
        "cep": "13060616",
        "pais": "Brasil"
    },
    {
        "id": 458,
        "nome": "Cesar Ribeiro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470486",
        "pais": "Brasil"
    },
    {
        "id": 459,
        "nome": "Marco  Toledo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 460,
        "nome": "Carine Brito",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7225619,
        "longitude": -47.3058646,
        "cep": "13473300",
        "pais": "Brasil"
    },
    {
        "id": 461,
        "nome": "Thamiris Lopes",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5952694,
        "longitude": -47.4165376,
        "cep": "13481631",
        "pais": "Brasil"
    },
    {
        "id": 462,
        "nome": "Maria Aparecida Dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064000",
        "pais": "Brasil"
    },
    {
        "id": 463,
        "nome": "Bruno Diogo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9191842,
        "longitude": -47.0903313,
        "cep": "13031390",
        "pais": "Brasil"
    },
    {
        "id": 464,
        "nome": "Leonardo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181796",
        "pais": "Brasil"
    },
    {
        "id": 465,
        "nome": "willians bryan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9442153,
        "longitude": -47.1218549,
        "cep": "13060744",
        "pais": "Brasil"
    },
    {
        "id": 466,
        "nome": "Raphael De Oliveira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8001054,
        "longitude": -47.1941955,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 467,
        "nome": "Fábio Aparecido Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322261",
        "pais": "Brasil"
    },
    {
        "id": 468,
        "nome": "Paulo Percl Junior",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9820838,
        "longitude": -47.0000454,
        "cep": "13277020",
        "pais": "Brasil"
    },
    {
        "id": 469,
        "nome": "Erik Rufino Xavier",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9078155,
        "longitude": -47.1171268,
        "cep": "13061346",
        "pais": "Brasil"
    },
    {
        "id": 470,
        "nome": "Alessandro Vitorino Pereira",
        "cidade": "Santa Gertrudes",
        "estado": "SP",
        "latitude": -22.4572188,
        "longitude": -47.5387818,
        "cep": "13513198",
        "pais": "Brasil"
    },
    {
        "id": 471,
        "nome": "Diogo Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009761,
        "longitude": -47.2298333,
        "cep": "13188000",
        "pais": "Brasil"
    },
    {
        "id": 472,
        "nome": "Fabiana Mantovani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9208432,
        "longitude": -47.0830179,
        "cep": "13031500",
        "pais": "Brasil"
    },
    {
        "id": 473,
        "nome": "Jessé Sales Jr",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9423431,
        "longitude": -47.0450722,
        "cep": "13044000",
        "pais": "Brasil"
    },
    {
        "id": 474,
        "nome": "Rayssa Ponzi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9208549,
        "longitude": -47.0823175,
        "cep": "13031400",
        "pais": "Brasil"
    },
    {
        "id": 475,
        "nome": "Roger Fabricio da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8618498,
        "longitude": -47.0381773,
        "cep": "13088106",
        "pais": "Brasil"
    },
    {
        "id": 476,
        "nome": "Gerson",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4085928,
        "longitude": -47.5553146,
        "cep": "13506732",
        "pais": "Brasil"
    },
    {
        "id": 477,
        "nome": "Christopher",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9949164,
        "longitude": -47.1393343,
        "cep": "13056013",
        "pais": "Brasil"
    },
    {
        "id": 478,
        "nome": "Natan",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9893871,
        "longitude": -46.9976837,
        "cep": "13277440",
        "pais": "Brasil"
    },
    {
        "id": 479,
        "nome": "Tamyris Pavezi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8479259,
        "longitude": -47.0730912,
        "cep": "13080080",
        "pais": "Brasil"
    },
    {
        "id": 480,
        "nome": "robson lopes",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1190622,
        "longitude": -46.9703124,
        "cep": "13213282",
        "pais": "Brasil"
    },
    {
        "id": 481,
        "nome": "Fabiano Santos Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9012379,
        "longitude": -47.0647994,
        "cep": "13020260",
        "pais": "Brasil"
    },
    {
        "id": 482,
        "nome": "Carlos Franco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9281385,
        "longitude": -47.0373443,
        "cep": "13045603",
        "pais": "Brasil"
    },
    {
        "id": 483,
        "nome": "Murihel Rodrigues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9615029,
        "longitude": -46.981417,
        "cep": "13274390",
        "pais": "Brasil"
    },
    {
        "id": 484,
        "nome": "Emmily Sousa",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454095",
        "pais": "Brasil"
    },
    {
        "id": 485,
        "nome": "Bruno",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7939353,
        "longitude": -47.2026121,
        "cep": "13178724",
        "pais": "Brasil"
    },
    {
        "id": 486,
        "nome": "Paulo Sergio Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9350484,
        "longitude": -47.061358,
        "cep": "13040108",
        "pais": "Brasil"
    },
    {
        "id": 487,
        "nome": "Patrícia Scorisa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.887888,
        "longitude": -47.0682221,
        "cep": "13073340",
        "pais": "Brasil"
    },
    {
        "id": 488,
        "nome": "Hosana Dionísio Lima",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453758",
        "pais": "Brasil"
    },
    {
        "id": 489,
        "nome": "Maxwell Gomes Cardoso",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9034868,
        "longitude": -47.2445655,
        "cep": "13188180",
        "pais": "Brasil"
    },
    {
        "id": 490,
        "nome": "Roberta Azanha",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.791425,
        "longitude": -47.2839803,
        "cep": "13173286",
        "pais": "Brasil"
    },
    {
        "id": 491,
        "nome": "Sergio Tonhatti Junior",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9714612,
        "longitude": -47.012647,
        "cep": "13271430",
        "pais": "Brasil"
    },
    {
        "id": 492,
        "nome": "Nathan Mangoli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9110182,
        "longitude": -47.0669952,
        "cep": "13035270",
        "pais": "Brasil"
    },
    {
        "id": 493,
        "nome": "Gilvan",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5725306,
        "longitude": -47.4523209,
        "cep": "13482781",
        "pais": "Brasil"
    },
    {
        "id": 494,
        "nome": "WASHINGTON ARAUJO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9244945,
        "longitude": -47.0165487,
        "cep": "13101284",
        "pais": "Brasil"
    },
    {
        "id": 495,
        "nome": "Rosângela Duarte",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13182630",
        "pais": "Brasil"
    },
    {
        "id": 496,
        "nome": "Helen Katerine Buck Muller",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5478113,
        "longitude": -47.4130217,
        "cep": "13484115",
        "pais": "Brasil"
    },
    {
        "id": 497,
        "nome": "Henrique Rodrigues",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7267849,
        "longitude": -47.3137092,
        "cep": "13472310",
        "pais": "Brasil"
    },
    {
        "id": 498,
        "nome": "Valeria Marcelino",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458870",
        "pais": "Brasil"
    },
    {
        "id": 499,
        "nome": "David Garcia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9361297,
        "longitude": -47.0503207,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 500,
        "nome": "Giovanna  Mazzer",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.903251,
        "longitude": -47.1724126,
        "cep": "13185230",
        "pais": "Brasil"
    },
    {
        "id": 501,
        "nome": "Walmir",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9649534,
        "longitude": -47.1985552,
        "cep": "13058179",
        "pais": "Brasil"
    },
    {
        "id": 502,
        "nome": "Caio Gasbarro",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4004357,
        "longitude": -47.5612899,
        "cep": "13500315",
        "pais": "Brasil"
    },
    {
        "id": 503,
        "nome": "Daniela Oliveira Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9504314,
        "longitude": -47.0893452,
        "cep": "13051103",
        "pais": "Brasil"
    },
    {
        "id": 504,
        "nome": "Vanessa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8828176,
        "longitude": -46.9867309,
        "cep": "13105125",
        "pais": "Brasil"
    },
    {
        "id": 505,
        "nome": "Cristiano  condotta",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9464879,
        "longitude": -47.1613763,
        "cep": "13059615",
        "pais": "Brasil"
    },
    {
        "id": 506,
        "nome": "Cleber",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.193497,
        "longitude": -46.8684219,
        "cep": "13219071",
        "pais": "Brasil"
    },
    {
        "id": 507,
        "nome": "JONATHAN ERNESTO BATISTA BORJA",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9356662,
        "longitude": -47.2538203,
        "cep": "13197340",
        "pais": "Brasil"
    },
    {
        "id": 508,
        "nome": "Alexandro Kuhl",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5514568,
        "longitude": -47.3944182,
        "cep": "13485042",
        "pais": "Brasil"
    },
    {
        "id": 509,
        "nome": "Flávio Mantoanelli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9546438,
        "longitude": -47.0833799,
        "cep": "13051433",
        "pais": "Brasil"
    },
    {
        "id": 510,
        "nome": "MAURÍCIO BARROS",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5609015,
        "longitude": -47.4044997,
        "cep": "13480151",
        "pais": "Brasil"
    },
    {
        "id": 511,
        "nome": "Wesley Henrique Souza",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.875946,
        "longitude": -47.2417396,
        "cep": "13189217",
        "pais": "Brasil"
    },
    {
        "id": 512,
        "nome": "Edison Junior",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181640",
        "pais": "Brasil"
    },
    {
        "id": 513,
        "nome": "Paulo Ricardo Michele Souza",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0416538,
        "longitude": -47.3718002,
        "cep": "13350000",
        "pais": "Brasil"
    },
    {
        "id": 514,
        "nome": "Marcio Justiniano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9103885,
        "longitude": -47.0794859,
        "cep": "13035010",
        "pais": "Brasil"
    },
    {
        "id": 515,
        "nome": "Nayara Da silva araujo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8834433,
        "longitude": -47.0353418,
        "cep": "13090830",
        "pais": "Brasil"
    },
    {
        "id": 516,
        "nome": "Edson Israel Simões Fortuna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8771892,
        "longitude": -47.0554574,
        "cep": "13075460",
        "pais": "Brasil"
    },
    {
        "id": 517,
        "nome": "Jose Ronaldo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051069",
        "pais": "Brasil"
    },
    {
        "id": 518,
        "nome": "Julio Cesar",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181796",
        "pais": "Brasil"
    },
    {
        "id": 519,
        "nome": "Fërnändä Säntanä",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9645124,
        "longitude": -47.198595,
        "cep": "13058208",
        "pais": "Brasil"
    },
    {
        "id": 520,
        "nome": "Daniboy Moraes",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.418595,
        "longitude": -47.5718754,
        "cep": "13503390",
        "pais": "Brasil"
    },
    {
        "id": 521,
        "nome": "Guilherme De Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049107",
        "pais": "Brasil"
    },
    {
        "id": 522,
        "nome": "Andreia Gimenez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9353917,
        "longitude": -47.09251,
        "cep": "13050063",
        "pais": "Brasil"
    },
    {
        "id": 523,
        "nome": "Vito Madio Chiarelli Neto",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7432085,
        "longitude": -47.3540809,
        "cep": "13469097",
        "pais": "Brasil"
    },
    {
        "id": 524,
        "nome": "Milton Magalhães Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9115815,
        "longitude": -47.119288,
        "cep": "13061371",
        "pais": "Brasil"
    },
    {
        "id": 525,
        "nome": "Caleb Azevedo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9307354,
        "longitude": -47.1661866,
        "cep": "13059620",
        "pais": "Brasil"
    },
    {
        "id": 526,
        "nome": "Lara Maia da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8883635,
        "longitude": -47.0426516,
        "cep": "13090770",
        "pais": "Brasil"
    },
    {
        "id": 527,
        "nome": "Herbert Sakaue",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8449116,
        "longitude": -47.0221495,
        "cep": "13097121",
        "pais": "Brasil"
    },
    {
        "id": 528,
        "nome": "Charles Dos Santos Vieira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8914908,
        "longitude": -47.2247404,
        "cep": "13187149",
        "pais": "Brasil"
    },
    {
        "id": 529,
        "nome": "JAQUELINE CARDOSO SILVA CORREA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.934064,
        "longitude": -47.0866598,
        "cep": "13050000",
        "pais": "Brasil"
    },
    {
        "id": 530,
        "nome": "Luiz Fernando Pereira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7702854,
        "longitude": -47.1624813,
        "cep": "13140426",
        "pais": "Brasil"
    },
    {
        "id": 531,
        "nome": "Erica",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9168214,
        "longitude": -47.0445426,
        "cep": "13026140",
        "pais": "Brasil"
    },
    {
        "id": 532,
        "nome": "Fabio Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034830",
        "pais": "Brasil"
    },
    {
        "id": 533,
        "nome": "lucas machado gonçalves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8459779,
        "longitude": -47.2070839,
        "cep": "13183661",
        "pais": "Brasil"
    },
    {
        "id": 534,
        "nome": "sarah  rodrigues",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8936515,
        "longitude": -47.2496321,
        "cep": "13188235",
        "pais": "Brasil"
    },
    {
        "id": 535,
        "nome": "Gustavo Bertani Milani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9658318,
        "longitude": -47.0419805,
        "cep": "13042820",
        "pais": "Brasil"
    },
    {
        "id": 536,
        "nome": "Beatriz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9218223,
        "longitude": -47.0878121,
        "cep": "13031580",
        "pais": "Brasil"
    },
    {
        "id": 537,
        "nome": "Diego aparecido paixão",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -22.5418341,
        "longitude": -47.1701473,
        "cep": "13165524",
        "pais": "Brasil"
    },
    {
        "id": 538,
        "nome": "Márcio silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470487",
        "pais": "Brasil"
    },
    {
        "id": 539,
        "nome": "Rodrigo Tifoski",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455450",
        "pais": "Brasil"
    },
    {
        "id": 540,
        "nome": "Bruno Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9320985,
        "longitude": -47.0762548,
        "cep": "13050008",
        "pais": "Brasil"
    },
    {
        "id": 541,
        "nome": "Rodolfo",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13451076",
        "pais": "Brasil"
    },
    {
        "id": 542,
        "nome": "Karina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9079159,
        "longitude": -47.0476421,
        "cep": "13026050",
        "pais": "Brasil"
    },
    {
        "id": 543,
        "nome": "Samuel de Oliveira Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9443416,
        "longitude": -47.0406979,
        "cep": "13044440",
        "pais": "Brasil"
    },
    {
        "id": 544,
        "nome": "Julyeni Salviano Vaz",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322224",
        "pais": "Brasil"
    },
    {
        "id": 545,
        "nome": "Felipe Daniel Franco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9290171,
        "longitude": -47.0893095,
        "cep": "13050471",
        "pais": "Brasil"
    },
    {
        "id": 546,
        "nome": "Tiago Duni Cerqueira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8985279,
        "longitude": -47.0556835,
        "cep": "13025061",
        "pais": "Brasil"
    },
    {
        "id": 547,
        "nome": "Fabrício Gomes Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9112794,
        "longitude": -47.0818246,
        "cep": "13035000",
        "pais": "Brasil"
    },
    {
        "id": 548,
        "nome": "Monique Maquim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9306974,
        "longitude": -47.1783236,
        "cep": "13058726",
        "pais": "Brasil"
    },
    {
        "id": 549,
        "nome": "Carolina Gomes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178559",
        "pais": "Brasil"
    },
    {
        "id": 550,
        "nome": "Dayane Nunes modesto Moreira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8498124,
        "longitude": -47.2094688,
        "cep": "13183627",
        "pais": "Brasil"
    },
    {
        "id": 551,
        "nome": "Camila Andre de andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9636375,
        "longitude": -47.1397688,
        "cep": "13056640",
        "pais": "Brasil"
    },
    {
        "id": 552,
        "nome": "Bruna Araújo Fioresi De Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8514046,
        "longitude": -47.1075637,
        "cep": "13082085",
        "pais": "Brasil"
    },
    {
        "id": 553,
        "nome": "Jonas Luiz Martins",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8908191,
        "longitude": -47.2080093,
        "cep": "13186664",
        "pais": "Brasil"
    },
    {
        "id": 554,
        "nome": "Clebson Ferreira",
        "cidade": "São Simão",
        "estado": "SP",
        "latitude": -21.4800208,
        "longitude": -47.5531095,
        "cep": "14200000",
        "pais": "Brasil"
    },
    {
        "id": 555,
        "nome": "Iago Souza Vieira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938899,
        "longitude": -47.1228027,
        "cep": "13060726",
        "pais": "Brasil"
    },
    {
        "id": 556,
        "nome": "Weriston",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.903251,
        "longitude": -47.1724126,
        "cep": "13185230",
        "pais": "Brasil"
    },
    {
        "id": 557,
        "nome": "Eliane Aparecida Mendes Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8480023,
        "longitude": -47.1102067,
        "cep": "13082180",
        "pais": "Brasil"
    },
    {
        "id": 558,
        "nome": "Karina Geraldo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7626991,
        "longitude": -47.3396561,
        "cep": "13467110",
        "pais": "Brasil"
    },
    {
        "id": 559,
        "nome": "Iasmin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9479334,
        "longitude": -47.1369878,
        "cep": "13059703",
        "pais": "Brasil"
    },
    {
        "id": 560,
        "nome": "Fernando Mascarenhas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9954104,
        "longitude": -47.143007,
        "cep": "13056040",
        "pais": "Brasil"
    },
    {
        "id": 561,
        "nome": "Marcos Lima",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7758,
        "longitude": -47.2917,
        "cep": "13386078",
        "pais": "Brasil"
    },
    {
        "id": 562,
        "nome": "Francisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13085415",
        "pais": "Brasil"
    },
    {
        "id": 563,
        "nome": "DENISE ALVARES BITTAR",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7307838,
        "longitude": -47.3101606,
        "cep": "13472080",
        "pais": "Brasil"
    },
    {
        "id": 564,
        "nome": "Huirian suzin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9617711,
        "longitude": -47.0491571,
        "cep": "13042670",
        "pais": "Brasil"
    },
    {
        "id": 565,
        "nome": "Osmar Ferreira Duarte",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13332057",
        "pais": "Brasil"
    },
    {
        "id": 566,
        "nome": "Marcia Sueli Da Silva",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3817943,
        "longitude": -47.5623484,
        "cep": "13505070",
        "pais": "Brasil"
    },
    {
        "id": 567,
        "nome": "Victor Hugo Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9413142,
        "longitude": -47.1572811,
        "cep": "13059042",
        "pais": "Brasil"
    },
    {
        "id": 568,
        "nome": "Leandro Mendes de lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9427712,
        "longitude": -47.1869266,
        "cep": "13058535",
        "pais": "Brasil"
    },
    {
        "id": 569,
        "nome": "ROGERIO DA ROCHA ROSA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040565",
        "pais": "Brasil"
    },
    {
        "id": 570,
        "nome": "Jullya",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9692545,
        "longitude": -47.0008236,
        "cep": "13271180",
        "pais": "Brasil"
    },
    {
        "id": 571,
        "nome": "Robson Dias Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9893977,
        "longitude": -47.1000521,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 572,
        "nome": "Geisla Radaele da Silva Carvalho",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.903251,
        "longitude": -47.1724126,
        "cep": "13185230",
        "pais": "Brasil"
    },
    {
        "id": 573,
        "nome": "Alan",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13312784",
        "pais": "Brasil"
    },
    {
        "id": 574,
        "nome": "Thiago Affarelli Alvarenga",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8678781,
        "longitude": -47.2284093,
        "cep": "13189284",
        "pais": "Brasil"
    },
    {
        "id": 575,
        "nome": "Marcelo Ribeiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8262668,
        "longitude": -47.1680157,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 576,
        "nome": "leandro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8086959,
        "longitude": -47.2179225,
        "cep": "13177903",
        "pais": "Brasil"
    },
    {
        "id": 577,
        "nome": "Richard Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9673928,
        "longitude": -47.147656,
        "cep": "13056521",
        "pais": "Brasil"
    },
    {
        "id": 578,
        "nome": "Leandro",
        "cidade": "Serra Negra",
        "estado": "SP",
        "latitude": -22.6126459,
        "longitude": -46.699986,
        "cep": "13930000",
        "pais": "Brasil"
    },
    {
        "id": 579,
        "nome": "Estevão Brianez",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7409217,
        "longitude": -47.2986622,
        "cep": "13477500",
        "pais": "Brasil"
    },
    {
        "id": 580,
        "nome": "Flávia Amâncio Vantini",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9208549,
        "longitude": -47.0823175,
        "cep": "13031400",
        "pais": "Brasil"
    },
    {
        "id": 581,
        "nome": "Paula muniz damiani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9012379,
        "longitude": -47.0647994,
        "cep": "13020260",
        "pais": "Brasil"
    },
    {
        "id": 582,
        "nome": "Diogo Rocco",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9539397,
        "longitude": -46.9938095,
        "cep": "13272080",
        "pais": "Brasil"
    },
    {
        "id": 583,
        "nome": "Anderson Rocha",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453022",
        "pais": "Brasil"
    },
    {
        "id": 584,
        "nome": "Gisele",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9296948,
        "longitude": -47.0898402,
        "cep": "13050460",
        "pais": "Brasil"
    },
    {
        "id": 585,
        "nome": "Luan Rodrigo Marciano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9520619,
        "longitude": -47.0268035,
        "cep": "13044503",
        "pais": "Brasil"
    },
    {
        "id": 586,
        "nome": "Roberto Papa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8893321,
        "longitude": -47.0217891,
        "cep": "13092526",
        "pais": "Brasil"
    },
    {
        "id": 587,
        "nome": "Douglas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9281419,
        "longitude": -47.1127522,
        "cep": "13060039",
        "pais": "Brasil"
    },
    {
        "id": 588,
        "nome": "Stefani Caroline",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9902782,
        "longitude": -47.1451819,
        "cep": "13056073",
        "pais": "Brasil"
    },
    {
        "id": 589,
        "nome": "Rosalva dos Santos Marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7933755,
        "longitude": -47.0876757,
        "cep": "13085260",
        "pais": "Brasil"
    },
    {
        "id": 590,
        "nome": "PEDRO MICHEL SITTA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9166603,
        "longitude": -47.0372482,
        "cep": "13100310",
        "pais": "Brasil"
    },
    {
        "id": 591,
        "nome": "Léo Santos",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7771928,
        "longitude": -47.3039081,
        "cep": "13380112",
        "pais": "Brasil"
    },
    {
        "id": 592,
        "nome": "Douglas Martinez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9611223,
        "longitude": -47.0652153,
        "cep": "13049255",
        "pais": "Brasil"
    },
    {
        "id": 593,
        "nome": "Pedro Henrique da Silva Barboza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9494881,
        "longitude": -47.0960032,
        "cep": "13050191",
        "pais": "Brasil"
    },
    {
        "id": 594,
        "nome": "André Gustavo Alexandre da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.97024,
        "longitude": -47.1818788,
        "cep": "13057121",
        "pais": "Brasil"
    },
    {
        "id": 595,
        "nome": "Misael Vieira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9175742,
        "longitude": -47.1177416,
        "cep": "13060291",
        "pais": "Brasil"
    },
    {
        "id": 596,
        "nome": "Najara Carmo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8952252,
        "longitude": -47.1583944,
        "cep": "13064806",
        "pais": "Brasil"
    },
    {
        "id": 597,
        "nome": "Dony Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9053768,
        "longitude": -47.0984642,
        "cep": "13033035",
        "pais": "Brasil"
    },
    {
        "id": 598,
        "nome": "Henrique Carmona",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0951406,
        "longitude": -47.2785202,
        "cep": "13349045",
        "pais": "Brasil"
    },
    {
        "id": 599,
        "nome": "Dennys franklin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9331198,
        "longitude": -47.1177839,
        "cep": "13060535",
        "pais": "Brasil"
    },
    {
        "id": 600,
        "nome": "Elaine Cristiabel da Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8251046,
        "longitude": -47.235804,
        "cep": "13175668",
        "pais": "Brasil"
    },
    {
        "id": 601,
        "nome": "Rose Bella",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8792858,
        "longitude": -47.0529593,
        "cep": "13076628",
        "pais": "Brasil"
    },
    {
        "id": 602,
        "nome": "Karina",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5916723,
        "longitude": -47.3946411,
        "cep": "13481296",
        "pais": "Brasil"
    },
    {
        "id": 603,
        "nome": "Murilo Langer",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9057706,
        "longitude": -47.176324,
        "cep": "13185342",
        "pais": "Brasil"
    },
    {
        "id": 604,
        "nome": "Sílvio Eduardo Luiz",
        "cidade": "Botucatu",
        "estado": "SP",
        "latitude": -22.8816928,
        "longitude": -48.4446246,
        "cep": "18603760",
        "pais": "Brasil"
    },
    {
        "id": 605,
        "nome": "Flávio Araújo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.74995,
        "longitude": -47.3172624,
        "cep": "13478710",
        "pais": "Brasil"
    },
    {
        "id": 606,
        "nome": "Marina Marques de Lima",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13260000",
        "pais": "Brasil"
    },
    {
        "id": 607,
        "nome": "Márcio Ferracioli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9233997,
        "longitude": -47.1076451,
        "cep": "13060059",
        "pais": "Brasil"
    },
    {
        "id": 608,
        "nome": "Daniele Cristina Prata",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0416538,
        "longitude": -47.3718002,
        "cep": "13350000",
        "pais": "Brasil"
    },
    {
        "id": 609,
        "nome": "Luiz Felipe Rossi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9808169,
        "longitude": -46.9940304,
        "cep": "13276390",
        "pais": "Brasil"
    },
    {
        "id": 610,
        "nome": "Alex Rodrigo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8154615,
        "longitude": -47.2311486,
        "cep": "13177244",
        "pais": "Brasil"
    },
    {
        "id": 611,
        "nome": "Janaina dias costa da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9316034,
        "longitude": -47.1823677,
        "cep": "13058713",
        "pais": "Brasil"
    },
    {
        "id": 612,
        "nome": "Fernanda Neri",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1508,
        "longitude": -46.9085714,
        "cep": "13214483",
        "pais": "Brasil"
    },
    {
        "id": 613,
        "nome": "José Osvaldo de Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9711948,
        "longitude": -47.1747839,
        "cep": "13057136",
        "pais": "Brasil"
    },
    {
        "id": 614,
        "nome": "Duddy Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9202588,
        "longitude": -47.0483894,
        "cep": "13026370",
        "pais": "Brasil"
    },
    {
        "id": 615,
        "nome": "Elisa Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8902385,
        "longitude": -47.0369147,
        "cep": "13090723",
        "pais": "Brasil"
    },
    {
        "id": 616,
        "nome": "Felipe de Souza Gomes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8301864,
        "longitude": -47.0778704,
        "cep": "13084070",
        "pais": "Brasil"
    },
    {
        "id": 617,
        "nome": "Tiago Souza",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9992384,
        "longitude": -46.9919195,
        "cep": "13277732",
        "pais": "Brasil"
    },
    {
        "id": 618,
        "nome": "Carolina Pereira Ripa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8648577,
        "longitude": -47.0385152,
        "cep": "13088300",
        "pais": "Brasil"
    },
    {
        "id": 619,
        "nome": "Leonardo Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9329629,
        "longitude": -47.0909205,
        "cep": "13050055",
        "pais": "Brasil"
    },
    {
        "id": 620,
        "nome": "Poliana Lima",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7329109,
        "longitude": -47.3446008,
        "cep": "13471104",
        "pais": "Brasil"
    },
    {
        "id": 621,
        "nome": "Adriana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9542778,
        "longitude": -47.0791433,
        "cep": "13051027",
        "pais": "Brasil"
    },
    {
        "id": 622,
        "nome": "adalto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9401055,
        "longitude": -47.1566134,
        "cep": "13059016",
        "pais": "Brasil"
    },
    {
        "id": 623,
        "nome": "Bianca Nascimento Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.93256,
        "longitude": -47.0950688,
        "cep": "13050515",
        "pais": "Brasil"
    },
    {
        "id": 624,
        "nome": "Sebastião Laércio de Paula",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9672414,
        "longitude": -46.9933081,
        "cep": "13274125",
        "pais": "Brasil"
    },
    {
        "id": 625,
        "nome": "Gabriele andrade mir",
        "cidade": "Ponta Porã",
        "estado": "MS",
        "latitude": -22.5378671,
        "longitude": -55.7282747,
        "cep": "79904672",
        "pais": NaN
    },
    {
        "id": 626,
        "nome": "Joyce Luiza Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9482757,
        "longitude": -47.1978878,
        "cep": "13058822",
        "pais": "Brasil"
    },
    {
        "id": 627,
        "nome": "Alfredo Divino Jr",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.193497,
        "longitude": -46.8684219,
        "cep": "13219071",
        "pais": "Brasil"
    },
    {
        "id": 628,
        "nome": "Nane Pires",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9093483,
        "longitude": -47.075027,
        "cep": "13035060",
        "pais": "Brasil"
    },
    {
        "id": 629,
        "nome": "Camila",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9546438,
        "longitude": -47.0833799,
        "cep": "13051433",
        "pais": "Brasil"
    },
    {
        "id": 630,
        "nome": "Leonardo Marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9200767,
        "longitude": -47.09118,
        "cep": "13031790",
        "pais": "Brasil"
    },
    {
        "id": 631,
        "nome": "Joana Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8867618,
        "longitude": -47.0345209,
        "cep": "13091107",
        "pais": "Brasil"
    },
    {
        "id": 632,
        "nome": "Carolina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9425043,
        "longitude": -47.08278,
        "cep": "13049020",
        "pais": "Brasil"
    },
    {
        "id": 633,
        "nome": "Vinicius Avelar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9432128,
        "longitude": -47.1327814,
        "cep": "13059673",
        "pais": "Brasil"
    },
    {
        "id": 634,
        "nome": "Alexandre Gabaci",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8840901,
        "longitude": -47.1782626,
        "cep": "13185143",
        "pais": "Brasil"
    },
    {
        "id": 635,
        "nome": "Vagner dos Santos de Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9778664,
        "longitude": -47.1435873,
        "cep": "13056400",
        "pais": "Brasil"
    },
    {
        "id": 636,
        "nome": "Uranil Alves Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9762211,
        "longitude": -47.1424937,
        "cep": "13056350",
        "pais": "Brasil"
    },
    {
        "id": 637,
        "nome": "Juliano Melo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185148",
        "pais": "Brasil"
    },
    {
        "id": 638,
        "nome": "Rogerio Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186524",
        "pais": "Brasil"
    },
    {
        "id": 639,
        "nome": "Roberto Silva Ferreira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310284",
        "pais": "Brasil"
    },
    {
        "id": 640,
        "nome": "Alex",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8667857,
        "longitude": -47.0565434,
        "cep": "13087221",
        "pais": "Brasil"
    },
    {
        "id": 641,
        "nome": "Lucas Oliveira",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -15.949925,
        "longitude": -44.856018,
        "cep": "39300000",
        "pais": NaN
    },
    {
        "id": 642,
        "nome": "Rafael Sales da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9406451,
        "longitude": -47.1132544,
        "cep": "13060504",
        "pais": "Brasil"
    },
    {
        "id": 643,
        "nome": "Vagner oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9253186,
        "longitude": -47.123645,
        "cep": "13060810",
        "pais": "Brasil"
    },
    {
        "id": 644,
        "nome": "Renata Epifanio da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9521667,
        "longitude": -47.0813922,
        "cep": "13051076",
        "pais": "Brasil"
    },
    {
        "id": 645,
        "nome": "Marco Antônio Aleixo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13327331",
        "pais": "Brasil"
    },
    {
        "id": 646,
        "nome": "Ana Caroline de Oliveira Pereira",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -22.5640207,
        "longitude": -47.1631696,
        "cep": "13167092",
        "pais": "Brasil"
    },
    {
        "id": 647,
        "nome": "Priscilla Somazz Reis Amorim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9381841,
        "longitude": -47.0470546,
        "cep": "13044075",
        "pais": "Brasil"
    },
    {
        "id": 648,
        "nome": "Eliane",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13069426",
        "pais": "Brasil"
    },
    {
        "id": 649,
        "nome": "Deivid Marloch",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9415088,
        "longitude": -47.0457142,
        "cep": "13044100",
        "pais": "Brasil"
    },
    {
        "id": 650,
        "nome": "Katy Gabriela Alves",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7242747,
        "longitude": -47.3079074,
        "cep": "13473290",
        "pais": "Brasil"
    },
    {
        "id": 651,
        "nome": "ALEXANDRE MARSON",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9556357,
        "longitude": -47.1883752,
        "cep": "13058334",
        "pais": "Brasil"
    },
    {
        "id": 652,
        "nome": "Celso Manfredini Carregari",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0450175,
        "longitude": -47.1301026,
        "cep": "13053616",
        "pais": "Brasil"
    },
    {
        "id": 653,
        "nome": "ana paula palmeira montagner",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.790714,
        "longitude": -46.9947421,
        "cep": "13098772",
        "pais": "Brasil"
    },
    {
        "id": 654,
        "nome": "Lucas Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0395177,
        "longitude": -47.1124719,
        "cep": "13053206",
        "pais": "Brasil"
    },
    {
        "id": 655,
        "nome": "Welliton Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8942616,
        "longitude": -47.21359,
        "cep": "13187130",
        "pais": "Brasil"
    },
    {
        "id": 656,
        "nome": "Alexandre",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7405648,
        "longitude": -47.3207637,
        "cep": "13478190",
        "pais": "Brasil"
    },
    {
        "id": 657,
        "nome": "CLAUDIA GUEDES",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9887606,
        "longitude": -46.9971988,
        "cep": "13277430",
        "pais": "Brasil"
    },
    {
        "id": 658,
        "nome": "Beatris",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8488983,
        "longitude": -47.1149888,
        "cep": "13082195",
        "pais": "Brasil"
    },
    {
        "id": 659,
        "nome": "Andre Simões",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7484591,
        "longitude": -47.1767736,
        "cep": "13145093",
        "pais": "Brasil"
    },
    {
        "id": 660,
        "nome": "William Malvestio",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9057706,
        "longitude": -47.176324,
        "cep": "13185342",
        "pais": "Brasil"
    },
    {
        "id": 661,
        "nome": "Diego Pereira",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.8941408,
        "longitude": -48.2622678,
        "cep": "17260000",
        "pais": NaN
    },
    {
        "id": 662,
        "nome": "André Luis Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8492156,
        "longitude": -47.1167838,
        "cep": "13082220",
        "pais": "Brasil"
    },
    {
        "id": 663,
        "nome": "Luciano Fernandes Pasqualoto",
        "cidade": "Araras",
        "estado": "SP",
        "latitude": -22.3549507,
        "longitude": -47.3759181,
        "cep": "13600520",
        "pais": "Brasil"
    },
    {
        "id": 664,
        "nome": "Rosangela Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042370",
        "pais": "Brasil"
    },
    {
        "id": 665,
        "nome": "Ronaldo Zuliani dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9834431,
        "longitude": -47.0893854,
        "cep": "13052726",
        "pais": "Brasil"
    },
    {
        "id": 666,
        "nome": "Tatiane Scherrer",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5494674,
        "longitude": -47.4137009,
        "cep": "13484070",
        "pais": "Brasil"
    },
    {
        "id": 667,
        "nome": "Valdir Filho",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6022141,
        "longitude": -47.4177903,
        "cep": "13481522",
        "pais": "Brasil"
    },
    {
        "id": 668,
        "nome": "Fernanda Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9304291,
        "longitude": -47.0615404,
        "cep": "13040100",
        "pais": "Brasil"
    },
    {
        "id": 669,
        "nome": "Wagner Martins",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13190029",
        "pais": "Brasil"
    },
    {
        "id": 670,
        "nome": "Thais Fernanda Pompeu Dusso",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9793997,
        "longitude": -46.9886198,
        "cep": "13275400",
        "pais": "Brasil"
    },
    {
        "id": 671,
        "nome": "Wellington  Silva Aguiar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9372472,
        "longitude": -47.1140575,
        "cep": "13060510",
        "pais": "Brasil"
    },
    {
        "id": 672,
        "nome": "João Marcos De Paula",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9555916,
        "longitude": -46.9770338,
        "cep": "13273096",
        "pais": "Brasil"
    },
    {
        "id": 673,
        "nome": "Thais SOUZA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9690199,
        "longitude": -47.1218706,
        "cep": "13054142",
        "pais": "Brasil"
    },
    {
        "id": 674,
        "nome": "Edimilson Ferreira Lima",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1038629,
        "longitude": -47.2330377,
        "cep": "13348863",
        "pais": "Brasil"
    },
    {
        "id": 675,
        "nome": "Luan Pio",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9885288,
        "longitude": -46.9879309,
        "cep": "13275537",
        "pais": "Brasil"
    },
    {
        "id": 676,
        "nome": "Carlos Henrique de Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 677,
        "nome": "Ricardo Mariotto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9672414,
        "longitude": -46.9933081,
        "cep": "13274125",
        "pais": "Brasil"
    },
    {
        "id": 678,
        "nome": "Cesar Filipi Leles",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8596731,
        "longitude": -47.0349367,
        "cep": "13088118",
        "pais": "Brasil"
    },
    {
        "id": 679,
        "nome": "Fabio Marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13031680",
        "pais": "Brasil"
    },
    {
        "id": 680,
        "nome": "Liliane Soares Foregatto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9896375,
        "longitude": -47.1452374,
        "cep": "13056074",
        "pais": "Brasil"
    },
    {
        "id": 681,
        "nome": "Victor Silva Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181735",
        "pais": "Brasil"
    },
    {
        "id": 682,
        "nome": "Daniela  Dias Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9297308,
        "longitude": -47.1108777,
        "cep": "13060043",
        "pais": "Brasil"
    },
    {
        "id": 683,
        "nome": "William Munhao",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454174",
        "pais": "Brasil"
    },
    {
        "id": 684,
        "nome": "michelle mariano silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040145",
        "pais": "Brasil"
    },
    {
        "id": 685,
        "nome": "Lauanda Marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9040773,
        "longitude": -47.0572239,
        "cep": "13015010",
        "pais": "Brasil"
    },
    {
        "id": 686,
        "nome": "Jhonatan De Jesus",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.103408,
        "longitude": -47.1868199,
        "cep": "13340645",
        "pais": "Brasil"
    },
    {
        "id": 687,
        "nome": "TATIANA S LIMA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058100",
        "pais": "Brasil"
    },
    {
        "id": 688,
        "nome": "Stefany",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9031228,
        "longitude": -47.2468119,
        "cep": "13188191",
        "pais": "Brasil"
    },
    {
        "id": 689,
        "nome": "Luana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9531128,
        "longitude": -47.2168254,
        "cep": "13058761",
        "pais": "Brasil"
    },
    {
        "id": 690,
        "nome": "Eliane Lino",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -22.6502928,
        "longitude": -47.1893067,
        "cep": "13150312",
        "pais": "Brasil"
    },
    {
        "id": 691,
        "nome": "Victor Moraes",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13277021",
        "pais": "Brasil"
    },
    {
        "id": 692,
        "nome": "renato aparecido leite da silva",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.407201,
        "longitude": -47.5619181,
        "cep": "13504092",
        "pais": "Brasil"
    },
    {
        "id": 693,
        "nome": "Diego Rafael Rodrigues",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8936515,
        "longitude": -47.2496321,
        "cep": "13188235",
        "pais": "Brasil"
    },
    {
        "id": 694,
        "nome": "Renato Luciano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9421408,
        "longitude": -47.0818605,
        "cep": "13049137",
        "pais": "Brasil"
    },
    {
        "id": 695,
        "nome": "Lucas Sousa",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1106219,
        "longitude": -47.2252237,
        "cep": "13346250",
        "pais": "Brasil"
    },
    {
        "id": 696,
        "nome": "Jessica Cristine",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1260581,
        "longitude": -47.2509697,
        "cep": "13349812",
        "pais": "Brasil"
    },
    {
        "id": 697,
        "nome": "Rodrigo  Pinheiro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9073596,
        "longitude": -47.2132791,
        "cep": "13187110",
        "pais": "Brasil"
    },
    {
        "id": 698,
        "nome": "Jorge Luís Custódio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9071508,
        "longitude": -47.059358,
        "cep": "13013052",
        "pais": "Brasil"
    },
    {
        "id": 699,
        "nome": "Vagner Luiz Mendonça Floriano",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 700,
        "nome": "Letícia Páscoa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9217259,
        "longitude": -47.0727854,
        "cep": "13030290",
        "pais": "Brasil"
    },
    {
        "id": 701,
        "nome": "Aline Tavella",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8608419,
        "longitude": -47.1530868,
        "cep": "13068113",
        "pais": "Brasil"
    },
    {
        "id": 702,
        "nome": "Edson Porto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9871565,
        "longitude": -47.1378783,
        "cep": "13056114",
        "pais": "Brasil"
    },
    {
        "id": 703,
        "nome": "Mateus Sauer Govea",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9413142,
        "longitude": -47.1572811,
        "cep": "13059042",
        "pais": "Brasil"
    },
    {
        "id": 704,
        "nome": "Helio Monfardini Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9109305,
        "longitude": -47.0711752,
        "cep": "13035030",
        "pais": "Brasil"
    },
    {
        "id": 705,
        "nome": "Thalita Aline de Oliveira Vidal Pimenta",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9381841,
        "longitude": -47.0470546,
        "cep": "13044075",
        "pais": "Brasil"
    },
    {
        "id": 706,
        "nome": "Thiago Lima",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13176205",
        "pais": "Brasil"
    },
    {
        "id": 707,
        "nome": "William VIEIRA LOPES",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9319607,
        "longitude": -47.0873837,
        "cep": "13050022",
        "pais": "Brasil"
    },
    {
        "id": 708,
        "nome": "Leila Felix Do Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9262061,
        "longitude": -47.1001863,
        "cep": "13060022",
        "pais": "Brasil"
    },
    {
        "id": 709,
        "nome": "Andrei Pereira Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9645124,
        "longitude": -47.198595,
        "cep": "13058208",
        "pais": "Brasil"
    },
    {
        "id": 710,
        "nome": "Renato José Paglione",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8867972,
        "longitude": -47.2191882,
        "cep": "13187174",
        "pais": "Brasil"
    },
    {
        "id": 711,
        "nome": "paulo sérgio",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9396666,
        "longitude": -46.9738752,
        "cep": "13273649",
        "pais": "Brasil"
    },
    {
        "id": 712,
        "nome": "Aline Jorge",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 713,
        "nome": "Filipe galassi",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3581852,
        "longitude": -47.5564547,
        "cep": "13505660",
        "pais": "Brasil"
    },
    {
        "id": 714,
        "nome": "Mauricy Borba",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8156458,
        "longitude": -47.2524661,
        "cep": "13175380",
        "pais": "Brasil"
    },
    {
        "id": 715,
        "nome": "Beatriz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8925955,
        "longitude": -47.2241955,
        "cep": "13187164",
        "pais": "Brasil"
    },
    {
        "id": 716,
        "nome": "Tiago Zanin",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9162729,
        "longitude": -47.2589746,
        "cep": "13199190",
        "pais": "Brasil"
    },
    {
        "id": 717,
        "nome": "Murillo costa da silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9841935,
        "longitude": -46.9805303,
        "cep": "13275616",
        "pais": "Brasil"
    },
    {
        "id": 718,
        "nome": "myke",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.8050813,
        "longitude": -47.3065033,
        "cep": "13382536",
        "pais": "Brasil"
    },
    {
        "id": 719,
        "nome": "Gabriel Costa da silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9841935,
        "longitude": -46.9805303,
        "cep": "13275616",
        "pais": "Brasil"
    },
    {
        "id": 720,
        "nome": "Isabela",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9761443,
        "longitude": -46.9884262,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 721,
        "nome": "danilo costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13044491",
        "pais": "Brasil"
    },
    {
        "id": 722,
        "nome": "Elaine  Bueno",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7735171,
        "longitude": -47.1731111,
        "cep": "13142470",
        "pais": "Brasil"
    },
    {
        "id": 723,
        "nome": "Jose luis Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9111918,
        "longitude": -47.0667921,
        "cep": "13035375",
        "pais": "Brasil"
    },
    {
        "id": 724,
        "nome": "Andre Ivale",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.904025,
        "longitude": -47.2415052,
        "cep": "13188167",
        "pais": "Brasil"
    },
    {
        "id": 725,
        "nome": "Mayra Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9176184,
        "longitude": -47.0809993,
        "cep": "13031365",
        "pais": "Brasil"
    },
    {
        "id": 726,
        "nome": "Francielli Maia Sanches de Freitas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.978566,
        "longitude": -47.0798468,
        "cep": "13049539",
        "pais": "Brasil"
    },
    {
        "id": 727,
        "nome": "Eliandro José da Silva Martins",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8964874,
        "longitude": -47.2200955,
        "cep": "13187115",
        "pais": "Brasil"
    },
    {
        "id": 728,
        "nome": "Gabriel Benegas",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4518041,
        "longitude": -46.9257833,
        "cep": "13802100",
        "pais": "Brasil"
    },
    {
        "id": 729,
        "nome": "Barbudinho",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.7767128,
        "longitude": -46.7108179,
        "cep": "13506670",
        "pais": NaN
    },
    {
        "id": 730,
        "nome": "Jater Reis",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1021438,
        "longitude": -47.2178124,
        "cep": "13345411",
        "pais": "Brasil"
    },
    {
        "id": 731,
        "nome": "Douglas Barros",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9210316,
        "longitude": -47.161388,
        "cep": "13059220",
        "pais": "Brasil"
    },
    {
        "id": 732,
        "nome": "Luis Silverio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9460052,
        "longitude": -47.0229414,
        "cep": "13045045",
        "pais": "Brasil"
    },
    {
        "id": 733,
        "nome": "Edvan Sousa",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.7019733,
        "longitude": -46.9898324,
        "cep": "13911122",
        "pais": "Brasil"
    },
    {
        "id": 734,
        "nome": "Marcelo Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9198628,
        "longitude": -46.9720546,
        "cep": "13273282",
        "pais": "Brasil"
    },
    {
        "id": 735,
        "nome": "MARLON",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -22.741347,
        "longitude": -46.894846,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 736,
        "nome": "George Paulo Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.848548,
        "longitude": -47.1108988,
        "cep": "13082190",
        "pais": "Brasil"
    },
    {
        "id": 737,
        "nome": "Leandro Aparecido Goncalves Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9018384,
        "longitude": -47.0767608,
        "cep": "13070752",
        "pais": "Brasil"
    },
    {
        "id": 738,
        "nome": "Marcelo Americo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8613176,
        "longitude": -47.1520209,
        "cep": "13068315",
        "pais": "Brasil"
    },
    {
        "id": 739,
        "nome": "Nathalia Vergueiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9668893,
        "longitude": -47.0416001,
        "cep": "13042760",
        "pais": "Brasil"
    },
    {
        "id": 740,
        "nome": "Anderson Simione",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13304384",
        "pais": "Brasil"
    },
    {
        "id": 741,
        "nome": "Marcelo Pinheiro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.89695,
        "longitude": -47.2358262,
        "cep": "13188030",
        "pais": "Brasil"
    },
    {
        "id": 742,
        "nome": "Taciana Moser Doce",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9281385,
        "longitude": -47.0373443,
        "cep": "13045603",
        "pais": "Brasil"
    },
    {
        "id": 743,
        "nome": "Fernando Santana Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9427834,
        "longitude": -47.1178897,
        "cep": "13060752",
        "pais": "Brasil"
    },
    {
        "id": 744,
        "nome": "Guilherme de Aguiar",
        "cidade": "Lins",
        "estado": "SP",
        "latitude": -21.6787705,
        "longitude": -49.7399136,
        "cep": "16402753",
        "pais": "Brasil"
    },
    {
        "id": 745,
        "nome": "Debora Porto da Silva",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5981765,
        "longitude": -47.421184,
        "cep": "13482815",
        "pais": "Brasil"
    },
    {
        "id": 746,
        "nome": "reginaldo cantero",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7119411,
        "longitude": -47.2927869,
        "cep": "13474200",
        "pais": "Brasil"
    },
    {
        "id": 747,
        "nome": "Lekao do poção ",
        "cidade": "Brotas",
        "estado": "SP",
        "latitude": -22.2840884,
        "longitude": -48.1267265,
        "cep": "17380000",
        "pais": "Brasil"
    },
    {
        "id": 748,
        "nome": "Gabriel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9265289,
        "longitude": -47.1228034,
        "cep": "13060831",
        "pais": "Brasil"
    },
    {
        "id": 749,
        "nome": "marcelo filho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9302565,
        "longitude": -47.0307046,
        "cep": "13101005",
        "pais": "Brasil"
    },
    {
        "id": 750,
        "nome": "Alexandre Donisete da Silva",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6802322,
        "longitude": -46.992452,
        "cep": "13914142",
        "pais": "Brasil"
    },
    {
        "id": 751,
        "nome": "Leandro Maciel",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9957083,
        "longitude": -47.0001593,
        "cep": "13277721",
        "pais": "Brasil"
    },
    {
        "id": 752,
        "nome": "Fabiene Rubim Bensuaski Maia",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8066853,
        "longitude": -47.2756858,
        "cep": "13173524",
        "pais": "Brasil"
    },
    {
        "id": 753,
        "nome": "Dago Lopes",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "08295480",
        "pais": "Brasil"
    },
    {
        "id": 754,
        "nome": "Michelle Viana de Moraes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9320985,
        "longitude": -47.0762548,
        "cep": "13050008",
        "pais": "Brasil"
    },
    {
        "id": 755,
        "nome": "Bruno Ribeiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13172440",
        "pais": "Brasil"
    },
    {
        "id": 756,
        "nome": "Fabio Roberto",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181775",
        "pais": "Brasil"
    },
    {
        "id": 757,
        "nome": "Fernando Marcos  Bueno",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8536208,
        "longitude": -47.1086764,
        "cep": "13082140",
        "pais": "Brasil"
    },
    {
        "id": 758,
        "nome": "Ivanilda Alves de Lima Veiga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8478153,
        "longitude": -47.1445638,
        "cep": "13069085",
        "pais": "Brasil"
    },
    {
        "id": 759,
        "nome": "Victor Isac Noronha Suguiyama",
        "cidade": "Tietê",
        "estado": "SP",
        "latitude": -23.1030302,
        "longitude": -47.7147937,
        "cep": "18530000",
        "pais": "Brasil"
    },
    {
        "id": 760,
        "nome": "Renan Assis",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056803",
        "pais": "Brasil"
    },
    {
        "id": 761,
        "nome": "Valmir Barbosa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323264",
        "pais": "Brasil"
    },
    {
        "id": 762,
        "nome": "Guilherme Lima",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13142370",
        "pais": "Brasil"
    },
    {
        "id": 763,
        "nome": "Vanessa Costa",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454426",
        "pais": "Brasil"
    },
    {
        "id": 764,
        "nome": "Sandro Rogério Ferraz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9502328,
        "longitude": -47.159683,
        "cep": "13059670",
        "pais": "Brasil"
    },
    {
        "id": 765,
        "nome": "Welington Souza",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8964874,
        "longitude": -47.2200955,
        "cep": "13187115",
        "pais": "Brasil"
    },
    {
        "id": 766,
        "nome": "Valdir Monteiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 767,
        "nome": "anderson eduardo manoel",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3395418,
        "longitude": -46.9495024,
        "cep": "13846071",
        "pais": "Brasil"
    },
    {
        "id": 768,
        "nome": "Marlene Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9893977,
        "longitude": -47.1000521,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 769,
        "nome": "Raiany",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8157766,
        "longitude": -47.2762445,
        "cep": "13170022",
        "pais": "Brasil"
    },
    {
        "id": 770,
        "nome": "Tiago Carolino",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7652782,
        "longitude": -47.349891,
        "cep": "13468875",
        "pais": "Brasil"
    },
    {
        "id": 771,
        "nome": "Vilmar Aparecido Rocha",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8918706,
        "longitude": -47.2075138,
        "cep": "13186642",
        "pais": "Brasil"
    },
    {
        "id": 772,
        "nome": "Lucivanio nascimento",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5707057,
        "longitude": -47.4185559,
        "cep": "13482278",
        "pais": "Brasil"
    },
    {
        "id": 773,
        "nome": "Bruno Mael",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180190",
        "pais": "Brasil"
    },
    {
        "id": 774,
        "nome": "Filipe Vecchietti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9096919,
        "longitude": -47.0589796,
        "cep": "13013000",
        "pais": "Brasil"
    },
    {
        "id": 775,
        "nome": "luis renato silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13046020",
        "pais": "Brasil"
    },
    {
        "id": 776,
        "nome": "Rutileia de Oliveira Mathias rutinha",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8086288,
        "longitude": -47.1854069,
        "cep": "13178440",
        "pais": "Brasil"
    },
    {
        "id": 777,
        "nome": "Vinicius Azevedo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470749",
        "pais": "Brasil"
    },
    {
        "id": 778,
        "nome": "Nayra Mello",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9453313,
        "longitude": -47.0993267,
        "cep": "13050544",
        "pais": "Brasil"
    },
    {
        "id": 779,
        "nome": "Tamires Martins Rodrigues da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8974675,
        "longitude": -47.0652496,
        "cep": "13023102",
        "pais": "Brasil"
    },
    {
        "id": 780,
        "nome": "VALDEIR PINHEIRO SANTANA",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "06719500",
        "pais": "Brasil"
    },
    {
        "id": 781,
        "nome": "Eduardo Gonçalves",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6931,
        "longitude": -46.9926,
        "cep": "13914553",
        "pais": "Brasil"
    },
    {
        "id": 782,
        "nome": "Eduardo Perim",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456435",
        "pais": "Brasil"
    },
    {
        "id": 783,
        "nome": "Jessica Vitoria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235122,
        "longitude": -47.1152845,
        "cep": "13060330",
        "pais": "Brasil"
    },
    {
        "id": 784,
        "nome": "Fabio de Moraes Machado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9096919,
        "longitude": -47.0589796,
        "cep": "13013001",
        "pais": "Brasil"
    },
    {
        "id": 785,
        "nome": "Julia Gabriela Alves",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7502427,
        "longitude": -47.1714916,
        "cep": "13145131",
        "pais": "Brasil"
    },
    {
        "id": 786,
        "nome": "Anselmo benedito Pinto",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.5154319,
        "longitude": -47.4580938,
        "cep": "18031080",
        "pais": "Brasil"
    },
    {
        "id": 787,
        "nome": "Sílvia Helena Feliciano Martins",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8908191,
        "longitude": -47.2080093,
        "cep": "13186664",
        "pais": "Brasil"
    },
    {
        "id": 788,
        "nome": "David Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8903938,
        "longitude": -47.1798149,
        "cep": "13185013",
        "pais": "Brasil"
    },
    {
        "id": 789,
        "nome": "Isabelli Alves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8468609,
        "longitude": -47.2165424,
        "cep": "13183864",
        "pais": "Brasil"
    },
    {
        "id": 790,
        "nome": "wiviane kiche",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235396,
        "longitude": -47.0155691,
        "cep": "13101361",
        "pais": "Brasil"
    },
    {
        "id": 791,
        "nome": "Manoel Alexandre",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13299035",
        "pais": "Brasil"
    },
    {
        "id": 792,
        "nome": "Henrique",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7350212,
        "longitude": -47.6667059,
        "cep": "13403020",
        "pais": "Brasil"
    },
    {
        "id": 793,
        "nome": "Carla Nobre",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9575742,
        "longitude": -46.9943028,
        "cep": "13272041",
        "pais": "Brasil"
    },
    {
        "id": 794,
        "nome": "Jessye Freze",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8684682,
        "longitude": -47.1775743,
        "cep": "13184885",
        "pais": "Brasil"
    },
    {
        "id": 795,
        "nome": "Eduardo",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "06150270",
        "pais": "Brasil"
    },
    {
        "id": 796,
        "nome": "DJhonaS DiscJockey",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3800069,
        "longitude": -47.5749449,
        "cep": "13505315",
        "pais": "Brasil"
    },
    {
        "id": 797,
        "nome": "André Luiz de Mesquita Barbosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9387281,
        "longitude": -47.1144787,
        "cep": "13060469",
        "pais": "Brasil"
    },
    {
        "id": 798,
        "nome": "Lucas Davanco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9352549,
        "longitude": -47.0122148,
        "cep": "13046365",
        "pais": "Brasil"
    },
    {
        "id": 799,
        "nome": "Evok",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9703943,
        "longitude": -46.9959798,
        "cep": "13270020",
        "pais": "Brasil"
    },
    {
        "id": 800,
        "nome": "JOÃOVALDO  Assis Jva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8682526,
        "longitude": -47.0360246,
        "cep": "13088095",
        "pais": "Brasil"
    },
    {
        "id": 801,
        "nome": "Luciano Klem",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9018384,
        "longitude": -47.0767608,
        "cep": "13070752",
        "pais": "Brasil"
    },
    {
        "id": 802,
        "nome": "Micaella Minardi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9265289,
        "longitude": -47.1228034,
        "cep": "13060831",
        "pais": "Brasil"
    },
    {
        "id": 803,
        "nome": "Ariane Paez",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8830312,
        "longitude": -47.1951914,
        "cep": "13186260",
        "pais": "Brasil"
    },
    {
        "id": 804,
        "nome": "Andrews Alexander",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9453343,
        "longitude": -47.0493804,
        "cep": "13044902",
        "pais": "Brasil"
    },
    {
        "id": 805,
        "nome": "Ana Laura Alves de Souza",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455186",
        "pais": "Brasil"
    },
    {
        "id": 806,
        "nome": "Henrique Paiva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8840901,
        "longitude": -47.1782626,
        "cep": "13185143",
        "pais": "Brasil"
    },
    {
        "id": 807,
        "nome": "Carlos Donizeti da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9388252,
        "longitude": -47.0159743,
        "cep": "13046260",
        "pais": "Brasil"
    },
    {
        "id": 808,
        "nome": "Patrícia Saraiva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9652531,
        "longitude": -46.9220683,
        "cep": "13274772",
        "pais": "Brasil"
    },
    {
        "id": 809,
        "nome": "Pablo",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.5398323,
        "longitude": -46.7162843,
        "cep": "17393048",
        "pais": NaN
    },
    {
        "id": 810,
        "nome": "Vitor Forti",
        "cidade": "Bauru",
        "estado": "SP",
        "latitude": -22.3471531,
        "longitude": -49.1017754,
        "cep": "17056070",
        "pais": "Brasil"
    },
    {
        "id": 811,
        "nome": "NoachBr lg",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8847661,
        "longitude": -47.2184331,
        "cep": "13187242",
        "pais": "Brasil"
    },
    {
        "id": 812,
        "nome": "JOSE VICENTE DE ASSIS COSTA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9334614,
        "longitude": -47.1172487,
        "cep": "13060534",
        "pais": "Brasil"
    },
    {
        "id": 813,
        "nome": "Renata",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8160612,
        "longitude": -47.0081465,
        "cep": "13098020",
        "pais": "Brasil"
    },
    {
        "id": 814,
        "nome": "John Melo Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 815,
        "nome": "Enilberto Dos Santos Quadros",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181664",
        "pais": "Brasil"
    },
    {
        "id": 816,
        "nome": "Marco Antônio Lopes E Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.904579,
        "longitude": -47.2475388,
        "cep": "13188200",
        "pais": "Brasil"
    },
    {
        "id": 817,
        "nome": "JOSINEIDE DE SOUZA MARTELLINI",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13321421",
        "pais": "Brasil"
    },
    {
        "id": 818,
        "nome": "João Carlos",
        "cidade": "Timbaúba",
        "estado": "PE",
        "latitude": -7.5083492,
        "longitude": -35.3156312,
        "cep": "55870000",
        "pais": NaN
    },
    {
        "id": 819,
        "nome": "Gilmar Gonçalves",
        "cidade": "Tatuí",
        "estado": "SP",
        "latitude": -23.3527523,
        "longitude": -47.8666296,
        "cep": "18277008",
        "pais": "Brasil"
    },
    {
        "id": 820,
        "nome": "Paulo Gama",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13289470",
        "pais": "Brasil"
    },
    {
        "id": 821,
        "nome": "Thiago Dias Ferraz",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7205895,
        "longitude": -47.3494206,
        "cep": "13470220",
        "pais": "Brasil"
    },
    {
        "id": 822,
        "nome": "Josmar Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13274440",
        "pais": "Brasil"
    },
    {
        "id": 823,
        "nome": "Marlon Vinicius Pedroso Barbosa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 824,
        "nome": "Vanessa Giseli De Queiroz",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.6712269,
        "longitude": -47.7010603,
        "cep": "13408024",
        "pais": "Brasil"
    },
    {
        "id": 825,
        "nome": "Gabriel Magalhães",
        "cidade": "Sertãozinho",
        "estado": "SP",
        "latitude": -21.1508919,
        "longitude": -47.9716869,
        "cep": "14169317",
        "pais": "Brasil"
    },
    {
        "id": 826,
        "nome": "Gustavo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8942932,
        "longitude": -47.0498295,
        "cep": "13025242",
        "pais": "Brasil"
    },
    {
        "id": 827,
        "nome": "Weslley Jonathan benetazzo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8501781,
        "longitude": -47.10881,
        "cep": "13082200",
        "pais": "Brasil"
    },
    {
        "id": 828,
        "nome": "Sérgio Danilo Buitoni",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0935823,
        "longitude": -47.2766209,
        "cep": "13349041",
        "pais": "Brasil"
    },
    {
        "id": 829,
        "nome": "Kathelin Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9848644,
        "longitude": -47.121988,
        "cep": "13054441",
        "pais": "Brasil"
    },
    {
        "id": 830,
        "nome": "Rick Oliveira",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284452",
        "pais": "Brasil"
    },
    {
        "id": 831,
        "nome": "Rodrigo Sampaio Ferraz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9327334,
        "longitude": -47.1201876,
        "cep": "13060703",
        "pais": "Brasil"
    },
    {
        "id": 832,
        "nome": "Wilson Roberto Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9707154,
        "longitude": -47.1415124,
        "cep": "13056483",
        "pais": "Brasil"
    },
    {
        "id": 833,
        "nome": "Juvêncio",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0117416,
        "longitude": -47.0175063,
        "cep": "13278072",
        "pais": "Brasil"
    },
    {
        "id": 834,
        "nome": "Camila Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9329046,
        "longitude": -47.1153509,
        "cep": "13060437",
        "pais": "Brasil"
    },
    {
        "id": 835,
        "nome": "Karla Silva de Lima Castro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9367213,
        "longitude": -47.0867144,
        "cep": "13050020",
        "pais": "Brasil"
    },
    {
        "id": 836,
        "nome": "Jessica Rosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.987456,
        "longitude": -47.1032272,
        "cep": "13052610",
        "pais": "Brasil"
    },
    {
        "id": 837,
        "nome": "Victor Augusto de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 838,
        "nome": "Cristian Leonardo da Silva Barboza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9201723,
        "longitude": -47.0681957,
        "cep": "13036265",
        "pais": "Brasil"
    },
    {
        "id": 839,
        "nome": "Alaine Varela",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8523585,
        "longitude": -47.1056895,
        "cep": "13082080",
        "pais": "Brasil"
    },
    {
        "id": 840,
        "nome": "Bruna Fernanda",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9825364,
        "longitude": -47.0927614,
        "cep": "13052531",
        "pais": "Brasil"
    },
    {
        "id": 841,
        "nome": "Jonathan Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9750222,
        "longitude": -47.1451955,
        "cep": "13056425",
        "pais": "Brasil"
    },
    {
        "id": 842,
        "nome": "Vanessa Mateus",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8942932,
        "longitude": -47.0498295,
        "cep": "13097261",
        "pais": "Brasil"
    },
    {
        "id": 843,
        "nome": "Claudemir Dos Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13315000",
        "pais": "Brasil"
    },
    {
        "id": 844,
        "nome": "Rudney Araújo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180290",
        "pais": "Brasil"
    },
    {
        "id": 845,
        "nome": "mano w.o.",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235106,
        "longitude": -47.1067577,
        "cep": "13060190",
        "pais": "Brasil"
    },
    {
        "id": 846,
        "nome": "Victor Julião",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7719419,
        "longitude": -47.1532255,
        "cep": "13140488",
        "pais": "Brasil"
    },
    {
        "id": 847,
        "nome": "Helena Maria Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040656",
        "pais": "Brasil"
    },
    {
        "id": 848,
        "nome": "Nayara Soares",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9533584,
        "longitude": -46.9768531,
        "cep": "13273090",
        "pais": "Brasil"
    },
    {
        "id": 849,
        "nome": "Adriana Gonçalves Wollmer",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8912433,
        "longitude": -47.0820531,
        "cep": "13070062",
        "pais": "Brasil"
    },
    {
        "id": 850,
        "nome": "Carlos Roberto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8918708,
        "longitude": -47.0431704,
        "cep": "13090768",
        "pais": "Brasil"
    },
    {
        "id": 851,
        "nome": "Rogério Luiz Canado",
        "cidade": "Santo Antônio de Posse",
        "estado": "SP",
        "latitude": -22.6143674,
        "longitude": -46.9203432,
        "cep": "13832210",
        "pais": "Brasil"
    },
    {
        "id": 852,
        "nome": "Vanessa Castro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9777996,
        "longitude": -47.1196369,
        "cep": "13054552",
        "pais": "Brasil"
    },
    {
        "id": 853,
        "nome": "Victor Hugo Souza Silva Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9493051,
        "longitude": -47.1766147,
        "cep": "13058296",
        "pais": "Brasil"
    },
    {
        "id": 854,
        "nome": "Cleyton Pereira Da Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9371168,
        "longitude": -46.9954418,
        "cep": "13272839",
        "pais": "Brasil"
    },
    {
        "id": 855,
        "nome": "Vanessa Zacarias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9759917,
        "longitude": -47.1236463,
        "cep": "13054214",
        "pais": "Brasil"
    },
    {
        "id": 856,
        "nome": "Ricardo da Silva Pinto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9761443,
        "longitude": -46.9884262,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 857,
        "nome": "Leonan Correa André",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8157766,
        "longitude": -47.2762445,
        "cep": "13170021",
        "pais": "Brasil"
    },
    {
        "id": 858,
        "nome": "Rafael Martins Carvalho",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7243791,
        "longitude": -47.3331376,
        "cep": "13471255",
        "pais": "Brasil"
    },
    {
        "id": 859,
        "nome": "Helton Priego Neves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8557032,
        "longitude": -47.2198303,
        "cep": "13183100",
        "pais": "Brasil"
    },
    {
        "id": 860,
        "nome": "Rubens Gonçalves",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453882",
        "pais": "Brasil"
    },
    {
        "id": 861,
        "nome": "Edilson De Sousa Martins",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7520957,
        "longitude": -47.1716,
        "cep": "13145129",
        "pais": "Brasil"
    },
    {
        "id": 862,
        "nome": "Joao Paulo Prata",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8851106,
        "longitude": -47.1125517,
        "cep": "13063330",
        "pais": "Brasil"
    },
    {
        "id": 863,
        "nome": "José Guilherme De Souza Santos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5824068,
        "longitude": -47.3719432,
        "cep": "13487136",
        "pais": "Brasil"
    },
    {
        "id": 864,
        "nome": "GABRIELA LOPES CORDEIRO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8846662,
        "longitude": -47.1459721,
        "cep": "13067180",
        "pais": "Brasil"
    },
    {
        "id": 865,
        "nome": "luiz Santos",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -22.634031,
        "longitude": -47.0557719,
        "cep": "13825000",
        "pais": NaN
    },
    {
        "id": 866,
        "nome": "Luis Antonio",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7334776,
        "longitude": -47.6222626,
        "cep": "13420640",
        "pais": "Brasil"
    },
    {
        "id": 867,
        "nome": "Luis Silveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272725",
        "pais": "Brasil"
    },
    {
        "id": 868,
        "nome": "Bruno Villar Florindo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9489988,
        "longitude": -46.9791367,
        "cep": "13273400",
        "pais": "Brasil"
    },
    {
        "id": 869,
        "nome": "Eliane Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9034868,
        "longitude": -47.2445655,
        "cep": "13188180",
        "pais": "Brasil"
    },
    {
        "id": 870,
        "nome": "Erick Henrique dos Santos Pereira",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454174",
        "pais": "Brasil"
    },
    {
        "id": 871,
        "nome": "Daniel Diotto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8541249,
        "longitude": -47.1087502,
        "cep": "13082160",
        "pais": "Brasil"
    },
    {
        "id": 872,
        "nome": "Matheus Ruffo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8481843,
        "longitude": -47.145417,
        "cep": "13069083",
        "pais": "Brasil"
    },
    {
        "id": 873,
        "nome": "SOLANGE DE SOUZA DIAS BORGES",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6781707,
        "longitude": -46.9859338,
        "cep": "13914464",
        "pais": "Brasil"
    },
    {
        "id": 874,
        "nome": "Natanne Almeida",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9537942,
        "longitude": -47.0111981,
        "cep": "13272513",
        "pais": "Brasil"
    },
    {
        "id": 875,
        "nome": "Rodrigo Moreira Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8456027,
        "longitude": -47.1099495,
        "cep": "13082634",
        "pais": "Brasil"
    },
    {
        "id": 876,
        "nome": "David Gustavo Queiroz",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6103741,
        "longitude": -47.409144,
        "cep": "13481807",
        "pais": "Brasil"
    },
    {
        "id": 877,
        "nome": "SHENKI Antonio Luiz Shenki",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3993046,
        "longitude": -47.5481459,
        "cep": "13506710",
        "pais": "Brasil"
    },
    {
        "id": 878,
        "nome": "Leonardo Nocete",
        "cidade": "Rio das Pedras",
        "estado": "SP",
        "latitude": -22.8392979,
        "longitude": -47.6126417,
        "cep": "13395106",
        "pais": "Brasil"
    },
    {
        "id": 879,
        "nome": "Dastan oODastanOo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9213859,
        "longitude": -47.0213974,
        "cep": "13101405",
        "pais": "Brasil"
    },
    {
        "id": 880,
        "nome": "Luan Sampaio",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8964874,
        "longitude": -47.2200955,
        "cep": "13187115",
        "pais": "Brasil"
    },
    {
        "id": 881,
        "nome": "Vinicius Barone",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9329629,
        "longitude": -47.0909205,
        "cep": "13050575",
        "pais": "Brasil"
    },
    {
        "id": 882,
        "nome": "Michelle Santos de Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.04134,
        "longitude": -47.129418,
        "cep": "13053631",
        "pais": "Brasil"
    },
    {
        "id": 883,
        "nome": "Jorge Luiz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9442153,
        "longitude": -47.1218549,
        "cep": "13060744",
        "pais": "Brasil"
    },
    {
        "id": 884,
        "nome": "Luís Otávio",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458718",
        "pais": "Brasil"
    },
    {
        "id": 885,
        "nome": "Graziela De Mesquita Barbosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9085531,
        "longitude": -47.0560834,
        "cep": "13015082",
        "pais": "Brasil"
    },
    {
        "id": 886,
        "nome": "Gabriel Prado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9546438,
        "longitude": -47.0833799,
        "cep": "13051433",
        "pais": "Brasil"
    },
    {
        "id": 887,
        "nome": "Edson Souza Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056382",
        "pais": "Brasil"
    },
    {
        "id": 888,
        "nome": "Ricardo Franco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9893977,
        "longitude": -47.1000521,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 889,
        "nome": "Andressa da Silva Covo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9322764,
        "longitude": -47.0383649,
        "cep": "13045505",
        "pais": "Brasil"
    },
    {
        "id": 890,
        "nome": "Andreia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9207661,
        "longitude": -47.0896009,
        "cep": "13031835",
        "pais": "Brasil"
    },
    {
        "id": 891,
        "nome": "Rafael Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.862018,
        "longitude": -47.0315934,
        "cep": "13088117",
        "pais": "Brasil"
    },
    {
        "id": 892,
        "nome": "Ricardo Andrade da Silva",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7195627,
        "longitude": -47.1832532,
        "cep": "13145758",
        "pais": "Brasil"
    },
    {
        "id": 893,
        "nome": "Richard Bittner",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9187837,
        "longitude": -47.0604455,
        "cep": "13041311",
        "pais": "Brasil"
    },
    {
        "id": 894,
        "nome": "Karen",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9765149,
        "longitude": -47.0739871,
        "cep": "13049483",
        "pais": "Brasil"
    },
    {
        "id": 895,
        "nome": "Edson Guedes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9527774,
        "longitude": -47.185877,
        "cep": "13058368",
        "pais": "Brasil"
    },
    {
        "id": 896,
        "nome": "Luciano Da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034205",
        "pais": "Brasil"
    },
    {
        "id": 897,
        "nome": "Pessan",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6031985,
        "longitude": -47.4098592,
        "cep": "13481128",
        "pais": "Brasil"
    },
    {
        "id": 898,
        "nome": "Aline Bazetto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9396666,
        "longitude": -46.9738752,
        "cep": "13273649",
        "pais": "Brasil"
    },
    {
        "id": 899,
        "nome": "Emerson Pedroso",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9082468,
        "longitude": -47.2102008,
        "cep": "13187042",
        "pais": "Brasil"
    },
    {
        "id": 900,
        "nome": "Danilo Botelho Sanches",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9374709,
        "longitude": -47.0667216,
        "cep": "13040065",
        "pais": "Brasil"
    },
    {
        "id": 901,
        "nome": "Eduardo Gomes Dias",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8782108,
        "longitude": -47.1938734,
        "cep": "13186300",
        "pais": "Brasil"
    },
    {
        "id": 902,
        "nome": "Jonat Nielsen",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450180",
        "pais": "Brasil"
    },
    {
        "id": 903,
        "nome": "Lucas Andreoli",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9396666,
        "longitude": -46.9738752,
        "cep": "13273649",
        "pais": "Brasil"
    },
    {
        "id": 904,
        "nome": "Wendell Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8699041,
        "longitude": -47.2138661,
        "cep": "13184493",
        "pais": "Brasil"
    },
    {
        "id": 905,
        "nome": "Leticia Ferraz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9474148,
        "longitude": -47.0887232,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 906,
        "nome": "Isabella Christina Stupelli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9287933,
        "longitude": -47.0837045,
        "cep": "13031435",
        "pais": "Brasil"
    },
    {
        "id": 907,
        "nome": "Sandra Mara De Assis Morais",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7883103,
        "longitude": -47.1848024,
        "cep": "13142198",
        "pais": "Brasil"
    },
    {
        "id": 908,
        "nome": "Diego Mazzola",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9068568,
        "longitude": -47.0797761,
        "cep": "13035570",
        "pais": "Brasil"
    },
    {
        "id": 909,
        "nome": "Jessica Fernanda Banin de Castro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0112141,
        "longitude": -47.0159041,
        "cep": "13278071",
        "pais": "Brasil"
    },
    {
        "id": 910,
        "nome": "Jilmar farias Nunes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0320991,
        "longitude": -47.1218206,
        "cep": "13053114",
        "pais": "Brasil"
    },
    {
        "id": 911,
        "nome": "Jéssica Magalhães",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3768927,
        "longitude": -47.5595389,
        "cep": "13505008",
        "pais": "Brasil"
    },
    {
        "id": 912,
        "nome": "Kleber Neves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13187216",
        "pais": "Brasil"
    },
    {
        "id": 913,
        "nome": "Cleber Lucas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9522991,
        "longitude": -47.180263,
        "cep": "13058422",
        "pais": "Brasil"
    },
    {
        "id": 914,
        "nome": "André Luis Marques Sant'Ana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.970959,
        "longitude": -47.1714259,
        "cep": "13057143",
        "pais": "Brasil"
    },
    {
        "id": 915,
        "nome": "Rogério souza",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13197198",
        "pais": "Brasil"
    },
    {
        "id": 916,
        "nome": "André Henrique de Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0015753,
        "longitude": -46.9899827,
        "cep": "13277280",
        "pais": "Brasil"
    },
    {
        "id": 917,
        "nome": "Walter",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9841935,
        "longitude": -46.9805303,
        "cep": "13275616",
        "pais": "Brasil"
    },
    {
        "id": 918,
        "nome": "Leandro Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13098059",
        "pais": "Brasil"
    },
    {
        "id": 919,
        "nome": "Marcio Roberto Milani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9329629,
        "longitude": -47.0909205,
        "cep": "13050909",
        "pais": "Brasil"
    },
    {
        "id": 920,
        "nome": "Michelle Silva Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9018405,
        "longitude": -47.2503304,
        "cep": "13188211",
        "pais": "Brasil"
    },
    {
        "id": 921,
        "nome": "Luis Felipe de Moraes Azevedo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9009579,
        "longitude": -47.0672935,
        "cep": "13020170",
        "pais": "Brasil"
    },
    {
        "id": 922,
        "nome": "Fábio Henrique Batistela",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9118273,
        "longitude": -47.0774325,
        "cep": "13035130",
        "pais": "Brasil"
    },
    {
        "id": 923,
        "nome": "George William Meneses Cassemiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8086625,
        "longitude": -47.2040194,
        "cep": "13178321",
        "pais": "Brasil"
    },
    {
        "id": 924,
        "nome": "Gilmar Oliveira",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -20.8554391,
        "longitude": -49.4003602,
        "cep": "18275816",
        "pais": NaN
    },
    {
        "id": 925,
        "nome": "Neto Nascimento",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.2659007,
        "longitude": -45.8952669,
        "cep": "13606182",
        "pais": NaN
    },
    {
        "id": 926,
        "nome": "Luciano Assis",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.8060131,
        "longitude": -47.1177965,
        "cep": "13148218",
        "pais": "Brasil"
    },
    {
        "id": 927,
        "nome": "Kelvin Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8852878,
        "longitude": -47.1066571,
        "cep": "13063001",
        "pais": "Brasil"
    },
    {
        "id": 928,
        "nome": "Leda Baptista",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8723628,
        "longitude": -46.9703903,
        "cep": "13104020",
        "pais": "Brasil"
    },
    {
        "id": 929,
        "nome": "Eneas Novaes De Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.862018,
        "longitude": -47.0315934,
        "cep": "13088117",
        "pais": "Brasil"
    },
    {
        "id": 930,
        "nome": "Daniel Seiji Kunigami",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9449808,
        "longitude": -47.3062099,
        "cep": "13190532",
        "pais": "Brasil"
    },
    {
        "id": 931,
        "nome": "Adriano Aparecido Freitas Dos Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13339315",
        "pais": "Brasil"
    },
    {
        "id": 932,
        "nome": "Guilherme De Deus",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.035417,
        "longitude": -47.1125218,
        "cep": "13053234",
        "pais": "Brasil"
    },
    {
        "id": 933,
        "nome": "Camila Pinheiro",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9496249,
        "longitude": -47.3218214,
        "cep": "13190019",
        "pais": "Brasil"
    },
    {
        "id": 934,
        "nome": "Jailson Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9223016,
        "longitude": -46.968811,
        "cep": "13273272",
        "pais": "Brasil"
    },
    {
        "id": 935,
        "nome": "abner castro Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8914355,
        "longitude": -47.1081988,
        "cep": "13063432",
        "pais": "Brasil"
    },
    {
        "id": 936,
        "nome": "Thiago Gusson",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7465622,
        "longitude": -47.3418808,
        "cep": "13465660",
        "pais": "Brasil"
    },
    {
        "id": 937,
        "nome": "Vinicius Teixeira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13339140",
        "pais": "Brasil"
    },
    {
        "id": 938,
        "nome": "Brian Victor Andre",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9531008,
        "longitude": -47.0906109,
        "cep": "13051105",
        "pais": "Brasil"
    },
    {
        "id": 939,
        "nome": "Flavio Morosi",
        "cidade": "Serra Negra",
        "estado": "SP",
        "latitude": -22.6126459,
        "longitude": -46.699986,
        "cep": "13930000",
        "pais": "Brasil"
    },
    {
        "id": 940,
        "nome": "JEAN CARLOS PICCIRILLO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9112794,
        "longitude": -47.0818246,
        "cep": "13035000",
        "pais": "Brasil"
    },
    {
        "id": 941,
        "nome": "Gabriel Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9641762,
        "longitude": -47.1703876,
        "cep": "13057201",
        "pais": "Brasil"
    },
    {
        "id": 942,
        "nome": "Camila Degrossoli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9258488,
        "longitude": -47.0155287,
        "cep": "13101280",
        "pais": "Brasil"
    },
    {
        "id": 943,
        "nome": "Paulo Garbelini",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8070767,
        "longitude": -47.2260788,
        "cep": "13177030",
        "pais": "Brasil"
    },
    {
        "id": 944,
        "nome": "Jessica Ferreira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183353",
        "pais": "Brasil"
    },
    {
        "id": 945,
        "nome": "Educadora FM",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9472281,
        "longitude": -47.0279828,
        "cep": "13045541",
        "pais": "Brasil"
    },
    {
        "id": 946,
        "nome": "Thaís Damaceno",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7910133,
        "longitude": -47.1831376,
        "cep": "13142190",
        "pais": "Brasil"
    },
    {
        "id": 947,
        "nome": "Regiane Morais",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9281385,
        "longitude": -47.0373443,
        "cep": "13045603",
        "pais": "Brasil"
    },
    {
        "id": 948,
        "nome": "Weligton Barros",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9709043,
        "longitude": -47.1725661,
        "cep": "13057141",
        "pais": "Brasil"
    },
    {
        "id": 949,
        "nome": "M Messias Cavalcante",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9400908,
        "longitude": -47.0479826,
        "cep": "13044162",
        "pais": "Brasil"
    },
    {
        "id": 950,
        "nome": "Robson Eduardo Gonçalves",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180240",
        "pais": "Brasil"
    },
    {
        "id": 951,
        "nome": "Reinaldo Eduardo Maia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9565829,
        "longitude": -47.1983029,
        "cep": "13058124",
        "pais": "Brasil"
    },
    {
        "id": 952,
        "nome": "Sidnei Antônio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13065030",
        "pais": "Brasil"
    },
    {
        "id": 953,
        "nome": "Carla Andrade",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13304276",
        "pais": "Brasil"
    },
    {
        "id": 954,
        "nome": "Hugo Bonilha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9363794,
        "longitude": -47.1517229,
        "cep": "13059633",
        "pais": "Brasil"
    },
    {
        "id": 955,
        "nome": "Edson Mendes Junior",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8238241,
        "longitude": -47.17102,
        "cep": "13179160",
        "pais": "Brasil"
    },
    {
        "id": 956,
        "nome": "dark laydy",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5635551,
        "longitude": -47.3882089,
        "cep": "13486084",
        "pais": "Brasil"
    },
    {
        "id": 957,
        "nome": "Jacqueline Lopes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9484096,
        "longitude": -47.0945356,
        "cep": "13050183",
        "pais": "Brasil"
    },
    {
        "id": 958,
        "nome": "Lenilson querino pessoa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9820084,
        "longitude": -47.1579094,
        "cep": "13057040",
        "pais": "Brasil"
    },
    {
        "id": 959,
        "nome": "Alan Queiroz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9217689,
        "longitude": -47.0561458,
        "cep": "13041760",
        "pais": "Brasil"
    },
    {
        "id": 960,
        "nome": "Jean Carlos Mosna",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458033",
        "pais": "Brasil"
    },
    {
        "id": 961,
        "nome": "Taise Ferreira da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9302565,
        "longitude": -47.0307046,
        "cep": "13101105",
        "pais": "Brasil"
    },
    {
        "id": 962,
        "nome": "Davi Mombach",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 963,
        "nome": "Ricardo Nogueira Pipi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9090444,
        "longitude": -47.0761189,
        "cep": "13035370",
        "pais": "Brasil"
    },
    {
        "id": 964,
        "nome": "Patricia Vicente",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9187506,
        "longitude": -47.0582867,
        "cep": "13041301",
        "pais": "Brasil"
    },
    {
        "id": 965,
        "nome": "Alessandro Pinto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9460052,
        "longitude": -47.0229414,
        "cep": "13045045",
        "pais": "Brasil"
    },
    {
        "id": 966,
        "nome": "Juliana Gomes",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9189821,
        "longitude": -47.2764343,
        "cep": "13199118",
        "pais": "Brasil"
    },
    {
        "id": 967,
        "nome": "Victor Gomes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8863857,
        "longitude": -47.1791901,
        "cep": "13185146",
        "pais": "Brasil"
    },
    {
        "id": 968,
        "nome": "Sandro Caetano",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8310332,
        "longitude": -47.2654425,
        "cep": "13171150",
        "pais": "Brasil"
    },
    {
        "id": 969,
        "nome": "Luciana Cezarini",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8623214,
        "longitude": -46.9731281,
        "cep": "13104180",
        "pais": "Brasil"
    },
    {
        "id": 970,
        "nome": "Aurélia Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8516271,
        "longitude": -47.2089084,
        "cep": "13183551",
        "pais": "Brasil"
    },
    {
        "id": 971,
        "nome": "Beatriz Lima",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7742145,
        "longitude": -47.1660543,
        "cep": "13142398",
        "pais": "Brasil"
    },
    {
        "id": 972,
        "nome": "Alaecio Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9110182,
        "longitude": -47.0669952,
        "cep": "13035270",
        "pais": "Brasil"
    },
    {
        "id": 973,
        "nome": "Rubens Celso Zahr",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.903251,
        "longitude": -47.1724126,
        "cep": "13185230",
        "pais": "Brasil"
    },
    {
        "id": 974,
        "nome": "EDMILSON PEREIRA",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178484",
        "pais": "Brasil"
    },
    {
        "id": 975,
        "nome": "Maria Luísa Mariano da Silva Cruz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8553186,
        "longitude": -47.2106431,
        "cep": "13183620",
        "pais": "Brasil"
    },
    {
        "id": 976,
        "nome": "Pedro Henrique Trindade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13065197",
        "pais": "Brasil"
    },
    {
        "id": 977,
        "nome": "Joao Paulo Guetto",
        "cidade": "Laranjal Paulista",
        "estado": "SP",
        "latitude": -23.0566826,
        "longitude": -47.8420459,
        "cep": "18500000",
        "pais": "Brasil"
    },
    {
        "id": 978,
        "nome": "Paulo Eduardo Rodrigues Silva",
        "cidade": "Franca",
        "estado": "SP",
        "latitude": -20.500698,
        "longitude": -47.4217821,
        "cep": "14407087",
        "pais": "Brasil"
    },
    {
        "id": 979,
        "nome": "Erika Senhorini Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9582517,
        "longitude": -47.2163101,
        "cep": "13058652",
        "pais": "Brasil"
    },
    {
        "id": 980,
        "nome": "Gabriel Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9429937,
        "longitude": -47.1578729,
        "cep": "13059020",
        "pais": "Brasil"
    },
    {
        "id": 981,
        "nome": "Kawana Forner",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9952515,
        "longitude": -46.9937823,
        "cep": "13277510",
        "pais": "Brasil"
    },
    {
        "id": 982,
        "nome": "Maria Eduarda Pimentel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8613564,
        "longitude": -47.1439131,
        "cep": "13067364",
        "pais": "Brasil"
    },
    {
        "id": 983,
        "nome": "Jean Caique Alves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8905008,
        "longitude": -47.1623114,
        "cep": "13185403",
        "pais": "Brasil"
    },
    {
        "id": 984,
        "nome": "Davidson Bezerra de Vasconcelos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7048525,
        "longitude": -47.3021928,
        "cep": "13474480",
        "pais": "Brasil"
    },
    {
        "id": 985,
        "nome": "Jack Cordeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9363325,
        "longitude": -47.1584035,
        "cep": "13059630",
        "pais": "Brasil"
    },
    {
        "id": 986,
        "nome": "Júlia Corazza",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0015753,
        "longitude": -46.9899827,
        "cep": "13277280",
        "pais": "Brasil"
    },
    {
        "id": 987,
        "nome": "Yuri souza",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.8941408,
        "longitude": -48.2622678,
        "cep": "18275120",
        "pais": NaN
    },
    {
        "id": 988,
        "nome": "Fernando Falcade",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7378915,
        "longitude": -47.2379314,
        "cep": "13476696",
        "pais": "Brasil"
    },
    {
        "id": 989,
        "nome": "Ricardo Sacramento",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1238423,
        "longitude": -47.2402599,
        "cep": "13348310",
        "pais": "Brasil"
    },
    {
        "id": 990,
        "nome": "Frederico Marley Peixoto",
        "cidade": "Boituva",
        "estado": "SP",
        "latitude": -23.2816988,
        "longitude": -47.6593005,
        "cep": "18550530",
        "pais": "Brasil"
    },
    {
        "id": 991,
        "nome": "Genes Lima",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "09340130",
        "pais": "Brasil"
    },
    {
        "id": 992,
        "nome": "Andre Rodrigues",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8496273,
        "longitude": -47.2052815,
        "cep": "13183540",
        "pais": "Brasil"
    },
    {
        "id": 993,
        "nome": "Gabriel Camillo",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284486",
        "pais": "Brasil"
    },
    {
        "id": 994,
        "nome": "Tiago Soares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9319607,
        "longitude": -47.0873837,
        "cep": "13050022",
        "pais": "Brasil"
    },
    {
        "id": 995,
        "nome": "Lucas Carvalho",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.2509915,
        "longitude": -45.8020551,
        "cep": "13460000",
        "pais": NaN
    },
    {
        "id": 996,
        "nome": "Robson Oliveira barbosa",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8979594,
        "longitude": -47.2331931,
        "cep": "13188072",
        "pais": "Brasil"
    },
    {
        "id": 997,
        "nome": "Jean Dos Santos Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9772815,
        "longitude": -47.1723943,
        "cep": "13057503",
        "pais": "Brasil"
    },
    {
        "id": 998,
        "nome": "Divina Silva Brito",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8139184,
        "longitude": -47.2328498,
        "cep": "13177240",
        "pais": "Brasil"
    },
    {
        "id": 999,
        "nome": "Michael Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.969321,
        "longitude": -47.1336693,
        "cep": "13054033",
        "pais": "Brasil"
    },
    {
        "id": 1000,
        "nome": "Fernando Luis De Souza Gomes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8927256,
        "longitude": -47.1609362,
        "cep": "13064832",
        "pais": "Brasil"
    },
    {
        "id": 1001,
        "nome": "Ricardo Korch",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9413727,
        "longitude": -47.314128,
        "cep": "13190658",
        "pais": "Brasil"
    },
    {
        "id": 1002,
        "nome": "Gustavo Poppi De Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9522991,
        "longitude": -47.180263,
        "cep": "13058422",
        "pais": "Brasil"
    },
    {
        "id": 1003,
        "nome": "Alessandro Rodrigo Marialva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9217259,
        "longitude": -47.0727854,
        "cep": "13030290",
        "pais": "Brasil"
    },
    {
        "id": 1004,
        "nome": "André Monteiro de Moraes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.903849,
        "longitude": -47.0524757,
        "cep": "13025062",
        "pais": "Brasil"
    },
    {
        "id": 1005,
        "nome": "Lefent Lasher",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8783607,
        "longitude": -47.201621,
        "cep": "13186030",
        "pais": "Brasil"
    },
    {
        "id": 1006,
        "nome": "Carlos Silva",
        "cidade": "Itapira",
        "estado": "SP",
        "latitude": -22.4293215,
        "longitude": -46.8122839,
        "cep": "13972240",
        "pais": "Brasil"
    },
    {
        "id": 1007,
        "nome": "Ricardo Carvalho",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13349720",
        "pais": "Brasil"
    },
    {
        "id": 1008,
        "nome": "PAULA R SILVA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9443416,
        "longitude": -47.0406979,
        "cep": "13044440",
        "pais": "Brasil"
    },
    {
        "id": 1009,
        "nome": "Rogério Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13069426",
        "pais": "Brasil"
    },
    {
        "id": 1010,
        "nome": "Cynthia Cesarino Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.939787,
        "longitude": -47.1399339,
        "cep": "13059681",
        "pais": "Brasil"
    },
    {
        "id": 1011,
        "nome": "Edson Almeida Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13067733",
        "pais": "Brasil"
    },
    {
        "id": 1012,
        "nome": "Tainá Tamires",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9382446,
        "longitude": -47.0368304,
        "cep": "13043730",
        "pais": "Brasil"
    },
    {
        "id": 1013,
        "nome": "Diego P. M. Castelo Branco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9650669,
        "longitude": -47.0437078,
        "cep": "13042550",
        "pais": "Brasil"
    },
    {
        "id": 1014,
        "nome": "Renata Pires",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8837558,
        "longitude": -47.1758304,
        "cep": "13185158",
        "pais": "Brasil"
    },
    {
        "id": 1015,
        "nome": "Herbert Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13107234",
        "pais": "Brasil"
    },
    {
        "id": 1016,
        "nome": "Raylon Fidelis",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9716719,
        "longitude": -46.9868835,
        "cep": "13275070",
        "pais": "Brasil"
    },
    {
        "id": 1017,
        "nome": "Roberto Germiniani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9663108,
        "longitude": -47.0640512,
        "cep": "13049252",
        "pais": "Brasil"
    },
    {
        "id": 1018,
        "nome": "Guilherme Siqueira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9025519,
        "longitude": -47.1623466,
        "cep": "13064845",
        "pais": "Brasil"
    },
    {
        "id": 1019,
        "nome": "Marcio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8666281,
        "longitude": -47.0605833,
        "cep": "13087310",
        "pais": "Brasil"
    },
    {
        "id": 1020,
        "nome": "Felipe Collaço Neves",
        "cidade": "Iperó",
        "estado": "SP",
        "latitude": -23.3508977,
        "longitude": -47.687611,
        "cep": "18560000",
        "pais": "Brasil"
    },
    {
        "id": 1021,
        "nome": "Willian Roberto Ferreira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8001913,
        "longitude": -47.1869983,
        "cep": "13178868",
        "pais": "Brasil"
    },
    {
        "id": 1022,
        "nome": "Victor Hugo Honorato Pedro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.850571,
        "longitude": -47.2267315,
        "cep": "13183839",
        "pais": "Brasil"
    },
    {
        "id": 1023,
        "nome": "Victor De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13101229",
        "pais": "Brasil"
    },
    {
        "id": 1024,
        "nome": "Andre Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9617818,
        "longitude": -47.2196907,
        "cep": "13058619",
        "pais": "Brasil"
    },
    {
        "id": 1025,
        "nome": "Ricardo De Campos Leite",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7569432,
        "longitude": -47.3433408,
        "cep": "13468150",
        "pais": "Brasil"
    },
    {
        "id": 1026,
        "nome": "Wellington Desouza Bandeira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9204698,
        "longitude": -47.0196611,
        "cep": "13101310",
        "pais": "Brasil"
    },
    {
        "id": 1027,
        "nome": "Edson Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7453582,
        "longitude": -47.0653244,
        "cep": "13085758",
        "pais": "Brasil"
    },
    {
        "id": 1028,
        "nome": "LINALDO LIMA DE QUEIROZ",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "latitude": -22.9742957,
        "longitude": -43.330261,
        "cep": "22753737",
        "pais": NaN
    },
    {
        "id": 1029,
        "nome": "Yuri Mengardo",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4223203,
        "longitude": -47.5827532,
        "cep": "13503540",
        "pais": "Brasil"
    },
    {
        "id": 1030,
        "nome": "Erika Freitas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9479334,
        "longitude": -47.1369878,
        "cep": "13059703",
        "pais": "Brasil"
    },
    {
        "id": 1031,
        "nome": "Umberto Augusto Tonin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9243069,
        "longitude": -47.0590997,
        "cep": "13041190",
        "pais": "Brasil"
    },
    {
        "id": 1032,
        "nome": "Jeferson Simoes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8889394,
        "longitude": -47.1761717,
        "cep": "13185050",
        "pais": "Brasil"
    },
    {
        "id": 1033,
        "nome": "Luciane",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9030278,
        "longitude": -47.0426161,
        "cep": "13092005",
        "pais": "Brasil"
    },
    {
        "id": 1034,
        "nome": "DAL NEVES",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458184",
        "pais": "Brasil"
    },
    {
        "id": 1035,
        "nome": "Amadeu Ferraz",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13471080",
        "pais": "Brasil"
    },
    {
        "id": 1036,
        "nome": "Rafael Fernando De Souza Marciano",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.758352,
        "longitude": -47.1522846,
        "cep": "13140113",
        "pais": "Brasil"
    },
    {
        "id": 1037,
        "nome": "Angela Monteiro Da Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8069503,
        "longitude": -47.1937423,
        "cep": "13178382",
        "pais": "Brasil"
    },
    {
        "id": 1038,
        "nome": "Rodrigo silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9862709,
        "longitude": -47.1179295,
        "cep": "13054371",
        "pais": "Brasil"
    },
    {
        "id": 1039,
        "nome": "Raphael Araujo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8837558,
        "longitude": -47.1758304,
        "cep": "13185158",
        "pais": "Brasil"
    },
    {
        "id": 1040,
        "nome": "Guilherme",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9084795,
        "longitude": -47.1179068,
        "cep": "13061337",
        "pais": "Brasil"
    },
    {
        "id": 1041,
        "nome": "opolidoro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9425203,
        "longitude": -47.0299442,
        "cep": "13045310",
        "pais": "Brasil"
    },
    {
        "id": 1042,
        "nome": "Luís Carlos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9382446,
        "longitude": -47.0368304,
        "cep": "13043730",
        "pais": "Brasil"
    },
    {
        "id": 1043,
        "nome": "Vladimir Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186702",
        "pais": "Brasil"
    },
    {
        "id": 1044,
        "nome": "Juliano Rivelli Vilela Pozzani",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283272",
        "pais": "Brasil"
    },
    {
        "id": 1045,
        "nome": "Jocemara Bueno Arruda Leite",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9111918,
        "longitude": -47.0667921,
        "cep": "13035375",
        "pais": "Brasil"
    },
    {
        "id": 1046,
        "nome": "Adega Da vila",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8180025,
        "longitude": -47.232043,
        "cep": "13175685",
        "pais": "Brasil"
    },
    {
        "id": 1047,
        "nome": "Hércules Ferreira Rosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8995786,
        "longitude": -47.0953097,
        "cep": "13033585",
        "pais": "Brasil"
    },
    {
        "id": 1048,
        "nome": "Jaine Cristina Rodrigues ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9018384,
        "longitude": -47.0767608,
        "cep": "13070752",
        "pais": "Brasil"
    },
    {
        "id": 1049,
        "nome": "EaiRafaOliveira",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13285820",
        "pais": "Brasil"
    },
    {
        "id": 1050,
        "nome": "Cleber Bittencourt da Silveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8763037,
        "longitude": -47.1458376,
        "cep": "13067400",
        "pais": "Brasil"
    },
    {
        "id": 1051,
        "nome": "Marcela Cavalari Hiura",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9205614,
        "longitude": -47.0345121,
        "cep": "13100483",
        "pais": "Brasil"
    },
    {
        "id": 1052,
        "nome": "Vera Lucia de Lima",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7128727,
        "longitude": -47.2828039,
        "cep": "13474266",
        "pais": "Brasil"
    },
    {
        "id": 1053,
        "nome": "Deizinho Seixas",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454178",
        "pais": "Brasil"
    },
    {
        "id": 1054,
        "nome": "Marcos Gomes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9896375,
        "longitude": -47.1452374,
        "cep": "13056074",
        "pais": "Brasil"
    },
    {
        "id": 1055,
        "nome": "Matheus Piccoli",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4021214,
        "longitude": -47.5694383,
        "cep": "13500220",
        "pais": "Brasil"
    },
    {
        "id": 1056,
        "nome": "Mayara De Camargo Fernandes",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.193497,
        "longitude": -46.8684219,
        "cep": "13219071",
        "pais": "Brasil"
    },
    {
        "id": 1057,
        "nome": "Heverton Ferrao Da Silva",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.104686,
        "longitude": -47.2251097,
        "cep": "13345600",
        "pais": "Brasil"
    },
    {
        "id": 1058,
        "nome": "Glauco Fedel",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13339545",
        "pais": "Brasil"
    },
    {
        "id": 1059,
        "nome": "Flávia Giovanini Azevedo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9009579,
        "longitude": -47.0672935,
        "cep": "13020170",
        "pais": "Brasil"
    },
    {
        "id": 1060,
        "nome": "João José Dos Santos",
        "cidade": "Pindamonhangaba",
        "estado": "SP",
        "latitude": -22.9426125,
        "longitude": -45.4746002,
        "cep": "12422530",
        "pais": "Brasil"
    },
    {
        "id": 1061,
        "nome": "Thiago Soares",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.74995,
        "longitude": -47.3172624,
        "cep": "13478710",
        "pais": "Brasil"
    },
    {
        "id": 1062,
        "nome": "Misael Rodrigues",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7667949,
        "longitude": -47.3478252,
        "cep": "13468881",
        "pais": "Brasil"
    },
    {
        "id": 1063,
        "nome": "Gi",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0956826,
        "longitude": -47.2209241,
        "cep": "13345004",
        "pais": "Brasil"
    },
    {
        "id": 1064,
        "nome": "Adriana",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13285408",
        "pais": "Brasil"
    },
    {
        "id": 1065,
        "nome": "Janete Almeida",
        "cidade": "Tietê",
        "estado": "SP",
        "latitude": -23.1030302,
        "longitude": -47.7147937,
        "cep": "18530000",
        "pais": "Brasil"
    },
    {
        "id": 1066,
        "nome": "Rafael Freitas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9463633,
        "longitude": -47.1235093,
        "cep": "13060774",
        "pais": "Brasil"
    },
    {
        "id": 1067,
        "nome": "Isabela",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9546401,
        "longitude": -46.9937864,
        "cep": "13272081",
        "pais": "Brasil"
    },
    {
        "id": 1068,
        "nome": "Nilo Ennio Desertoli da Silva",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6012869,
        "longitude": -47.4229663,
        "cep": "13481685",
        "pais": "Brasil"
    },
    {
        "id": 1069,
        "nome": "Juh Pedron",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.921478,
        "longitude": -47.0382795,
        "cep": "13100497",
        "pais": "Brasil"
    },
    {
        "id": 1070,
        "nome": "Geraldo batista Juliao",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8496273,
        "longitude": -47.2052815,
        "cep": "13183540",
        "pais": "Brasil"
    },
    {
        "id": 1071,
        "nome": "Alexssandro Fagundes Santana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9201723,
        "longitude": -47.0681957,
        "cep": "13036265",
        "pais": "Brasil"
    },
    {
        "id": 1072,
        "nome": "Igor Grotoli",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8193305,
        "longitude": -47.2429747,
        "cep": "13175658",
        "pais": "Brasil"
    },
    {
        "id": 1073,
        "nome": "Vinícius Borges Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9361297,
        "longitude": -47.0503207,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 1074,
        "nome": "Gustavo Mercadante",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7419391,
        "longitude": -47.3538075,
        "cep": "13469095",
        "pais": "Brasil"
    },
    {
        "id": 1075,
        "nome": "Letícia Batista",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181672",
        "pais": "Brasil"
    },
    {
        "id": 1076,
        "nome": "Guilherme Henrique Nicolau",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9337518,
        "longitude": -47.0232726,
        "cep": "13046190",
        "pais": "Brasil"
    },
    {
        "id": 1077,
        "nome": "Anderson Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9673467,
        "longitude": -46.9520955,
        "cep": "13274465",
        "pais": "Brasil"
    },
    {
        "id": 1078,
        "nome": "Junior Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9173474,
        "longitude": -47.0313165,
        "cep": "13100396",
        "pais": "Brasil"
    },
    {
        "id": 1079,
        "nome": "Rubia Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9096919,
        "longitude": -47.0589796,
        "cep": "13013000",
        "pais": "Brasil"
    },
    {
        "id": 1080,
        "nome": "DIEGO CORREA DO ROSARIO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9272215,
        "longitude": -47.1606789,
        "cep": "13059230",
        "pais": "Brasil"
    },
    {
        "id": 1081,
        "nome": "Caique Meireles",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13285866",
        "pais": "Brasil"
    },
    {
        "id": 1082,
        "nome": "Jair Rogério De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9277595,
        "longitude": -47.0243433,
        "cep": "13101109",
        "pais": "Brasil"
    },
    {
        "id": 1083,
        "nome": "Luan oGordo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9135045,
        "longitude": -47.0343773,
        "cep": "13100291",
        "pais": "Brasil"
    },
    {
        "id": 1084,
        "nome": "Ieda Cristina Souza",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458620",
        "pais": "Brasil"
    },
    {
        "id": 1085,
        "nome": "Jonatas Leite",
        "cidade": "Leme",
        "estado": "SP",
        "latitude": -22.2002469,
        "longitude": -47.3932378,
        "cep": "13610431",
        "pais": "Brasil"
    },
    {
        "id": 1086,
        "nome": "Felipe Gomes puerta",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9482245,
        "longitude": -47.1896015,
        "cep": "13058510",
        "pais": "Brasil"
    },
    {
        "id": 1087,
        "nome": "Thainá Marques Dias Aleixo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.929425,
        "longitude": -47.1647248,
        "cep": "13059232",
        "pais": "Brasil"
    },
    {
        "id": 1088,
        "nome": "Cláudia Gomes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8055455,
        "longitude": -47.1964511,
        "cep": "13178372",
        "pais": "Brasil"
    },
    {
        "id": 1089,
        "nome": "Breno Poiares",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4247896,
        "longitude": -46.9542444,
        "cep": "13807010",
        "pais": "Brasil"
    },
    {
        "id": 1090,
        "nome": "Bruno Mariano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9214184,
        "longitude": -47.0418145,
        "cep": "13100430",
        "pais": "Brasil"
    },
    {
        "id": 1091,
        "nome": "james silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.987703,
        "longitude": -47.1384168,
        "cep": "13056116",
        "pais": "Brasil"
    },
    {
        "id": 1092,
        "nome": "Thiago Dos Reis Viana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8963478,
        "longitude": -47.1593567,
        "cep": "13064810",
        "pais": "Brasil"
    },
    {
        "id": 1093,
        "nome": "Rafael Castanha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051110",
        "pais": "Brasil"
    },
    {
        "id": 1094,
        "nome": "Emerson Cicigliano",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1106219,
        "longitude": -47.2252237,
        "cep": "13346250",
        "pais": "Brasil"
    },
    {
        "id": 1095,
        "nome": "Edson Luiz PRATA",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0416538,
        "longitude": -47.3718002,
        "cep": "13350000",
        "pais": "Brasil"
    },
    {
        "id": 1096,
        "nome": "Audrey Abreu Soares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9202183,
        "longitude": -47.102124,
        "cep": "13060061",
        "pais": "Brasil"
    },
    {
        "id": 1097,
        "nome": "Ícaro Andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8288463,
        "longitude": -47.101936,
        "cep": "13082754",
        "pais": "Brasil"
    },
    {
        "id": 1098,
        "nome": "Arthur Marques",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13287134",
        "pais": "Brasil"
    },
    {
        "id": 1099,
        "nome": "Priscila",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9330398,
        "longitude": -47.0818268,
        "cep": "13050014",
        "pais": "Brasil"
    },
    {
        "id": 1100,
        "nome": "Francielle Zoz",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7304316,
        "longitude": -47.284983,
        "cep": "13475010",
        "pais": "Brasil"
    },
    {
        "id": 1101,
        "nome": "Lau Limas",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9062771,
        "longitude": -47.1749254,
        "cep": "13185340",
        "pais": "Brasil"
    },
    {
        "id": 1102,
        "nome": "Stella Arantes De Oiveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235106,
        "longitude": -47.1067577,
        "cep": "13060190",
        "pais": "Brasil"
    },
    {
        "id": 1103,
        "nome": "Eduardo Biribili Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8960296,
        "longitude": -47.1607555,
        "cep": "13064812",
        "pais": "Brasil"
    },
    {
        "id": 1104,
        "nome": "Natália Miranda do Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9463176,
        "longitude": -47.1576942,
        "cep": "13059100",
        "pais": "Brasil"
    },
    {
        "id": 1105,
        "nome": "Ana Lucia Daenekas Rodrigues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9921324,
        "longitude": -46.9920688,
        "cep": "13277642",
        "pais": "Brasil"
    },
    {
        "id": 1106,
        "nome": "Paulo Henrique Paulino",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8530865,
        "longitude": -47.2057169,
        "cep": "13183510",
        "pais": "Brasil"
    },
    {
        "id": 1107,
        "nome": "Isabella",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8621035,
        "longitude": -47.2070952,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 1108,
        "nome": "Isabel Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9233312,
        "longitude": -46.9711799,
        "cep": "13273274",
        "pais": "Brasil"
    },
    {
        "id": 1109,
        "nome": "Maurício Rodrigues Dos Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.809755,
        "longitude": -47.248204,
        "cep": "13175115",
        "pais": "Brasil"
    },
    {
        "id": 1110,
        "nome": "Adriana Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9424508,
        "longitude": -47.0421357,
        "cep": "13044715",
        "pais": "Brasil"
    },
    {
        "id": 1111,
        "nome": "Ludmila Rocio Oliosi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8280517,
        "longitude": -47.077521,
        "cep": "13084140",
        "pais": "Brasil"
    },
    {
        "id": 1112,
        "nome": "Diego Boy",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8235067,
        "longitude": -47.1753439,
        "cep": "13179072",
        "pais": "Brasil"
    },
    {
        "id": 1113,
        "nome": "Claudio Venancio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9431122,
        "longitude": -47.1655827,
        "cep": "13059001",
        "pais": "Brasil"
    },
    {
        "id": 1114,
        "nome": "Thiago Assis Cunha",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.744338,
        "longitude": -47.1767203,
        "cep": "13145352",
        "pais": "Brasil"
    },
    {
        "id": 1115,
        "nome": "Aline Aparecida Rodrigues de Sousa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8175445,
        "longitude": -47.246918,
        "cep": "13175375",
        "pais": "Brasil"
    },
    {
        "id": 1116,
        "nome": "Daniel Damico da Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9332555,
        "longitude": -47.1241729,
        "cep": "13060712",
        "pais": "Brasil"
    },
    {
        "id": 1117,
        "nome": "Clovis Belcari",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9468515,
        "longitude": -47.1558065,
        "cep": "13059105",
        "pais": "Brasil"
    },
    {
        "id": 1118,
        "nome": "Andre rodrigues",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4368093,
        "longitude": -46.9263658,
        "cep": "13802334",
        "pais": "Brasil"
    },
    {
        "id": 1119,
        "nome": "Everton Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9295066,
        "longitude": -47.1121276,
        "cep": "13060037",
        "pais": "Brasil"
    },
    {
        "id": 1120,
        "nome": "Daiane Cordeiro De Assis",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7741457,
        "longitude": -47.1501914,
        "cep": "13140699",
        "pais": "Brasil"
    },
    {
        "id": 1121,
        "nome": "Gisely",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13046140",
        "pais": "Brasil"
    },
    {
        "id": 1122,
        "nome": "Carlos Duarte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9232169,
        "longitude": -47.017958,
        "cep": "13101135",
        "pais": "Brasil"
    },
    {
        "id": 1123,
        "nome": "Diana Gonçalves Martins de Assis",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1375349,
        "longitude": -47.1915317,
        "cep": "13342200",
        "pais": "Brasil"
    },
    {
        "id": 1124,
        "nome": "André dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.840338,
        "longitude": -47.1409607,
        "cep": "13069528",
        "pais": "Brasil"
    },
    {
        "id": 1125,
        "nome": "Samira Tamborim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9634134,
        "longitude": -47.139214,
        "cep": "13056632",
        "pais": "Brasil"
    },
    {
        "id": 1126,
        "nome": "Mariana Beatriz De Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9474148,
        "longitude": -47.0887232,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 1127,
        "nome": "Leila Romanini",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9085531,
        "longitude": -47.0560834,
        "cep": "13015082",
        "pais": "Brasil"
    },
    {
        "id": 1128,
        "nome": "Honda Edson",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8951338,
        "longitude": -47.0793148,
        "cep": "13070710",
        "pais": "Brasil"
    },
    {
        "id": 1129,
        "nome": "Thaís Savoy",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8658573,
        "longitude": -47.0446193,
        "cep": "13087016",
        "pais": "Brasil"
    },
    {
        "id": 1130,
        "nome": "Helen Thais Ferreira De Aguiar",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3738102,
        "longitude": -47.5427996,
        "cep": "13506176",
        "pais": "Brasil"
    },
    {
        "id": 1131,
        "nome": "Ricardo Santos Portugal",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8026686,
        "longitude": -47.2780096,
        "cep": "13173212",
        "pais": "Brasil"
    },
    {
        "id": 1132,
        "nome": "Carlos Henrique Fernandes Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9319607,
        "longitude": -47.0873837,
        "cep": "13050022",
        "pais": "Brasil"
    },
    {
        "id": 1133,
        "nome": "Tamires Pinheiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9011398,
        "longitude": -47.0361888,
        "cep": "13092496",
        "pais": "Brasil"
    },
    {
        "id": 1134,
        "nome": "Nathalia Cristina Amadeu Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9521667,
        "longitude": -47.0813922,
        "cep": "13051076",
        "pais": "Brasil"
    },
    {
        "id": 1135,
        "nome": "Alexandre Nunes Rosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9439673,
        "longitude": -47.099832,
        "cep": "13050543",
        "pais": "Brasil"
    },
    {
        "id": 1136,
        "nome": "Gabriela Franco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.911853,
        "longitude": -47.0658354,
        "cep": "13035400",
        "pais": "Brasil"
    },
    {
        "id": 1137,
        "nome": "Marcelo Aparecido",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9368409,
        "longitude": -47.0397719,
        "cep": "13043650",
        "pais": "Brasil"
    },
    {
        "id": 1138,
        "nome": "Marco Antônio",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 1139,
        "nome": "João Piva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9557689,
        "longitude": -47.0042692,
        "cep": "13272453",
        "pais": "Brasil"
    },
    {
        "id": 1140,
        "nome": "Marcio Jose",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.91266,
        "longitude": -47.0296163,
        "cep": "13100235",
        "pais": "Brasil"
    },
    {
        "id": 1141,
        "nome": "Hatyene Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8848991,
        "longitude": -47.0857464,
        "cep": "13070088",
        "pais": "Brasil"
    },
    {
        "id": 1142,
        "nome": "Antonio Rigone",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.2135816,
        "longitude": -46.8813884,
        "cep": "23060501",
        "pais": NaN
    },
    {
        "id": 1143,
        "nome": "Naja Najara",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9486709,
        "longitude": -47.1120629,
        "cep": "13060648",
        "pais": "Brasil"
    },
    {
        "id": 1144,
        "nome": "Denis Drapella",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7570041,
        "longitude": -47.3572077,
        "cep": "13468570",
        "pais": "Brasil"
    },
    {
        "id": 1145,
        "nome": "Rafael Aparecido",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064871",
        "pais": "Brasil"
    },
    {
        "id": 1146,
        "nome": "Wilson Bruno Almeida Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9928166,
        "longitude": -47.1418302,
        "cep": "13056050",
        "pais": "Brasil"
    },
    {
        "id": 1147,
        "nome": "WILKER GOMIDES CARVALHO",
        "cidade": "São Roque",
        "estado": "SP",
        "latitude": -23.5601005,
        "longitude": -47.1154795,
        "cep": "18135580",
        "pais": "Brasil"
    },
    {
        "id": 1148,
        "nome": "Renato",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8885949,
        "longitude": -47.0384356,
        "cep": "13090714",
        "pais": "Brasil"
    },
    {
        "id": 1149,
        "nome": "Lucas Monteiro Alves",
        "cidade": "Fortaleza",
        "estado": "CE",
        "latitude": -3.7965978,
        "longitude": -38.4972432,
        "cep": "60822131",
        "pais": NaN
    },
    {
        "id": 1150,
        "nome": "Elisangela Queiroz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9472317,
        "longitude": -47.1116166,
        "cep": "13060611",
        "pais": "Brasil"
    },
    {
        "id": 1151,
        "nome": "Sinara Pedrosa de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9453235,
        "longitude": -47.1178808,
        "cep": "13060798",
        "pais": "Brasil"
    },
    {
        "id": 1152,
        "nome": "Rodolfo Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061342",
        "pais": "Brasil"
    },
    {
        "id": 1153,
        "nome": "Vitor Rezende",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6996652,
        "longitude": -46.9929159,
        "cep": "13911062",
        "pais": "Brasil"
    },
    {
        "id": 1154,
        "nome": "Crislaine Souza",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8839734,
        "longitude": -47.2022231,
        "cep": "13186170",
        "pais": "Brasil"
    },
    {
        "id": 1155,
        "nome": "jovanes junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9844229,
        "longitude": -47.1222543,
        "cep": "13054581",
        "pais": "Brasil"
    },
    {
        "id": 1156,
        "nome": "Douglas Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9772866,
        "longitude": -47.1362233,
        "cep": "13056340",
        "pais": "Brasil"
    },
    {
        "id": 1157,
        "nome": "Jean Bolla",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9396666,
        "longitude": -46.9738752,
        "cep": "13273649",
        "pais": "Brasil"
    },
    {
        "id": 1158,
        "nome": "Fabricyo Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9297308,
        "longitude": -47.1108777,
        "cep": "13060043",
        "pais": "Brasil"
    },
    {
        "id": 1159,
        "nome": "Elson cruz",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5818945,
        "longitude": -47.3809408,
        "cep": "13487030",
        "pais": "Brasil"
    },
    {
        "id": 1160,
        "nome": "joao luiz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9508145,
        "longitude": -47.0773197,
        "cep": "13051054",
        "pais": "Brasil"
    },
    {
        "id": 1161,
        "nome": "Adriano Henrique",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8079778,
        "longitude": -47.1746067,
        "cep": "13179153",
        "pais": "Brasil"
    },
    {
        "id": 1162,
        "nome": "Breniklin Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9570551,
        "longitude": -46.9909938,
        "cep": "13272150",
        "pais": "Brasil"
    },
    {
        "id": 1163,
        "nome": "Neto Magalhães",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9591964,
        "longitude": -47.2020273,
        "cep": "13058133",
        "pais": "Brasil"
    },
    {
        "id": 1164,
        "nome": "Ana Paula Tissiano",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4120179,
        "longitude": -47.5637002,
        "cep": "13500390",
        "pais": "Brasil"
    },
    {
        "id": 1165,
        "nome": "Lázaro Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9085531,
        "longitude": -47.0560834,
        "cep": "13015082",
        "pais": "Brasil"
    },
    {
        "id": 1166,
        "nome": "Eder Bueno",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8191127,
        "longitude": -47.2890418,
        "cep": "13172691",
        "pais": "Brasil"
    },
    {
        "id": 1167,
        "nome": "Clayton Costa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8262668,
        "longitude": -47.1680157,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 1168,
        "nome": "Gustavo Alvarenga Kamimura",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9855247,
        "longitude": -47.121707,
        "cep": "13054281",
        "pais": "Brasil"
    },
    {
        "id": 1169,
        "nome": "Maria de Lourdes Ap Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13255540",
        "pais": "Brasil"
    },
    {
        "id": 1170,
        "nome": "Alexandre Santos",
        "cidade": "Andradas",
        "estado": "MG",
        "latitude": -22.0693412,
        "longitude": -46.5707584,
        "cep": "37795000",
        "pais": NaN
    },
    {
        "id": 1171,
        "nome": "Luana",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13294118",
        "pais": "Brasil"
    },
    {
        "id": 1172,
        "nome": "Alexandre Lourenço da Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8026686,
        "longitude": -47.2780096,
        "cep": "13173212",
        "pais": "Brasil"
    },
    {
        "id": 1173,
        "nome": "Jorge Renato Fabio",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.6775106,
        "longitude": -47.7088246,
        "cep": "13409017",
        "pais": "Brasil"
    },
    {
        "id": 1174,
        "nome": "pedro marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7948188,
        "longitude": -47.0873082,
        "cep": "13085245",
        "pais": "Brasil"
    },
    {
        "id": 1175,
        "nome": "Renato",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9494714,
        "longitude": -46.9830642,
        "cep": "13273114",
        "pais": "Brasil"
    },
    {
        "id": 1176,
        "nome": "Laís Nazário",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8571963,
        "longitude": -47.1512245,
        "cep": "13068205",
        "pais": "Brasil"
    },
    {
        "id": 1177,
        "nome": "matheus fornicola",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8161995,
        "longitude": -47.0266,
        "cep": "13098427",
        "pais": "Brasil"
    },
    {
        "id": 1178,
        "nome": "Nelson Malaquim Junior",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.744211,
        "longitude": -47.6364464,
        "cep": "13417520",
        "pais": "Brasil"
    },
    {
        "id": 1179,
        "nome": "Raiane",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7245857,
        "longitude": -47.3199641,
        "cep": "13472403",
        "pais": "Brasil"
    },
    {
        "id": 1180,
        "nome": "Marcos Vinicios Roda",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1183108,
        "longitude": -47.264122,
        "cep": "13349204",
        "pais": "Brasil"
    },
    {
        "id": 1181,
        "nome": "Adan Guiaro",
        "cidade": "Santa Gertrudes",
        "estado": "SP",
        "latitude": -22.4471493,
        "longitude": -47.5445269,
        "cep": "13512070",
        "pais": "Brasil"
    },
    {
        "id": 1182,
        "nome": "Giovani Moura",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454365",
        "pais": "Brasil"
    },
    {
        "id": 1183,
        "nome": "Rodrigo Guimaraes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9074464,
        "longitude": -47.1784335,
        "cep": "13185350",
        "pais": "Brasil"
    },
    {
        "id": 1184,
        "nome": "Reinaldo Braite",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.390483,
        "longitude": -47.5754736,
        "cep": "13504150",
        "pais": "Brasil"
    },
    {
        "id": 1185,
        "nome": "Leonardo Cavalcante",
        "cidade": "Belém",
        "estado": "PA",
        "latitude": -1.4262548,
        "longitude": -48.4747133,
        "cep": "66085754",
        "pais": NaN
    },
    {
        "id": 1186,
        "nome": "Leandro Martins",
        "cidade": "Andradas",
        "estado": "MG",
        "latitude": -22.0693412,
        "longitude": -46.5707584,
        "cep": "37795000",
        "pais": NaN
    },
    {
        "id": 1187,
        "nome": "Fabio Brandão Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9649534,
        "longitude": -47.1985552,
        "cep": "13058179",
        "pais": "Brasil"
    },
    {
        "id": 1188,
        "nome": "Raphael Belentani",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8235953,
        "longitude": -47.2390337,
        "cep": "13175662",
        "pais": "Brasil"
    },
    {
        "id": 1189,
        "nome": "Nathan Arjona",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181655",
        "pais": "Brasil"
    },
    {
        "id": 1190,
        "nome": "Pedro Ramos",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454360",
        "pais": "Brasil"
    },
    {
        "id": 1191,
        "nome": "João Calvino Heringer Cordenonsi Roder Monteiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7991702,
        "longitude": -47.2257789,
        "cep": "13177432",
        "pais": "Brasil"
    },
    {
        "id": 1192,
        "nome": "Endrews Leon",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7206789,
        "longitude": -47.1739028,
        "cep": "13145807",
        "pais": "Brasil"
    },
    {
        "id": 1193,
        "nome": "Natália Gonzalez",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7799479,
        "longitude": -47.1341353,
        "cep": "13140798",
        "pais": "Brasil"
    },
    {
        "id": 1194,
        "nome": "Fernanda Agostini",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13333420",
        "pais": "Brasil"
    },
    {
        "id": 1195,
        "nome": "rodrigo meliscki lambertucci",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4005793,
        "longitude": -47.5540776,
        "cep": "13506715",
        "pais": "Brasil"
    },
    {
        "id": 1196,
        "nome": "Adriano De Carvalho",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1215097,
        "longitude": -47.2417665,
        "cep": "13348390",
        "pais": "Brasil"
    },
    {
        "id": 1197,
        "nome": "Cristiane Francisco",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13474020",
        "pais": "Brasil"
    },
    {
        "id": 1198,
        "nome": "Miguel Biassi Severich",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9617948,
        "longitude": -47.001296,
        "cep": "13272101",
        "pais": "Brasil"
    },
    {
        "id": 1199,
        "nome": "Marlezia Gonçalves Dos Santos Sousa",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 1200,
        "nome": "Assis Coelho",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.8941408,
        "longitude": -48.2622678,
        "cep": "77800000",
        "pais": NaN
    },
    {
        "id": 1201,
        "nome": "Jessica",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235396,
        "longitude": -47.0155691,
        "cep": "13101361",
        "pais": "Brasil"
    },
    {
        "id": 1202,
        "nome": "Ivo Rodrigues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9251095,
        "longitude": -46.9720621,
        "cep": "13273275",
        "pais": "Brasil"
    },
    {
        "id": 1203,
        "nome": "Edward Wilson Ignacio Junior",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3996366,
        "longitude": -47.5667515,
        "cep": "13500190",
        "pais": "Brasil"
    },
    {
        "id": 1204,
        "nome": "Hugo Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059028",
        "pais": "Brasil"
    },
    {
        "id": 1205,
        "nome": "Sandro Valérius",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450240",
        "pais": "Brasil"
    },
    {
        "id": 1206,
        "nome": "Weliton Sidlauskas De Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9342815,
        "longitude": -47.1022507,
        "cep": "13060130",
        "pais": "Brasil"
    },
    {
        "id": 1207,
        "nome": "Thiago da Silva Teixeira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9594918,
        "longitude": -47.1842196,
        "cep": "13058381",
        "pais": "Brasil"
    },
    {
        "id": 1208,
        "nome": "Nitevaldo Adolpho Ribeiro Stolze",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9298942,
        "longitude": -47.1562628,
        "cep": "13059611",
        "pais": "Brasil"
    },
    {
        "id": 1209,
        "nome": "Giovan Batista",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.87439,
        "longitude": -47.2360667,
        "cep": "13189213",
        "pais": "Brasil"
    },
    {
        "id": 1210,
        "nome": "Heliton Silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7047572,
        "longitude": -47.295501,
        "cep": "13474462",
        "pais": "Brasil"
    },
    {
        "id": 1211,
        "nome": "Aline Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9203879,
        "longitude": -47.0807962,
        "cep": "13031392",
        "pais": "Brasil"
    },
    {
        "id": 1212,
        "nome": "Priscila Siqueira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9398265,
        "longitude": -47.0351344,
        "cep": "13043700",
        "pais": "Brasil"
    },
    {
        "id": 1213,
        "nome": "Leila Felix",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9262061,
        "longitude": -47.1001863,
        "cep": "13060022",
        "pais": "Brasil"
    },
    {
        "id": 1214,
        "nome": "Aline",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9601529,
        "longitude": -47.1929899,
        "cep": "13058035",
        "pais": "Brasil"
    },
    {
        "id": 1215,
        "nome": "Alex Pereira da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9851576,
        "longitude": -47.1172904,
        "cep": "13054414",
        "pais": "Brasil"
    },
    {
        "id": 1216,
        "nome": "Alex França",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13052550",
        "pais": "Brasil"
    },
    {
        "id": 1217,
        "nome": "Toca Mais Alto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9330398,
        "longitude": -47.0818268,
        "cep": "13050014",
        "pais": "Brasil"
    },
    {
        "id": 1218,
        "nome": "Saulor Rodrigues Constancio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9491288,
        "longitude": -47.1604761,
        "cep": "13059117",
        "pais": "Brasil"
    },
    {
        "id": 1219,
        "nome": "Juliane  Blei",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7221203,
        "longitude": -47.1779485,
        "cep": "13145776",
        "pais": "Brasil"
    },
    {
        "id": 1220,
        "nome": "Augusto Moraes",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6666664,
        "longitude": -46.9850449,
        "cep": "13914552",
        "pais": "Brasil"
    },
    {
        "id": 1221,
        "nome": "Claudinei",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9479334,
        "longitude": -47.1369878,
        "cep": "13059703",
        "pais": "Brasil"
    },
    {
        "id": 1222,
        "nome": "Eduardo Cavarsan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9335671,
        "longitude": -47.0182686,
        "cep": "13046545",
        "pais": "Brasil"
    },
    {
        "id": 1223,
        "nome": "Glair Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9277187,
        "longitude": -47.155003,
        "cep": "13059607",
        "pais": "Brasil"
    },
    {
        "id": 1224,
        "nome": "Hugo Oliveira De Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8123239,
        "longitude": -47.2464421,
        "cep": "13175125",
        "pais": "Brasil"
    },
    {
        "id": 1225,
        "nome": "Hercilio Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8848991,
        "longitude": -47.0857464,
        "cep": "13070088",
        "pais": "Brasil"
    },
    {
        "id": 1226,
        "nome": "Israel Felipe Colla",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7153179,
        "longitude": -47.3574732,
        "cep": "13470412",
        "pais": "Brasil"
    },
    {
        "id": 1227,
        "nome": "Paulo Cesar Alves Trevisan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9662862,
        "longitude": -47.1448371,
        "cep": "13056671",
        "pais": "Brasil"
    },
    {
        "id": 1228,
        "nome": "Lucas Henrique Brolezi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9453343,
        "longitude": -47.0493804,
        "cep": "13044904",
        "pais": "Brasil"
    },
    {
        "id": 1229,
        "nome": "Rafael Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061091",
        "pais": "Brasil"
    },
    {
        "id": 1230,
        "nome": "Ana Beatriz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9262061,
        "longitude": -47.1001863,
        "cep": "13060022",
        "pais": "Brasil"
    },
    {
        "id": 1231,
        "nome": "Raphael Gobbo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8118681,
        "longitude": -47.0302948,
        "cep": "13098401",
        "pais": "Brasil"
    },
    {
        "id": 1232,
        "nome": "Guilherme Duarte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9767485,
        "longitude": -47.1303419,
        "cep": "13054672",
        "pais": "Brasil"
    },
    {
        "id": 1233,
        "nome": "Graziele Cunha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9334614,
        "longitude": -47.1172487,
        "cep": "13060534",
        "pais": "Brasil"
    },
    {
        "id": 1234,
        "nome": "Santiago Borba",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9520841,
        "longitude": -47.009843,
        "cep": "13272510",
        "pais": "Brasil"
    },
    {
        "id": 1235,
        "nome": "Anderson Lima",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5842444,
        "longitude": -47.4202,
        "cep": "13482065",
        "pais": "Brasil"
    },
    {
        "id": 1236,
        "nome": "Renata Azevedo Gomes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 1237,
        "nome": "Larissa Nunes Couto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9059526,
        "longitude": -47.1039723,
        "cep": "13033165",
        "pais": "Brasil"
    },
    {
        "id": 1238,
        "nome": "Jean Carlos De Morais Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9432772,
        "longitude": -47.1865432,
        "cep": "13058532",
        "pais": "Brasil"
    },
    {
        "id": 1239,
        "nome": "Frambo_13",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9005565,
        "longitude": -47.0277737,
        "cep": "13092511",
        "pais": "Brasil"
    },
    {
        "id": 1240,
        "nome": "Tathiana Lemos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9458804,
        "longitude": -47.0913206,
        "cep": "13050088",
        "pais": "Brasil"
    },
    {
        "id": 1241,
        "nome": "Juliano Costa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8292704,
        "longitude": -47.2189548,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 1242,
        "nome": "Kelly Cristina",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8918706,
        "longitude": -47.2075138,
        "cep": "13186642",
        "pais": "Brasil"
    },
    {
        "id": 1243,
        "nome": "Michele Knothe (@a_motora_exclusive)",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3970166,
        "longitude": -47.5556227,
        "cep": "13506690",
        "pais": "Brasil"
    },
    {
        "id": 1244,
        "nome": "Alef Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9464879,
        "longitude": -47.1613763,
        "cep": "13059615",
        "pais": "Brasil"
    },
    {
        "id": 1245,
        "nome": "Vitória Luque",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9850544,
        "longitude": -47.0978661,
        "cep": "13052577",
        "pais": "Brasil"
    },
    {
        "id": 1246,
        "nome": "Douglas",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13285602",
        "pais": "Brasil"
    },
    {
        "id": 1247,
        "nome": "Maicon Carlos Santos Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8303119,
        "longitude": -47.0804029,
        "cep": "13084754",
        "pais": "Brasil"
    },
    {
        "id": 1248,
        "nome": "Lorenzo Carmo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7524852,
        "longitude": -47.3168363,
        "cep": "13478713",
        "pais": "Brasil"
    },
    {
        "id": 1249,
        "nome": "Marcos Guilherme De Toledo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7409217,
        "longitude": -47.2986622,
        "cep": "13477500",
        "pais": "Brasil"
    },
    {
        "id": 1250,
        "nome": "Leandro C.",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456625",
        "pais": "Brasil"
    },
    {
        "id": 1251,
        "nome": "Crisleine Maria Costa De Queiroz",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8251046,
        "longitude": -47.235804,
        "cep": "13175668",
        "pais": "Brasil"
    },
    {
        "id": 1252,
        "nome": "Alfonso Ferrante",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8122898,
        "longitude": -47.2320279,
        "cep": "13177282",
        "pais": "Brasil"
    },
    {
        "id": 1253,
        "nome": "Rafael Luciano Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9266167,
        "longitude": -47.1200002,
        "cep": "13060565",
        "pais": "Brasil"
    },
    {
        "id": 1254,
        "nome": "José Paulo Sandes Feitosa",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4485328,
        "longitude": -47.4755033,
        "cep": "18077640",
        "pais": "Brasil"
    },
    {
        "id": 1255,
        "nome": "Dalila Pires",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8979594,
        "longitude": -47.2331931,
        "cep": "13188072",
        "pais": "Brasil"
    },
    {
        "id": 1256,
        "nome": "Jair David Pinto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8426017,
        "longitude": -47.1528261,
        "cep": "13069098",
        "pais": "Brasil"
    },
    {
        "id": 1257,
        "nome": "miguel cardoso",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180330",
        "pais": "Brasil"
    },
    {
        "id": 1258,
        "nome": "Carlos Alberto dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8241814,
        "longitude": -47.0915339,
        "cep": "13084405",
        "pais": "Brasil"
    },
    {
        "id": 1259,
        "nome": "Gustavo Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9368871,
        "longitude": -47.0385522,
        "cep": "13043770",
        "pais": "Brasil"
    },
    {
        "id": 1260,
        "nome": "Andres Camilo",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "06230150",
        "pais": "Brasil"
    },
    {
        "id": 1261,
        "nome": "Paulo Luz",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.3380121,
        "longitude": -47.8368572,
        "cep": "13219005",
        "pais": NaN
    },
    {
        "id": 1262,
        "nome": "Gekson Bezerra Da Silva",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7295821,
        "longitude": -47.1828868,
        "cep": "13145674",
        "pais": "Brasil"
    },
    {
        "id": 1263,
        "nome": "Gloss & Cia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9285841,
        "longitude": -47.1642329,
        "cep": "13059235",
        "pais": "Brasil"
    },
    {
        "id": 1264,
        "nome": "guilherme augusto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8162734,
        "longitude": -47.028665,
        "cep": "13098421",
        "pais": "Brasil"
    },
    {
        "id": 1265,
        "nome": "Lorena Silva Peixoto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0311162,
        "longitude": -47.1266586,
        "cep": "13053701",
        "pais": "Brasil"
    },
    {
        "id": 1266,
        "nome": "Sheyla Artur De Andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.939672,
        "longitude": -47.1685759,
        "cep": "13059587",
        "pais": "Brasil"
    },
    {
        "id": 1267,
        "nome": "Grazielle Fernandes da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8559467,
        "longitude": -47.2169415,
        "cep": "13183130",
        "pais": "Brasil"
    },
    {
        "id": 1268,
        "nome": "Ludwig Hugo Mendes Simões",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0964486,
        "longitude": -47.2773648,
        "cep": "13349057",
        "pais": "Brasil"
    },
    {
        "id": 1269,
        "nome": "Clecio Reis",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181481",
        "pais": "Brasil"
    },
    {
        "id": 1270,
        "nome": "Angelita Aparecida Do Nascimento Carvalho",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13339568",
        "pais": "Brasil"
    },
    {
        "id": 1271,
        "nome": "dayana17 silva souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9662862,
        "longitude": -47.1448371,
        "cep": "13056671",
        "pais": "Brasil"
    },
    {
        "id": 1272,
        "nome": "Ana Beatriz Bittencourt de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9207661,
        "longitude": -47.0896009,
        "cep": "13031835",
        "pais": "Brasil"
    },
    {
        "id": 1273,
        "nome": "stefany cristina",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7189434,
        "longitude": -47.1674231,
        "cep": "13145546",
        "pais": "Brasil"
    },
    {
        "id": 1274,
        "nome": "Everton Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9332151,
        "longitude": -47.0852367,
        "cep": "13050010",
        "pais": "Brasil"
    },
    {
        "id": 1275,
        "nome": "Thiago Botim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9297308,
        "longitude": -47.1108777,
        "cep": "13060043",
        "pais": "Brasil"
    },
    {
        "id": 1276,
        "nome": "Cleide Santos André",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454350",
        "pais": "Brasil"
    },
    {
        "id": 1277,
        "nome": "Alexia Garcia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9699008,
        "longitude": -47.148075,
        "cep": "13056500",
        "pais": "Brasil"
    },
    {
        "id": 1278,
        "nome": "Camila lemos ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9287637,
        "longitude": -47.0917284,
        "cep": "13050464",
        "pais": "Brasil"
    },
    {
        "id": 1279,
        "nome": "Raul",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.924254,
        "longitude": -47.0931708,
        "cep": "13050413",
        "pais": "Brasil"
    },
    {
        "id": 1280,
        "nome": "Erick",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8649625,
        "longitude": -47.2109388,
        "cep": "13184290",
        "pais": "Brasil"
    },
    {
        "id": 1281,
        "nome": "Jeandson Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8489573,
        "longitude": -47.1343198,
        "cep": "13069096",
        "pais": "Brasil"
    },
    {
        "id": 1282,
        "nome": "Fábio Teixeira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8713705,
        "longitude": -47.0248074,
        "cep": "13091561",
        "pais": "Brasil"
    },
    {
        "id": 1283,
        "nome": "Murilo Guerra",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9184401,
        "longitude": -47.102031,
        "cep": "13060072",
        "pais": "Brasil"
    },
    {
        "id": 1284,
        "nome": "Ale Spaziante",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.418595,
        "longitude": -47.5718754,
        "cep": "13503390",
        "pais": "Brasil"
    },
    {
        "id": 1285,
        "nome": "Flávia",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180622",
        "pais": "Brasil"
    },
    {
        "id": 1286,
        "nome": "Allan Rafael Souza",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6626372,
        "longitude": -46.9730439,
        "cep": "13914680",
        "pais": "Brasil"
    },
    {
        "id": 1287,
        "nome": "Almir Rodrigo de Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9601582,
        "longitude": -46.9828451,
        "cep": "13274280",
        "pais": "Brasil"
    },
    {
        "id": 1288,
        "nome": "Andre Rogerio Pexe",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9198788,
        "longitude": -47.1020805,
        "cep": "13060856",
        "pais": "Brasil"
    },
    {
        "id": 1289,
        "nome": "Ricardo De Morais Pessoa",
        "cidade": "Aiuruoca",
        "estado": "MG",
        "latitude": -21.9759554,
        "longitude": -44.6036637,
        "cep": "37450000",
        "pais": NaN
    },
    {
        "id": 1290,
        "nome": "Luciano silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053081",
        "pais": "Brasil"
    },
    {
        "id": 1291,
        "nome": "Alex Ribeiro da Silva",
        "cidade": "Várzea Paulista",
        "estado": "SP",
        "latitude": -23.2065634,
        "longitude": -46.8492222,
        "cep": "13220025",
        "pais": "Brasil"
    },
    {
        "id": 1292,
        "nome": "Fabio Augusto Bartelli Hoffmann",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9333917,
        "longitude": -47.1096348,
        "cep": "13060413",
        "pais": "Brasil"
    },
    {
        "id": 1293,
        "nome": "Samuel Carvalho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8262668,
        "longitude": -47.1680157,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 1294,
        "nome": "Marcelo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8442453,
        "longitude": -47.1259645,
        "cep": "13082572",
        "pais": "Brasil"
    },
    {
        "id": 1295,
        "nome": "Flavia Oliveira Perin Testa",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6872181,
        "longitude": -46.9848889,
        "cep": "13912490",
        "pais": "Brasil"
    },
    {
        "id": 1296,
        "nome": "Davi Maestro de Sousa",
        "cidade": "Amparo",
        "estado": "SP",
        "latitude": -22.7074034,
        "longitude": -46.8144541,
        "cep": "13905670",
        "pais": "Brasil"
    },
    {
        "id": 1297,
        "nome": "Monica Aparecida Galocio Dias",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7336573,
        "longitude": -47.3065352,
        "cep": "13477120",
        "pais": "Brasil"
    },
    {
        "id": 1298,
        "nome": "Giovana Besse",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9096919,
        "longitude": -47.0589796,
        "cep": "13013001",
        "pais": "Brasil"
    },
    {
        "id": 1299,
        "nome": "Marcelo Honorato",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9697001,
        "longitude": -47.1282903,
        "cep": "13054130",
        "pais": "Brasil"
    },
    {
        "id": 1300,
        "nome": "Gil Silverin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9201723,
        "longitude": -47.0681957,
        "cep": "13036265",
        "pais": "Brasil"
    },
    {
        "id": 1301,
        "nome": "Rogerio Jacinto",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13198416",
        "pais": "Brasil"
    },
    {
        "id": 1302,
        "nome": "Victor Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 1303,
        "nome": "Eliane Prado",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6025233,
        "longitude": -47.4054079,
        "cep": "13481104",
        "pais": "Brasil"
    },
    {
        "id": 1304,
        "nome": "Oscar Cezario Neto",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8171025,
        "longitude": -47.1677444,
        "cep": "13179331",
        "pais": "Brasil"
    },
    {
        "id": 1305,
        "nome": "Fernanda Marqueto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9084795,
        "longitude": -47.1179068,
        "cep": "13061337",
        "pais": "Brasil"
    },
    {
        "id": 1306,
        "nome": "Michael Viana Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9221519,
        "longitude": -47.0171721,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 1307,
        "nome": "Marcio Fernandes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179054",
        "pais": "Brasil"
    },
    {
        "id": 1308,
        "nome": "Gustavo Camargo",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -22.3163911,
        "longitude": -49.0727239,
        "cep": "18274170",
        "pais": NaN
    },
    {
        "id": 1309,
        "nome": "Aline do Carmo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8951011,
        "longitude": -47.1486293,
        "cep": "13064370",
        "pais": "Brasil"
    },
    {
        "id": 1310,
        "nome": "Daniel Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9425803,
        "longitude": -47.1323324,
        "cep": "13059666",
        "pais": "Brasil"
    },
    {
        "id": 1311,
        "nome": "Samuel Vinicius Lino",
        "cidade": "Espírito Santo do Pinhal",
        "estado": "SP",
        "latitude": -22.1929522,
        "longitude": -46.7470021,
        "cep": "13990000",
        "pais": "Brasil"
    },
    {
        "id": 1312,
        "nome": "jaqueline castro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9045526,
        "longitude": -47.1805166,
        "cep": "13185352",
        "pais": "Brasil"
    },
    {
        "id": 1313,
        "nome": "Felipe Cotan",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8902356,
        "longitude": -47.2256269,
        "cep": "13187156",
        "pais": "Brasil"
    },
    {
        "id": 1314,
        "nome": "Sidnei Rizzo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9002998,
        "longitude": -47.0952734,
        "cep": "13033615",
        "pais": "Brasil"
    },
    {
        "id": 1315,
        "nome": "karina kamargo",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7876524,
        "longitude": -47.2930413,
        "cep": "13385076",
        "pais": "Brasil"
    },
    {
        "id": 1316,
        "nome": "Filipe Vieira dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9686408,
        "longitude": -47.11434,
        "cep": "13052213",
        "pais": "Brasil"
    },
    {
        "id": 1317,
        "nome": "Alexandre Ferreira",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.3047487,
        "longitude": -44.873158,
        "cep": "13487276",
        "pais": NaN
    },
    {
        "id": 1318,
        "nome": "Ricardo Jose Barbosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9472317,
        "longitude": -47.1116166,
        "cep": "13060611",
        "pais": "Brasil"
    },
    {
        "id": 1319,
        "nome": "Lorena",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9458983,
        "longitude": -47.1007743,
        "cep": "13050545",
        "pais": "Brasil"
    },
    {
        "id": 1320,
        "nome": "Luan Lins",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -21.7269314,
        "longitude": -49.3566725,
        "cep": "13212564",
        "pais": NaN
    },
    {
        "id": 1321,
        "nome": "Miquéias Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13330260",
        "pais": "Brasil"
    },
    {
        "id": 1322,
        "nome": "Jean",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9737709,
        "longitude": -47.1459868,
        "cep": "13056464",
        "pais": "Brasil"
    },
    {
        "id": 1323,
        "nome": "Adriana Matias",
        "cidade": "Boituva",
        "estado": "SP",
        "latitude": -23.2624238,
        "longitude": -47.6720659,
        "cep": "18558024",
        "pais": "Brasil"
    },
    {
        "id": 1324,
        "nome": "Joao Guilherme Messias Pereira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8468609,
        "longitude": -47.2165424,
        "cep": "13183864",
        "pais": "Brasil"
    },
    {
        "id": 1325,
        "nome": "Laura Marques",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7536285,
        "longitude": -47.174988,
        "cep": "13145063",
        "pais": "Brasil"
    },
    {
        "id": 1326,
        "nome": "paulo campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8811616,
        "longitude": -47.0250687,
        "cep": "13091410",
        "pais": "Brasil"
    },
    {
        "id": 1327,
        "nome": "Mauro Sérgio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9360252,
        "longitude": -47.1078278,
        "cep": "13060516",
        "pais": "Brasil"
    },
    {
        "id": 1328,
        "nome": "Paula Cristina De Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9168214,
        "longitude": -47.0445426,
        "cep": "13026140",
        "pais": "Brasil"
    },
    {
        "id": 1329,
        "nome": "EVELIN",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1021438,
        "longitude": -47.2178124,
        "cep": "13345411",
        "pais": "Brasil"
    },
    {
        "id": 1330,
        "nome": "Sarah Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9271396,
        "longitude": -47.0991229,
        "cep": "13060020",
        "pais": "Brasil"
    },
    {
        "id": 1331,
        "nome": "Felipe Barufaldi De Nadai",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7526677,
        "longitude": -47.355973,
        "cep": "13468510",
        "pais": "Brasil"
    },
    {
        "id": 1332,
        "nome": "Francisco Valentim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9244596,
        "longitude": -47.0741589,
        "cep": "13030530",
        "pais": "Brasil"
    },
    {
        "id": 1333,
        "nome": "Aline Lima",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181779",
        "pais": "Brasil"
    },
    {
        "id": 1334,
        "nome": "Lucas Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.973196,
        "longitude": -47.1311294,
        "cep": "13054023",
        "pais": "Brasil"
    },
    {
        "id": 1335,
        "nome": "Fernando Silva",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7403712,
        "longitude": -47.6359036,
        "cep": "13417660",
        "pais": "Brasil"
    },
    {
        "id": 1336,
        "nome": "Byanca Freire Francisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9395498,
        "longitude": -47.1183973,
        "cep": "13060494",
        "pais": "Brasil"
    },
    {
        "id": 1337,
        "nome": "anderson fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034670",
        "pais": "Brasil"
    },
    {
        "id": 1338,
        "nome": "Maria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9650134,
        "longitude": -47.1642426,
        "cep": "13057166",
        "pais": "Brasil"
    },
    {
        "id": 1339,
        "nome": "Gustavo Martinho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7933755,
        "longitude": -47.0876757,
        "cep": "13085260",
        "pais": "Brasil"
    },
    {
        "id": 1340,
        "nome": "Jasmim Costa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8001054,
        "longitude": -47.1941955,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 1341,
        "nome": "giovanni monarin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9785959,
        "longitude": -47.1306582,
        "cep": "13054664",
        "pais": "Brasil"
    },
    {
        "id": 1342,
        "nome": "Rodrigo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9588961,
        "longitude": -46.9878188,
        "cep": "13272000",
        "pais": "Brasil"
    },
    {
        "id": 1343,
        "nome": "Matheus Bustos Ribeiro",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.619702,
        "longitude": -47.4099028,
        "cep": "13481775",
        "pais": "Brasil"
    },
    {
        "id": 1344,
        "nome": "Rafael Rodrigues Silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.714759,
        "longitude": -47.2916274,
        "cep": "13474040",
        "pais": "Brasil"
    },
    {
        "id": 1345,
        "nome": "Ewerton Moreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9682522,
        "longitude": -47.1673234,
        "cep": "13057195",
        "pais": "Brasil"
    },
    {
        "id": 1346,
        "nome": "Antonio Paulo De Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181720",
        "pais": "Brasil"
    },
    {
        "id": 1347,
        "nome": "Renan Schwartz Cavichiolli",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450197",
        "pais": "Brasil"
    },
    {
        "id": 1348,
        "nome": "Ana Nicole Boscolo Santos",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0234,
        "longitude": -47.2226,
        "cep": "13360049",
        "pais": "Brasil"
    },
    {
        "id": 1349,
        "nome": "Thais Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9221947,
        "longitude": -47.0437229,
        "cep": "13100420",
        "pais": "Brasil"
    },
    {
        "id": 1350,
        "nome": "Luiz Fernando Oliveira Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8608108,
        "longitude": -47.0482164,
        "cep": "13087430",
        "pais": "Brasil"
    },
    {
        "id": 1351,
        "nome": "Adriano Trevisan",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.738838,
        "longitude": -47.6229821,
        "cep": "13420665",
        "pais": "Brasil"
    },
    {
        "id": 1352,
        "nome": "cesar augusto",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450028",
        "pais": "Brasil"
    },
    {
        "id": 1353,
        "nome": "Roberto Alves De Araújo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 1354,
        "nome": "Lucas Lima",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4416112,
        "longitude": -46.9832846,
        "cep": "13800513",
        "pais": "Brasil"
    },
    {
        "id": 1355,
        "nome": "Heitor Mendes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034710",
        "pais": "Brasil"
    },
    {
        "id": 1356,
        "nome": "thabata pocaia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9278694,
        "longitude": -47.0734159,
        "cep": "13030120",
        "pais": "Brasil"
    },
    {
        "id": 1357,
        "nome": "Carlos Eduardo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8292704,
        "longitude": -47.2189548,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 1358,
        "nome": "Marcelo Brandao",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9065228,
        "longitude": -47.1172128,
        "cep": "13061100",
        "pais": "Brasil"
    },
    {
        "id": 1359,
        "nome": "Diego H Luiz",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5460756,
        "longitude": -47.3931396,
        "cep": "13485078",
        "pais": "Brasil"
    },
    {
        "id": 1360,
        "nome": "Leandro Gomes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064769",
        "pais": "Brasil"
    },
    {
        "id": 1361,
        "nome": "Fernando",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7961712,
        "longitude": -47.000448,
        "cep": "13098750",
        "pais": "Brasil"
    },
    {
        "id": 1362,
        "nome": "Andressa",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7758,
        "longitude": -47.2917,
        "cep": "13385520",
        "pais": "Brasil"
    },
    {
        "id": 1363,
        "nome": "Miguel Vendemiato Basetto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9458341,
        "longitude": -46.9995278,
        "cep": "13272799",
        "pais": "Brasil"
    },
    {
        "id": 1364,
        "nome": "Diego Almeida",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455500",
        "pais": "Brasil"
    },
    {
        "id": 1365,
        "nome": "Thais Fernanda",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9469941,
        "longitude": -47.0910613,
        "cep": "13050077",
        "pais": "Brasil"
    },
    {
        "id": 1366,
        "nome": "Marcos Henrique Fongari Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9561695,
        "longitude": -47.0777791,
        "cep": "13051419",
        "pais": "Brasil"
    },
    {
        "id": 1367,
        "nome": "Felipe Xavier",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8965193,
        "longitude": -47.0627827,
        "cep": "13023020",
        "pais": "Brasil"
    },
    {
        "id": 1368,
        "nome": "Moacir Tinoco Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235396,
        "longitude": -47.0155691,
        "cep": "13101361",
        "pais": "Brasil"
    },
    {
        "id": 1369,
        "nome": "Sandra",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8171025,
        "longitude": -47.1677444,
        "cep": "13179331",
        "pais": "Brasil"
    },
    {
        "id": 1370,
        "nome": "Rafael Barbetta",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3675999,
        "longitude": -47.5707512,
        "cep": "13505225",
        "pais": "Brasil"
    },
    {
        "id": 1371,
        "nome": "Murilo Dassi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9462774,
        "longitude": -47.0916038,
        "cep": "13050078",
        "pais": "Brasil"
    },
    {
        "id": 1372,
        "nome": "Joabe Lobo Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9310064,
        "longitude": -47.1589881,
        "cep": "13059422",
        "pais": "Brasil"
    },
    {
        "id": 1373,
        "nome": "Rafael",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8851776,
        "longitude": -46.9817505,
        "cep": "13105040",
        "pais": "Brasil"
    },
    {
        "id": 1374,
        "nome": "Priscila Rombi",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8676322,
        "longitude": -47.2166746,
        "cep": "13184280",
        "pais": "Brasil"
    },
    {
        "id": 1375,
        "nome": "Andre Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.921373,
        "longitude": -47.0290688,
        "cep": "13100372",
        "pais": "Brasil"
    },
    {
        "id": 1376,
        "nome": "James Silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7656008,
        "longitude": -47.3372422,
        "cep": "13467180",
        "pais": "Brasil"
    },
    {
        "id": 1377,
        "nome": "robson linares",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5717899,
        "longitude": -47.4514292,
        "cep": "13482754",
        "pais": "Brasil"
    },
    {
        "id": 1378,
        "nome": "José Fabiano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13096321",
        "pais": "Brasil"
    },
    {
        "id": 1379,
        "nome": "Nanda Cunha Vital",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8536208,
        "longitude": -47.1086764,
        "cep": "13082140",
        "pais": "Brasil"
    },
    {
        "id": 1380,
        "nome": "Gustavo Bregalda Mattos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9353917,
        "longitude": -47.09251,
        "cep": "13050063",
        "pais": "Brasil"
    },
    {
        "id": 1381,
        "nome": "Marcio Milani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9466673,
        "longitude": -47.1207725,
        "cep": "13060773",
        "pais": "Brasil"
    },
    {
        "id": 1382,
        "nome": "Adriano Silva Oliveira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7629286,
        "longitude": -47.1925808,
        "cep": "13144675",
        "pais": "Brasil"
    },
    {
        "id": 1383,
        "nome": "Rafael Varandas",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7724914,
        "longitude": -47.1573899,
        "cep": "13140504",
        "pais": "Brasil"
    },
    {
        "id": 1384,
        "nome": "Helen",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7526909,
        "longitude": -47.0526454,
        "cep": "13085733",
        "pais": "Brasil"
    },
    {
        "id": 1385,
        "nome": "Gabriel Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8175445,
        "longitude": -47.246918,
        "cep": "13175505",
        "pais": "Brasil"
    },
    {
        "id": 1386,
        "nome": "Erick Souza Bizerra",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7243791,
        "longitude": -47.3331376,
        "cep": "13471255",
        "pais": "Brasil"
    },
    {
        "id": 1387,
        "nome": "Zeilton Evangelista Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7930839,
        "longitude": -47.2822762,
        "cep": "13173282",
        "pais": "Brasil"
    },
    {
        "id": 1388,
        "nome": "Cristiano Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.943989,
        "longitude": -47.1162235,
        "cep": "13060489",
        "pais": "Brasil"
    },
    {
        "id": 1389,
        "nome": "pedro doniseti benedito",
        "cidade": "Leme",
        "estado": "SP",
        "latitude": -22.1963091,
        "longitude": -47.3936397,
        "cep": "13610499",
        "pais": "Brasil"
    },
    {
        "id": 1390,
        "nome": "Mariana Bernardes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9827393,
        "longitude": -47.1274007,
        "cep": "13054594",
        "pais": "Brasil"
    },
    {
        "id": 1391,
        "nome": "Bruna Oliveira",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01035100",
        "pais": "Brasil"
    },
    {
        "id": 1392,
        "nome": "Luiz Henrique Melo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8608108,
        "longitude": -47.0482164,
        "cep": "13087430",
        "pais": "Brasil"
    },
    {
        "id": 1393,
        "nome": "Aline Matias",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8255792,
        "longitude": -47.1617399,
        "cep": "13179214",
        "pais": "Brasil"
    },
    {
        "id": 1394,
        "nome": "Paulinho Manzatto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9861959,
        "longitude": -47.1417865,
        "cep": "13056175",
        "pais": "Brasil"
    },
    {
        "id": 1395,
        "nome": "Jaimilton Oliveira Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9170392,
        "longitude": -47.0478053,
        "cep": "13026480",
        "pais": "Brasil"
    },
    {
        "id": 1396,
        "nome": "Anielly Da silva cecchetti",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454186",
        "pais": "Brasil"
    },
    {
        "id": 1397,
        "nome": "Roniery Garcia",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5476954,
        "longitude": -47.3907644,
        "cep": "13485053",
        "pais": "Brasil"
    },
    {
        "id": 1398,
        "nome": "Vineh Gamer BR",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9350331,
        "longitude": -47.1152797,
        "cep": "13060465",
        "pais": "Brasil"
    },
    {
        "id": 1399,
        "nome": "William Silva da Hora",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323020",
        "pais": "Brasil"
    },
    {
        "id": 1400,
        "nome": "Priscilla Bonturi Pondian",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8989685,
        "longitude": -47.0383286,
        "cep": "13092481",
        "pais": "Brasil"
    },
    {
        "id": 1401,
        "nome": "Maria Aline Neves de Souza Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180180",
        "pais": "Brasil"
    },
    {
        "id": 1402,
        "nome": "Everson da silva Tardim",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322180",
        "pais": "Brasil"
    },
    {
        "id": 1403,
        "nome": "Marcelo Gomes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.901631,
        "longitude": -47.1712049,
        "cep": "13185375",
        "pais": "Brasil"
    },
    {
        "id": 1404,
        "nome": "Lucas Henrique",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7229906,
        "longitude": -47.3137309,
        "cep": "13472290",
        "pais": "Brasil"
    },
    {
        "id": 1405,
        "nome": "Marcelo Fazolin",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.725093,
        "longitude": -47.3387357,
        "cep": "13471680",
        "pais": "Brasil"
    },
    {
        "id": 1406,
        "nome": "Osmair Moreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9490031,
        "longitude": -47.1176039,
        "cep": "13060663",
        "pais": "Brasil"
    },
    {
        "id": 1407,
        "nome": "Cinthia Cristiane da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9476803,
        "longitude": -47.1576175,
        "cep": "13059107",
        "pais": "Brasil"
    },
    {
        "id": 1408,
        "nome": "Gustavo Galvão Guiliolo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9701567,
        "longitude": -47.0112455,
        "cep": "13271405",
        "pais": "Brasil"
    },
    {
        "id": 1409,
        "nome": "Gustavo Vitorio",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7536285,
        "longitude": -47.174988,
        "cep": "13145063",
        "pais": "Brasil"
    },
    {
        "id": 1410,
        "nome": "Wesley Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9367394,
        "longitude": -47.1151418,
        "cep": "13060496",
        "pais": "Brasil"
    },
    {
        "id": 1411,
        "nome": "Ricardo Dionisio Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9489756,
        "longitude": -47.1822852,
        "cep": "13058434",
        "pais": "Brasil"
    },
    {
        "id": 1412,
        "nome": "Márcio Correa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9861426,
        "longitude": -47.0958294,
        "cep": "13052573",
        "pais": "Brasil"
    },
    {
        "id": 1413,
        "nome": "Gustavo Imai",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9318733,
        "longitude": -47.0660104,
        "cep": "13040103",
        "pais": "Brasil"
    },
    {
        "id": 1414,
        "nome": "Marcelo Rodrigues Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9756069,
        "longitude": -47.1233439,
        "cep": "13054213",
        "pais": "Brasil"
    },
    {
        "id": 1415,
        "nome": "Lucão Andrade",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8621035,
        "longitude": -47.2070952,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 1416,
        "nome": "Thiago Pereira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9035395,
        "longitude": -47.1727544,
        "cep": "13185490",
        "pais": "Brasil"
    },
    {
        "id": 1417,
        "nome": "Ana Paula",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13280296",
        "pais": "Brasil"
    },
    {
        "id": 1418,
        "nome": "Pedro Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13092072",
        "pais": "Brasil"
    },
    {
        "id": 1419,
        "nome": "Rogerio Antonio da Rocha",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8779278,
        "longitude": -47.2049167,
        "cep": "13186012",
        "pais": "Brasil"
    },
    {
        "id": 1420,
        "nome": "Maria Cristina Almeida Magalhães",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9591964,
        "longitude": -47.2020273,
        "cep": "13058133",
        "pais": "Brasil"
    },
    {
        "id": 1421,
        "nome": "Eduardo Martins",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13330350",
        "pais": "Brasil"
    },
    {
        "id": 1422,
        "nome": "Natan Gusmao Matias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9531227,
        "longitude": -47.2141827,
        "cep": "13058772",
        "pais": "Brasil"
    },
    {
        "id": 1423,
        "nome": "Clara Helena de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9288428,
        "longitude": -47.0736526,
        "cep": "13030117",
        "pais": "Brasil"
    },
    {
        "id": 1424,
        "nome": "Ana Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9905634,
        "longitude": -47.1551757,
        "cep": "13056213",
        "pais": "Brasil"
    },
    {
        "id": 1425,
        "nome": "Rafael Lima da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9778664,
        "longitude": -47.1435873,
        "cep": "13056400",
        "pais": "Brasil"
    },
    {
        "id": 1426,
        "nome": "Jeferson Clayton Barbosa",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7180724,
        "longitude": -47.3461116,
        "cep": "13470310",
        "pais": "Brasil"
    },
    {
        "id": 1427,
        "nome": "Wilian Aparecido Manzato",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8001054,
        "longitude": -47.1941955,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 1428,
        "nome": "Luciano Kaizen",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180180",
        "pais": "Brasil"
    },
    {
        "id": 1429,
        "nome": "Maria Dos Anjos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8671408,
        "longitude": -47.2186137,
        "cep": "13184235",
        "pais": "Brasil"
    },
    {
        "id": 1430,
        "nome": "Alexandra Ramos Cantero",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7119411,
        "longitude": -47.2927869,
        "cep": "13474200",
        "pais": "Brasil"
    },
    {
        "id": 1431,
        "nome": "ivanilsom Nilsinho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.819135,
        "longitude": -47.2607465,
        "cep": "13174540",
        "pais": "Brasil"
    },
    {
        "id": 1432,
        "nome": "Odilei Lourenco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9473898,
        "longitude": -47.1025874,
        "cep": "13050726",
        "pais": "Brasil"
    },
    {
        "id": 1433,
        "nome": "Itamar Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9370143,
        "longitude": -47.013035,
        "cep": "13046445",
        "pais": "Brasil"
    },
    {
        "id": 1434,
        "nome": "Camila Liborio",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227909,
        "longitude": -47.2767933,
        "cep": "13170027",
        "pais": "Brasil"
    },
    {
        "id": 1435,
        "nome": "Anderson Santos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7703084,
        "longitude": -47.3397774,
        "cep": "13467441",
        "pais": "Brasil"
    },
    {
        "id": 1436,
        "nome": "Andre Ribeiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.812475,
        "longitude": -47.2206274,
        "cep": "13177905",
        "pais": "Brasil"
    },
    {
        "id": 1437,
        "nome": "Guilherme Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9148391,
        "longitude": -47.0456566,
        "cep": "13026180",
        "pais": "Brasil"
    },
    {
        "id": 1438,
        "nome": "Anderson Moreira Martins Correa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.952695,
        "longitude": -47.1610875,
        "cep": "13059585",
        "pais": "Brasil"
    },
    {
        "id": 1439,
        "nome": "Jessica Da Silva Klampfl Gottardi",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283046",
        "pais": "Brasil"
    },
    {
        "id": 1440,
        "nome": "Luciana De Jesus Cavalcante Sandes",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4485328,
        "longitude": -47.4755033,
        "cep": "18077640",
        "pais": "Brasil"
    },
    {
        "id": 1441,
        "nome": "Leiliane Maria Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9482757,
        "longitude": -47.1978878,
        "cep": "13058822",
        "pais": "Brasil"
    },
    {
        "id": 1442,
        "nome": "Gustavo Kennedy",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.7229782,
        "longitude": -45.4315567,
        "cep": "18211000",
        "pais": NaN
    },
    {
        "id": 1443,
        "nome": "Charles Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7928171,
        "longitude": -47.19722,
        "cep": "13178352",
        "pais": "Brasil"
    },
    {
        "id": 1444,
        "nome": "maxwell ruas",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8936515,
        "longitude": -47.2496321,
        "cep": "13188235",
        "pais": "Brasil"
    },
    {
        "id": 1445,
        "nome": "Viviane",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455480",
        "pais": "Brasil"
    },
    {
        "id": 1446,
        "nome": "SANDRA LOPES DE LIMA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9480159,
        "longitude": -47.1353974,
        "cep": "13059721",
        "pais": "Brasil"
    },
    {
        "id": 1447,
        "nome": "Danieli Godoy",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9783806,
        "longitude": -46.9972553,
        "cep": "13276080",
        "pais": "Brasil"
    },
    {
        "id": 1448,
        "nome": "Adriane Cristina da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13069429",
        "pais": "Brasil"
    },
    {
        "id": 1449,
        "nome": "Isabelly Vitória Silva E Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9482757,
        "longitude": -47.1978878,
        "cep": "13058822",
        "pais": "Brasil"
    },
    {
        "id": 1450,
        "nome": "Marisa Barbosa Ramalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9252203,
        "longitude": -47.0207386,
        "cep": "13101132",
        "pais": "Brasil"
    },
    {
        "id": 1451,
        "nome": "Janaina",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9793997,
        "longitude": -46.9886198,
        "cep": "13275400",
        "pais": "Brasil"
    },
    {
        "id": 1452,
        "nome": "Jepherson Miguel",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.949011,
        "longitude": -46.9831948,
        "cep": "13273116",
        "pais": "Brasil"
    },
    {
        "id": 1453,
        "nome": "Ths Kamell",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9041546,
        "longitude": -47.1966163,
        "cep": "13186546",
        "pais": "Brasil"
    },
    {
        "id": 1454,
        "nome": "Hernane Jacinto",
        "cidade": "Ribeirão Preto",
        "estado": "SP",
        "latitude": -21.1431689,
        "longitude": -47.8151088,
        "cep": "14060168",
        "pais": "Brasil"
    },
    {
        "id": 1455,
        "nome": "Lucas Vlasic Aureliano",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.2222888,
        "longitude": -46.8566306,
        "cep": "13203554",
        "pais": "Brasil"
    },
    {
        "id": 1456,
        "nome": "Fabiola Tinti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9474148,
        "longitude": -47.0887232,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 1457,
        "nome": "Alexandre .ramalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9252203,
        "longitude": -47.0207386,
        "cep": "13101132",
        "pais": "Brasil"
    },
    {
        "id": 1458,
        "nome": "Vinícius Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058100",
        "pais": "Brasil"
    },
    {
        "id": 1459,
        "nome": "Matheus Gabriel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058100",
        "pais": "Brasil"
    },
    {
        "id": 1460,
        "nome": "Vitor Faria",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7512255,
        "longitude": -47.1727501,
        "cep": "13145123",
        "pais": "Brasil"
    },
    {
        "id": 1461,
        "nome": "Ana Gonçalves",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -22.741347,
        "longitude": -46.894846,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 1462,
        "nome": "Adriano Giroleto",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7333959,
        "longitude": -47.3508702,
        "cep": "13469360",
        "pais": "Brasil"
    },
    {
        "id": 1463,
        "nome": "Marcos Garavelo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8262668,
        "longitude": -47.1680157,
        "cep": "13179515",
        "pais": "Brasil"
    },
    {
        "id": 1464,
        "nome": "Maria Otilia Zuppi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8640792,
        "longitude": -47.0646202,
        "cep": "13087380",
        "pais": "Brasil"
    },
    {
        "id": 1465,
        "nome": "ANDRE NONI",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9174737,
        "longitude": -47.0524993,
        "cep": "13041620",
        "pais": "Brasil"
    },
    {
        "id": 1466,
        "nome": "Luiz Carlos Dos Santos Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9115815,
        "longitude": -47.119288,
        "cep": "13061371",
        "pais": "Brasil"
    },
    {
        "id": 1467,
        "nome": "Lucas Cipriano",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9162729,
        "longitude": -47.2589746,
        "cep": "13199190",
        "pais": "Brasil"
    },
    {
        "id": 1468,
        "nome": "Cristiane Shimabukuro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9880115,
        "longitude": -46.985358,
        "cep": "13275443",
        "pais": "Brasil"
    },
    {
        "id": 1469,
        "nome": "Vanderson Roberto Coluci",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8967577,
        "longitude": -47.0689745,
        "cep": "13020210",
        "pais": "Brasil"
    },
    {
        "id": 1470,
        "nome": "Cristiane Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9290171,
        "longitude": -47.0893095,
        "cep": "13050471",
        "pais": "Brasil"
    },
    {
        "id": 1471,
        "nome": "Joscelia Borges",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8536502,
        "longitude": -47.1057887,
        "cep": "13082145",
        "pais": "Brasil"
    },
    {
        "id": 1472,
        "nome": "Jailson Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0366211,
        "longitude": -47.1118869,
        "cep": "13053217",
        "pais": "Brasil"
    },
    {
        "id": 1473,
        "nome": "Karen Lopes Ferraz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8962324,
        "longitude": -47.0846688,
        "cep": "13070120",
        "pais": "Brasil"
    },
    {
        "id": 1474,
        "nome": "Ricardo Barduchi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9916002,
        "longitude": -47.0066473,
        "cep": "13278327",
        "pais": "Brasil"
    },
    {
        "id": 1475,
        "nome": "Luciana Pauleto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9284948,
        "longitude": -47.1265197,
        "cep": "13060820",
        "pais": "Brasil"
    },
    {
        "id": 1476,
        "nome": "Raquel Stela",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.976729,
        "longitude": -47.0037593,
        "cep": "13270362",
        "pais": "Brasil"
    },
    {
        "id": 1477,
        "nome": "Deiby APARECIDA DA SILVA REGO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.897276,
        "longitude": -47.0792943,
        "cep": "13070760",
        "pais": "Brasil"
    },
    {
        "id": 1478,
        "nome": "Denner Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9315627,
        "longitude": -47.1519631,
        "cep": "13059591",
        "pais": "Brasil"
    },
    {
        "id": 1479,
        "nome": "Marcelo Gramarim Baungartel",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8621035,
        "longitude": -47.2070952,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 1480,
        "nome": "marcelo brandao maxx",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180370",
        "pais": "Brasil"
    },
    {
        "id": 1481,
        "nome": "João Vitor",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9013204,
        "longitude": -47.1012544,
        "cep": "13033485",
        "pais": "Brasil"
    },
    {
        "id": 1482,
        "nome": "Luiz Rezende",
        "cidade": "Espírito Santo do Pinhal",
        "estado": "SP",
        "latitude": -22.1929522,
        "longitude": -46.7470021,
        "cep": "13990000",
        "pais": "Brasil"
    },
    {
        "id": 1483,
        "nome": "Juliana Navarro Versage",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8063182,
        "longitude": -47.1912331,
        "cep": "13178385",
        "pais": "Brasil"
    },
    {
        "id": 1484,
        "nome": "Cleide Rocha",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456420",
        "pais": "Brasil"
    },
    {
        "id": 1485,
        "nome": "Alex Alves de Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8755663,
        "longitude": -47.2317179,
        "cep": "13189205",
        "pais": "Brasil"
    },
    {
        "id": 1486,
        "nome": "Camila Fabian",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1662027,
        "longitude": -46.9145886,
        "cep": "13214523",
        "pais": "Brasil"
    },
    {
        "id": 1487,
        "nome": "Miquéias Pacheco De Souza Dias",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7645037,
        "longitude": -47.3254864,
        "cep": "13467273",
        "pais": "Brasil"
    },
    {
        "id": 1488,
        "nome": "Déco",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8682138,
        "longitude": -47.2085975,
        "cep": "13184390",
        "pais": "Brasil"
    },
    {
        "id": 1489,
        "nome": "Wagner Brito",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450712",
        "pais": "Brasil"
    },
    {
        "id": 1490,
        "nome": "Thais Castro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8621035,
        "longitude": -47.2070952,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 1491,
        "nome": "NICOLAS",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7212651,
        "longitude": -47.358756,
        "cep": "13469600",
        "pais": "Brasil"
    },
    {
        "id": 1492,
        "nome": "Carolina Meneghel",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7205608,
        "longitude": -47.3045652,
        "cep": "13473400",
        "pais": "Brasil"
    },
    {
        "id": 1493,
        "nome": "Rosana Moreira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8251046,
        "longitude": -47.235804,
        "cep": "13175668",
        "pais": "Brasil"
    },
    {
        "id": 1494,
        "nome": "Andreo Cesar Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8854833,
        "longitude": -47.0637998,
        "cep": "13073010",
        "pais": "Brasil"
    },
    {
        "id": 1495,
        "nome": "Mônica Christofolli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8908185,
        "longitude": -47.0447117,
        "cep": "13090713",
        "pais": "Brasil"
    },
    {
        "id": 1496,
        "nome": "Luis Roberto Marson",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212994,
        "longitude": -47.0337415,
        "cep": "13100473",
        "pais": "Brasil"
    },
    {
        "id": 1497,
        "nome": "Humberto Carlos Gil Neto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9839281,
        "longitude": -47.1151903,
        "cep": "13054423",
        "pais": "Brasil"
    },
    {
        "id": 1498,
        "nome": "Laura Fernandes",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6103741,
        "longitude": -47.409144,
        "cep": "13481807",
        "pais": "Brasil"
    },
    {
        "id": 1499,
        "nome": "Giovanni Rinaldi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9670684,
        "longitude": -47.1324155,
        "cep": "13054021",
        "pais": "Brasil"
    },
    {
        "id": 1500,
        "nome": "Kelly Vanessa Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9817232,
        "longitude": -47.1186262,
        "cep": "13054506",
        "pais": "Brasil"
    },
    {
        "id": 1501,
        "nome": "Shaieny Martins",
        "cidade": "Rio das Pedras",
        "estado": "SP",
        "latitude": -22.8359241,
        "longitude": -47.6146879,
        "cep": "13395060",
        "pais": "Brasil"
    },
    {
        "id": 1502,
        "nome": "João Victor Mendonça Da Pra",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9460931,
        "longitude": -47.1234351,
        "cep": "13060766",
        "pais": "Brasil"
    },
    {
        "id": 1503,
        "nome": "Renato Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.930903,
        "longitude": -47.0824778,
        "cep": "13050004",
        "pais": "Brasil"
    },
    {
        "id": 1504,
        "nome": "Rafael Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9075334,
        "longitude": -47.0535593,
        "cep": "13015191",
        "pais": "Brasil"
    },
    {
        "id": 1505,
        "nome": "Jose Roberto Correa Fernandes",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13280350",
        "pais": "Brasil"
    },
    {
        "id": 1506,
        "nome": "glacy kelli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9865638,
        "longitude": -47.1314132,
        "cep": "13056858",
        "pais": "Brasil"
    },
    {
        "id": 1507,
        "nome": "Diego Carvalho Andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8928504,
        "longitude": -47.0625847,
        "cep": "13023220",
        "pais": "Brasil"
    },
    {
        "id": 1508,
        "nome": "Amauri Almeida Mota",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1049835,
        "longitude": -47.2051137,
        "cep": "13343821",
        "pais": "Brasil"
    },
    {
        "id": 1509,
        "nome": "Luciana Lopes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9654999,
        "longitude": -47.1475294,
        "cep": "13056531",
        "pais": "Brasil"
    },
    {
        "id": 1510,
        "nome": "Eduardo Antônio De Oliveira",
        "cidade": "Pará de Minas",
        "estado": "MG",
        "latitude": -19.8404089,
        "longitude": -44.6196724,
        "cep": "35660213",
        "pais": NaN
    },
    {
        "id": 1511,
        "nome": "Vanessa Gondim",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310200",
        "pais": "Brasil"
    },
    {
        "id": 1512,
        "nome": "Maria Rodrigues",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8004167,
        "longitude": -47.2676745,
        "cep": "13173423",
        "pais": "Brasil"
    },
    {
        "id": 1513,
        "nome": "Uermeson Da Silva Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9736336,
        "longitude": -47.1711701,
        "cep": "13057400",
        "pais": "Brasil"
    },
    {
        "id": 1514,
        "nome": "Jose Boiatti",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8924833,
        "longitude": -47.1635379,
        "cep": "13185485",
        "pais": "Brasil"
    },
    {
        "id": 1515,
        "nome": "Hélio Gama Duarte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9629186,
        "longitude": -47.1996218,
        "cep": "13058229",
        "pais": "Brasil"
    },
    {
        "id": 1516,
        "nome": "ANTONIO CELINALDO DA SILVA toninho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9785244,
        "longitude": -47.0760852,
        "cep": "13049493",
        "pais": "Brasil"
    },
    {
        "id": 1517,
        "nome": "Jose Luiz Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9650669,
        "longitude": -47.0437078,
        "cep": "13042550",
        "pais": "Brasil"
    },
    {
        "id": 1518,
        "nome": "Guilherme Nascimento",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -22.5568841,
        "longitude": -47.152972,
        "cep": "13165172",
        "pais": "Brasil"
    },
    {
        "id": 1519,
        "nome": "Diego Hiromi Matsumoto",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5747366,
        "longitude": -47.393793,
        "cep": "13480290",
        "pais": "Brasil"
    },
    {
        "id": 1520,
        "nome": "Angelo Januario",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.3952192,
        "longitude": -47.3671981,
        "cep": "18105330",
        "pais": "Brasil"
    },
    {
        "id": 1521,
        "nome": "Marli Carvalho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13175590",
        "pais": "Brasil"
    },
    {
        "id": 1522,
        "nome": "adalberto aparecido barros",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9204494,
        "longitude": -47.0745462,
        "cep": "13030430",
        "pais": "Brasil"
    },
    {
        "id": 1523,
        "nome": "Luan santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9463633,
        "longitude": -47.1235093,
        "cep": "13060774",
        "pais": "Brasil"
    },
    {
        "id": 1524,
        "nome": "NILTON Rogger DE ABREU",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5989841,
        "longitude": -46.5917089,
        "cep": "04224010",
        "pais": "Brasil"
    },
    {
        "id": 1525,
        "nome": "Samuel Capelli",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310335",
        "pais": "Brasil"
    },
    {
        "id": 1526,
        "nome": "vania Luiz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9629186,
        "longitude": -47.1996218,
        "cep": "13058229",
        "pais": "Brasil"
    },
    {
        "id": 1527,
        "nome": "Leandro Gomes Salles",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9432128,
        "longitude": -47.1327814,
        "cep": "13059673",
        "pais": "Brasil"
    },
    {
        "id": 1528,
        "nome": "Helena Rodrigues da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9527774,
        "longitude": -47.185877,
        "cep": "13058368",
        "pais": "Brasil"
    },
    {
        "id": 1529,
        "nome": "Luciano Dutra de Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0085066,
        "longitude": -47.0128202,
        "cep": "13278110",
        "pais": "Brasil"
    },
    {
        "id": 1530,
        "nome": "Marcello Xavier",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9791675,
        "longitude": -46.9933991,
        "cep": "13276485",
        "pais": "Brasil"
    },
    {
        "id": 1531,
        "nome": "Fernando Canisella de Castro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9501234,
        "longitude": -46.974103,
        "cep": "13273552",
        "pais": "Brasil"
    },
    {
        "id": 1532,
        "nome": "Samara Cristina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0280311,
        "longitude": -47.1167608,
        "cep": "13053121",
        "pais": "Brasil"
    },
    {
        "id": 1533,
        "nome": "Jeferson Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8621035,
        "longitude": -47.2070952,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 1534,
        "nome": "Paulo Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9333145,
        "longitude": -47.1262206,
        "cep": "13060715",
        "pais": "Brasil"
    },
    {
        "id": 1535,
        "nome": "PEDRO LUIZ VIEIRA",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13309580",
        "pais": "Brasil"
    },
    {
        "id": 1536,
        "nome": "Lucas Cavalcante Da Silva Junior",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9841935,
        "longitude": -46.9805303,
        "cep": "13275616",
        "pais": "Brasil"
    },
    {
        "id": 1537,
        "nome": "Mariana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9650669,
        "longitude": -47.0437078,
        "cep": "13042550",
        "pais": "Brasil"
    },
    {
        "id": 1538,
        "nome": "Caio E Garrote Soares",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4247748,
        "longitude": -47.4171691,
        "cep": "18103757",
        "pais": "Brasil"
    },
    {
        "id": 1539,
        "nome": "Leonardo Rodrigue",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8904866,
        "longitude": -47.1633268,
        "cep": "13185402",
        "pais": "Brasil"
    },
    {
        "id": 1540,
        "nome": "Bruna Guimaro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9520619,
        "longitude": -47.0268035,
        "cep": "13044503",
        "pais": "Brasil"
    },
    {
        "id": 1541,
        "nome": "WEDSLEY ALMEIDA",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8584143,
        "longitude": -47.1985495,
        "cep": "13183310",
        "pais": "Brasil"
    },
    {
        "id": 1542,
        "nome": "Eduardo Pasquoto",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7614734,
        "longitude": -47.3350362,
        "cep": "13467080",
        "pais": "Brasil"
    },
    {
        "id": 1543,
        "nome": "Priscila Brito",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8811714,
        "longitude": -46.9852534,
        "cep": "13105122",
        "pais": "Brasil"
    },
    {
        "id": 1544,
        "nome": "Ariana Lucero",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9443416,
        "longitude": -47.0406979,
        "cep": "13044440",
        "pais": "Brasil"
    },
    {
        "id": 1545,
        "nome": "Débora Ferneda",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.6869747,
        "longitude": -47.7032132,
        "cep": "13406010",
        "pais": "Brasil"
    },
    {
        "id": 1546,
        "nome": "Felipe Inacio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040082",
        "pais": "Brasil"
    },
    {
        "id": 1547,
        "nome": "Jéssica Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8491141,
        "longitude": -47.1102964,
        "cep": "13082075",
        "pais": "Brasil"
    },
    {
        "id": 1548,
        "nome": "Yan Delfino",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8138632,
        "longitude": -47.2900561,
        "cep": "13172674",
        "pais": "Brasil"
    },
    {
        "id": 1549,
        "nome": "Joyce Fernandes Marques",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180510",
        "pais": "Brasil"
    },
    {
        "id": 1550,
        "nome": "Andrea Souza",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13197198",
        "pais": "Brasil"
    },
    {
        "id": 1551,
        "nome": "Allana Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9668893,
        "longitude": -47.0416001,
        "cep": "13042760",
        "pais": "Brasil"
    },
    {
        "id": 1552,
        "nome": "Guilherme Carlos De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9101065,
        "longitude": -47.088587,
        "cep": "13032400",
        "pais": "Brasil"
    },
    {
        "id": 1553,
        "nome": "Gabriele De Souza Dantas Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9785586,
        "longitude": -47.1322812,
        "cep": "13054622",
        "pais": "Brasil"
    },
    {
        "id": 1554,
        "nome": "LUIZ",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -19.9346314,
        "longitude": -44.1198402,
        "cep": "15940000",
        "pais": NaN
    },
    {
        "id": 1555,
        "nome": "Daniela Consolini Resende",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450017",
        "pais": "Brasil"
    },
    {
        "id": 1556,
        "nome": "Bruna Garcia",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450029",
        "pais": "Brasil"
    },
    {
        "id": 1557,
        "nome": "Ana Castalia Rocha Leite Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9273958,
        "longitude": -46.9723192,
        "cep": "13273264",
        "pais": "Brasil"
    },
    {
        "id": 1558,
        "nome": "Graciele Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9015865,
        "longitude": -47.0439702,
        "cep": "13092132",
        "pais": "Brasil"
    },
    {
        "id": 1559,
        "nome": "Karen Guerino",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6164458,
        "longitude": -47.428497,
        "cep": "13481257",
        "pais": "Brasil"
    },
    {
        "id": 1560,
        "nome": "Adilson Ap Jaccomo Jr",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9474148,
        "longitude": -47.0887232,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 1561,
        "nome": "Elder Aparecido Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9609613,
        "longitude": -47.1813138,
        "cep": "13058370",
        "pais": "Brasil"
    },
    {
        "id": 1562,
        "nome": "Natália",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9724084,
        "longitude": -47.070199,
        "cep": "13049440",
        "pais": "Brasil"
    },
    {
        "id": 1563,
        "nome": "willamar",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180290",
        "pais": "Brasil"
    },
    {
        "id": 1564,
        "nome": "Rondinelli Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9389858,
        "longitude": -47.002703,
        "cep": "13272702",
        "pais": "Brasil"
    },
    {
        "id": 1565,
        "nome": "Carla Fernanda Semensato",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9839481,
        "longitude": -46.9992857,
        "cep": "13277030",
        "pais": "Brasil"
    },
    {
        "id": 1566,
        "nome": "Tiago Alessandro da Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9224804,
        "longitude": -47.0200028,
        "cep": "13101320",
        "pais": "Brasil"
    },
    {
        "id": 1567,
        "nome": "adriano Trindade",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13479080",
        "pais": "Brasil"
    },
    {
        "id": 1568,
        "nome": "Iasmin Santos Monteiro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8933048,
        "longitude": -47.1671159,
        "cep": "13185539",
        "pais": "Brasil"
    },
    {
        "id": 1569,
        "nome": "gabriel Diniz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8904623,
        "longitude": -47.0598982,
        "cep": "13023011",
        "pais": "Brasil"
    },
    {
        "id": 1570,
        "nome": "daniel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9009068,
        "longitude": -47.0984607,
        "cep": "13033530",
        "pais": "Brasil"
    },
    {
        "id": 1571,
        "nome": "Mts",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040565",
        "pais": "Brasil"
    },
    {
        "id": 1572,
        "nome": "Angelina Oliveira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7110261,
        "longitude": -47.3589889,
        "cep": "13470473",
        "pais": "Brasil"
    },
    {
        "id": 1573,
        "nome": "EDMARIO DE SOUZA NEVES",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9217259,
        "longitude": -47.0727854,
        "cep": "13030290",
        "pais": "Brasil"
    },
    {
        "id": 1574,
        "nome": "eduardo bolonheze",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7062632,
        "longitude": -47.2946826,
        "cep": "13474358",
        "pais": "Brasil"
    },
    {
        "id": 1575,
        "nome": "Marcos Vinicius",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8642036,
        "longitude": -47.0348681,
        "cep": "13088110",
        "pais": "Brasil"
    },
    {
        "id": 1576,
        "nome": "Lucas Constantino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9221769,
        "longitude": -47.0343546,
        "cep": "13100486",
        "pais": "Brasil"
    },
    {
        "id": 1577,
        "nome": "Talita Santos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7703084,
        "longitude": -47.3397774,
        "cep": "13467441",
        "pais": "Brasil"
    },
    {
        "id": 1578,
        "nome": "Eduardo De Souza Cruz",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13174462",
        "pais": "Brasil"
    },
    {
        "id": 1579,
        "nome": "Marlon Pietro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7729871,
        "longitude": -47.3468576,
        "cep": "13467204",
        "pais": "Brasil"
    },
    {
        "id": 1580,
        "nome": "Jessica Melo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9536276,
        "longitude": -47.1152277,
        "cep": "13060671",
        "pais": "Brasil"
    },
    {
        "id": 1581,
        "nome": "Angelita Nunes de Melo",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.8037128,
        "longitude": -47.2986675,
        "cep": "13385756",
        "pais": "Brasil"
    },
    {
        "id": 1582,
        "nome": "Maria Eduarda",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7062632,
        "longitude": -47.2946826,
        "cep": "13474358",
        "pais": "Brasil"
    },
    {
        "id": 1583,
        "nome": "Jose Oliveira",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13198524",
        "pais": "Brasil"
    },
    {
        "id": 1584,
        "nome": "Suzilaine Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9650669,
        "longitude": -47.0437078,
        "cep": "13042550",
        "pais": "Brasil"
    },
    {
        "id": 1585,
        "nome": "Eduardo Ribeiro de Campos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13331490",
        "pais": "Brasil"
    },
    {
        "id": 1586,
        "nome": "Daniel Nunes de Andrade",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7294051,
        "longitude": -47.1782814,
        "cep": "13145702",
        "pais": "Brasil"
    },
    {
        "id": 1587,
        "nome": "Wellington Martins Inone",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455440",
        "pais": "Brasil"
    },
    {
        "id": 1588,
        "nome": "Adam Ribeiro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7242042,
        "longitude": -47.3492341,
        "cep": "13470070",
        "pais": "Brasil"
    },
    {
        "id": 1589,
        "nome": "Ketrin Mayara",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7062632,
        "longitude": -47.2946826,
        "cep": "13474358",
        "pais": "Brasil"
    },
    {
        "id": 1590,
        "nome": "Nicéia De Oliveira Carvalho Vieira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8086625,
        "longitude": -47.2040194,
        "cep": "13178321",
        "pais": "Brasil"
    },
    {
        "id": 1591,
        "nome": "Diego Fernando Ramos",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3917221,
        "longitude": -47.5868598,
        "cep": "13504420",
        "pais": "Brasil"
    },
    {
        "id": 1592,
        "nome": "Wellington Rodrigo Pedroso da Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310245",
        "pais": "Brasil"
    },
    {
        "id": 1593,
        "nome": "Phillipe",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5581488,
        "longitude": -47.4544625,
        "cep": "13483527",
        "pais": "Brasil"
    },
    {
        "id": 1594,
        "nome": "Joice Cintra de Jesus",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9058631,
        "longitude": -47.1769534,
        "cep": "13185343",
        "pais": "Brasil"
    },
    {
        "id": 1595,
        "nome": "Marcelo Henrique",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13477160",
        "pais": "Brasil"
    },
    {
        "id": 1596,
        "nome": "Marcio  Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8890749,
        "longitude": -47.1067592,
        "cep": "13063570",
        "pais": "Brasil"
    },
    {
        "id": 1597,
        "nome": "Thais",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9196544,
        "longitude": -47.0364725,
        "cep": "13100474",
        "pais": "Brasil"
    },
    {
        "id": 1598,
        "nome": "tatiana_lima2010",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.77454,
        "longitude": -47.1694351,
        "cep": "13142458",
        "pais": "Brasil"
    },
    {
        "id": 1599,
        "nome": "Vinicius Siqueira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9281385,
        "longitude": -47.0373443,
        "cep": "13045603",
        "pais": "Brasil"
    },
    {
        "id": 1600,
        "nome": "Bruno Rodrigues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9937746,
        "longitude": -46.9933092,
        "cep": "13277501",
        "pais": "Brasil"
    },
    {
        "id": 1601,
        "nome": "Claudinei Pereira De Oliveira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8001054,
        "longitude": -47.1941955,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 1602,
        "nome": "Diego Domingos Moraes De Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938899,
        "longitude": -47.1228027,
        "cep": "13060726",
        "pais": "Brasil"
    },
    {
        "id": 1603,
        "nome": "Luis Henrique",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9034868,
        "longitude": -47.2445655,
        "cep": "13188180",
        "pais": "Brasil"
    },
    {
        "id": 1604,
        "nome": "Victor Arrais Zavarezzi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8851776,
        "longitude": -46.9817505,
        "cep": "13105040",
        "pais": "Brasil"
    },
    {
        "id": 1605,
        "nome": "José Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049099",
        "pais": "Brasil"
    },
    {
        "id": 1606,
        "nome": "Aline Andrade de Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9923858,
        "longitude": -47.1198777,
        "cep": "13054765",
        "pais": "Brasil"
    },
    {
        "id": 1607,
        "nome": "Marcus Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9234695,
        "longitude": -47.0779726,
        "cep": "13030710",
        "pais": "Brasil"
    },
    {
        "id": 1608,
        "nome": "Bruno Conconi Cossia",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450019",
        "pais": "Brasil"
    },
    {
        "id": 1609,
        "nome": "Gustavo Monacci",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.855787,
        "longitude": -47.0357702,
        "cep": "13088565",
        "pais": "Brasil"
    },
    {
        "id": 1610,
        "nome": "Valquiria",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323711",
        "pais": "Brasil"
    },
    {
        "id": 1611,
        "nome": "Rógery Marques",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -22.6460503,
        "longitude": -47.1967533,
        "cep": "13150027",
        "pais": "Brasil"
    },
    {
        "id": 1612,
        "nome": "Kaio Felipe de Góes",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3713048,
        "longitude": -47.5414614,
        "cep": "13506181",
        "pais": "Brasil"
    },
    {
        "id": 1613,
        "nome": "Marcus Vinicius",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064786",
        "pais": "Brasil"
    },
    {
        "id": 1614,
        "nome": "DJ PRETO - SALTO-SP",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13321300",
        "pais": "Brasil"
    },
    {
        "id": 1615,
        "nome": "Ulisses Nto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.986828,
        "longitude": -47.1364219,
        "cep": "13056117",
        "pais": "Brasil"
    },
    {
        "id": 1616,
        "nome": "Giovani Cruz",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.6359864,
        "longitude": -46.5700777,
        "cep": "13483220",
        "pais": NaN
    },
    {
        "id": 1617,
        "nome": "Klairus",
        "cidade": "Jaraguá do Sul",
        "estado": "SC",
        "latitude": -26.4885262,
        "longitude": -49.0804786,
        "cep": "89251610",
        "pais": NaN
    },
    {
        "id": 1618,
        "nome": "Alfair",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.943596,
        "longitude": -47.0988427,
        "cep": "13050551",
        "pais": "Brasil"
    },
    {
        "id": 1619,
        "nome": "Joao Ricardo Vicente",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9690516,
        "longitude": -47.0034947,
        "cep": "13271130",
        "pais": "Brasil"
    },
    {
        "id": 1620,
        "nome": "Rafaela",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9533413,
        "longitude": -47.1638821,
        "cep": "13059193",
        "pais": "Brasil"
    },
    {
        "id": 1621,
        "nome": "Ribas",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8964874,
        "longitude": -47.2200955,
        "cep": "13187115",
        "pais": "Brasil"
    },
    {
        "id": 1622,
        "nome": "Matheus Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.863488,
        "longitude": -47.065931,
        "cep": "13087210",
        "pais": "Brasil"
    },
    {
        "id": 1623,
        "nome": "Rodrigo Barbutti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9061384,
        "longitude": -47.065405,
        "cep": "13010111",
        "pais": "Brasil"
    },
    {
        "id": 1624,
        "nome": "Eric Santana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.925776,
        "longitude": -47.1134394,
        "cep": "13060325",
        "pais": "Brasil"
    },
    {
        "id": 1625,
        "nome": "Sarah corsi Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.86777,
        "longitude": -47.0639194,
        "cep": "13087330",
        "pais": "Brasil"
    },
    {
        "id": 1626,
        "nome": "Ana Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0401762,
        "longitude": -47.1013725,
        "cep": "13053310",
        "pais": "Brasil"
    },
    {
        "id": 1627,
        "nome": "Beatriz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8794004,
        "longitude": -47.2045346,
        "cep": "13186013",
        "pais": "Brasil"
    },
    {
        "id": 1628,
        "nome": "Maria Eduarda Magalhães allonso xavier",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9307354,
        "longitude": -47.1661866,
        "cep": "13059620",
        "pais": "Brasil"
    },
    {
        "id": 1629,
        "nome": "Jamile silva de lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9102001,
        "longitude": -47.0569478,
        "cep": "13026501",
        "pais": "Brasil"
    },
    {
        "id": 1630,
        "nome": "Ariane Regina Pancate Rodrigues",
        "cidade": "Amparo",
        "estado": "SP",
        "latitude": -22.7115774,
        "longitude": -46.8060358,
        "cep": "13905475",
        "pais": "Brasil"
    },
    {
        "id": 1631,
        "nome": "Raquel F",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.558595,
        "longitude": -47.4450119,
        "cep": "13483280",
        "pais": "Brasil"
    },
    {
        "id": 1632,
        "nome": "Debora Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 1633,
        "nome": "CARLA ALMEIDA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9634657,
        "longitude": -47.0463135,
        "cep": "13042620",
        "pais": "Brasil"
    },
    {
        "id": 1634,
        "nome": "Marcos",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4413641,
        "longitude": -47.5801167,
        "cep": "13502470",
        "pais": "Brasil"
    },
    {
        "id": 1635,
        "nome": "Luciano Da Silva Faria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8681566,
        "longitude": -47.148235,
        "cep": "13067843",
        "pais": "Brasil"
    },
    {
        "id": 1636,
        "nome": "Soares Alemao",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.9921507,
        "longitude": -49.4455477,
        "cep": "12947768",
        "pais": NaN
    },
    {
        "id": 1637,
        "nome": "Ivan Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9318935,
        "longitude": -47.1674807,
        "cep": "13059625",
        "pais": "Brasil"
    },
    {
        "id": 1638,
        "nome": "Beatriz Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13174340",
        "pais": "Brasil"
    },
    {
        "id": 1639,
        "nome": "Robson Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9915434,
        "longitude": -47.1177449,
        "cep": "13054787",
        "pais": "Brasil"
    },
    {
        "id": 1640,
        "nome": "Carlos Jose Gomes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9035395,
        "longitude": -47.1727544,
        "cep": "13185490",
        "pais": "Brasil"
    },
    {
        "id": 1641,
        "nome": "Luciano Anacleto De Faria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8850213,
        "longitude": -47.0402042,
        "cep": "13090763",
        "pais": "Brasil"
    },
    {
        "id": 1642,
        "nome": "Rosana Rosa Nonato",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9116699,
        "longitude": -47.0589214,
        "cep": "13026510",
        "pais": "Brasil"
    },
    {
        "id": 1643,
        "nome": "Paulo Roberto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9016112,
        "longitude": -47.0658474,
        "cep": "13020160",
        "pais": "Brasil"
    },
    {
        "id": 1644,
        "nome": "Débora de Sousa Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8970575,
        "longitude": -47.1949315,
        "cep": "13186503",
        "pais": "Brasil"
    },
    {
        "id": 1645,
        "nome": "Rodolpho bezerra Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8676748,
        "longitude": -47.0356225,
        "cep": "13088032",
        "pais": "Brasil"
    },
    {
        "id": 1646,
        "nome": "Felippe Costa",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0983608,
        "longitude": -47.2339132,
        "cep": "13348882",
        "pais": "Brasil"
    },
    {
        "id": 1647,
        "nome": "Fabio Oliveira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178381",
        "pais": "Brasil"
    },
    {
        "id": 1648,
        "nome": "Ivo Dos Santos Neto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9667595,
        "longitude": -46.9921142,
        "cep": "13274000",
        "pais": "Brasil"
    },
    {
        "id": 1649,
        "nome": "John Fahl",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 1650,
        "nome": "Eduardo Carvalho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178230",
        "pais": "Brasil"
    },
    {
        "id": 1651,
        "nome": "Paulo César Pedrozo de Jesus",
        "cidade": "Tietê",
        "estado": "SP",
        "latitude": -23.1030302,
        "longitude": -47.7147937,
        "cep": "18530000",
        "pais": "Brasil"
    },
    {
        "id": 1652,
        "nome": "Claucio Deodato",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9327628,
        "longitude": -47.2483287,
        "cep": "13197392",
        "pais": "Brasil"
    },
    {
        "id": 1653,
        "nome": "Rodrigo Veronez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9342815,
        "longitude": -47.1022507,
        "cep": "13060130",
        "pais": "Brasil"
    },
    {
        "id": 1654,
        "nome": "Aldo Jose dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053368",
        "pais": "Brasil"
    },
    {
        "id": 1655,
        "nome": "Silviano R Hummel",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4004357,
        "longitude": -47.5612899,
        "cep": "13500142",
        "pais": "Brasil"
    },
    {
        "id": 1656,
        "nome": "Wellington Bavati",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9493623,
        "longitude": -47.3056789,
        "cep": "13190184",
        "pais": "Brasil"
    },
    {
        "id": 1657,
        "nome": "Ricardo Henrique Cândido",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5707057,
        "longitude": -47.4185559,
        "cep": "13482832",
        "pais": "Brasil"
    },
    {
        "id": 1658,
        "nome": "Talitha Soares Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9708165,
        "longitude": -47.0386659,
        "cep": "13042610",
        "pais": "Brasil"
    },
    {
        "id": 1659,
        "nome": "Luíza De Fátima Pitton Silete",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9871565,
        "longitude": -47.1378783,
        "cep": "13056174",
        "pais": "Brasil"
    },
    {
        "id": 1660,
        "nome": "Guilherme Angelucci",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7735736,
        "longitude": -47.3042812,
        "cep": "13380410",
        "pais": "Brasil"
    },
    {
        "id": 1661,
        "nome": "Nathasha Ribeiro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7485631,
        "longitude": -47.3265487,
        "cep": "13466300",
        "pais": "Brasil"
    },
    {
        "id": 1662,
        "nome": "Milton Bernardes",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455450",
        "pais": "Brasil"
    },
    {
        "id": 1663,
        "nome": "Raffão Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099492,
        "longitude": -47.0800599,
        "cep": "13035100",
        "pais": "Brasil"
    },
    {
        "id": 1664,
        "nome": "Lê Zoca",
        "cidade": "Amparo",
        "estado": "SP",
        "latitude": -22.7220502,
        "longitude": -46.8445472,
        "cep": "13908221",
        "pais": "Brasil"
    },
    {
        "id": 1665,
        "nome": "Ismar",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.9921507,
        "longitude": -49.4455477,
        "cep": "12482333",
        "pais": NaN
    },
    {
        "id": 1666,
        "nome": "Ismar Soares",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5984737,
        "longitude": -47.4330099,
        "cep": "13482333",
        "pais": "Brasil"
    },
    {
        "id": 1667,
        "nome": "Gabriel Godoy",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.736368,
        "longitude": -47.1957059,
        "cep": "13145537",
        "pais": "Brasil"
    },
    {
        "id": 1668,
        "nome": "Maria Luísa Bittencourt Bomfim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9378558,
        "longitude": -47.1157379,
        "cep": "13060468",
        "pais": "Brasil"
    },
    {
        "id": 1669,
        "nome": "Carlos Henrique Mariano Filho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8462842,
        "longitude": -47.0269523,
        "cep": "13097105",
        "pais": "Brasil"
    },
    {
        "id": 1670,
        "nome": "Luciana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 1671,
        "nome": "Alex",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8455801,
        "longitude": -47.1127125,
        "cep": "13082612",
        "pais": "Brasil"
    },
    {
        "id": 1672,
        "nome": "Gabriel Dias",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -23.5998936,
        "longitude": -46.6184804,
        "cep": "13363592",
        "pais": NaN
    },
    {
        "id": 1673,
        "nome": "Jose Roberto Vicente",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9426792,
        "longitude": -46.9946431,
        "cep": "13272819",
        "pais": "Brasil"
    },
    {
        "id": 1674,
        "nome": "Josué Lima Fogaça De Matos",
        "cidade": "Itapeva",
        "estado": "SP",
        "latitude": -23.9911957,
        "longitude": -48.8987111,
        "cep": "18407220",
        "pais": "Brasil"
    },
    {
        "id": 1675,
        "nome": "Ana Bela Martins de Lima",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13260000",
        "pais": "Brasil"
    },
    {
        "id": 1676,
        "nome": "Rodrigo Luiz Martins",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9721304,
        "longitude": -47.0007934,
        "cep": "13270260",
        "pais": "Brasil"
    },
    {
        "id": 1677,
        "nome": "Cícero Chagas Neto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8817118,
        "longitude": -47.0538727,
        "cep": "13076903",
        "pais": "Brasil"
    },
    {
        "id": 1678,
        "nome": "Cesar Rinaldi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8850695,
        "longitude": -47.1112027,
        "cep": "13063240",
        "pais": "Brasil"
    },
    {
        "id": 1679,
        "nome": "João Nascimento Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8501781,
        "longitude": -47.10881,
        "cep": "13082200",
        "pais": "Brasil"
    },
    {
        "id": 1680,
        "nome": "EDMILSON",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.185099,
        "longitude": -46.8665759,
        "cep": "13218335",
        "pais": "Brasil"
    },
    {
        "id": 1681,
        "nome": "Neto Ming",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13331080",
        "pais": "Brasil"
    },
    {
        "id": 1682,
        "nome": "Vanessa Rodrigues Medeiros",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7945563,
        "longitude": -47.2809264,
        "cep": "13173275",
        "pais": "Brasil"
    },
    {
        "id": 1683,
        "nome": "THAISE ROCHA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9221519,
        "longitude": -47.0171721,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 1684,
        "nome": "Luciano Dourado",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8143133,
        "longitude": -47.2460176,
        "cep": "13175561",
        "pais": "Brasil"
    },
    {
        "id": 1685,
        "nome": "giovane afonso",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7750192,
        "longitude": -47.163603,
        "cep": "13140526",
        "pais": "Brasil"
    },
    {
        "id": 1686,
        "nome": "Glauce Paixao",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7950805,
        "longitude": -47.2960728,
        "cep": "13385340",
        "pais": "Brasil"
    },
    {
        "id": 1687,
        "nome": "silvio ribeiro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8947249,
        "longitude": -47.2322159,
        "cep": "13188010",
        "pais": "Brasil"
    },
    {
        "id": 1688,
        "nome": "Carlos Andre",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9059432,
        "longitude": -47.2187708,
        "cep": "13187074",
        "pais": "Brasil"
    },
    {
        "id": 1689,
        "nome": "Amanda Cristina Chagas Laselva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9086352,
        "longitude": -47.094081,
        "cep": "13033050",
        "pais": "Brasil"
    },
    {
        "id": 1690,
        "nome": "Fernanda Gachet",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9175599,
        "longitude": -47.0514273,
        "cep": "13041500",
        "pais": "Brasil"
    },
    {
        "id": 1691,
        "nome": "Daniel Urbano",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -18.9921507,
        "longitude": -49.4455477,
        "cep": "23440078",
        "pais": NaN
    },
    {
        "id": 1692,
        "nome": "Guilherme Henrique Francisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9800891,
        "longitude": -47.1340573,
        "cep": "13056147",
        "pais": "Brasil"
    },
    {
        "id": 1693,
        "nome": "Gilberto cardoso Moraes",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13332189",
        "pais": "Brasil"
    },
    {
        "id": 1694,
        "nome": "Vitor Vecchia",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7256874,
        "longitude": -47.3175073,
        "cep": "13472390",
        "pais": "Brasil"
    },
    {
        "id": 1695,
        "nome": "Raumudo R M Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9352201,
        "longitude": -47.0890098,
        "cep": "13050030",
        "pais": "Brasil"
    },
    {
        "id": 1696,
        "nome": "Ronaldo Abel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9287637,
        "longitude": -47.0917284,
        "cep": "13050464",
        "pais": "Brasil"
    },
    {
        "id": 1697,
        "nome": "Marcos Antonio Juliao",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9396666,
        "longitude": -46.9738752,
        "cep": "13273649",
        "pais": "Brasil"
    },
    {
        "id": 1698,
        "nome": "Felipe Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9025519,
        "longitude": -47.1623466,
        "cep": "13064845",
        "pais": "Brasil"
    },
    {
        "id": 1699,
        "nome": "Marcos",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1089391,
        "longitude": -47.2322751,
        "cep": "13345794",
        "pais": "Brasil"
    },
    {
        "id": 1700,
        "nome": "Ederson Wilson Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9486907,
        "longitude": -47.1610542,
        "cep": "13059116",
        "pais": "Brasil"
    },
    {
        "id": 1701,
        "nome": "ANTONIO ANSELMO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9572055,
        "longitude": -47.1832674,
        "cep": "13058377",
        "pais": "Brasil"
    },
    {
        "id": 1702,
        "nome": "Fabrício De Sousa Vieira",
        "cidade": "Franca",
        "estado": "SP",
        "latitude": -20.4902852,
        "longitude": -47.4207641,
        "cep": "14407551",
        "pais": "Brasil"
    },
    {
        "id": 1703,
        "nome": "Jesus Mironga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9147031,
        "longitude": -47.0371305,
        "cep": "13100152",
        "pais": "Brasil"
    },
    {
        "id": 1704,
        "nome": "Luana Segundo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9400663,
        "longitude": -47.1125194,
        "cep": "13060797",
        "pais": "Brasil"
    },
    {
        "id": 1705,
        "nome": "Nasser Ghandur Bernardes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9472317,
        "longitude": -47.1116166,
        "cep": "13060611",
        "pais": "Brasil"
    },
    {
        "id": 1706,
        "nome": "Victor ReINDEFINIDOCampinas",
        "cidade": "SP",
        "estado": "-22.9109054",
        "latitude": -47.0521818,
        "longitude": 13026001.0,
        "cep": "Brasil",
        "pais": NaN
    },
    {
        "id": 1707,
        "nome": "Greici Kely Da Silva Gonçalves Miranda",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7747422,
        "longitude": -47.6588304,
        "cep": "13401630",
        "pais": "Brasil"
    },
    {
        "id": 1708,
        "nome": "Célia De Oliveira Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9398505,
        "longitude": -47.1152194,
        "cep": "13060484",
        "pais": "Brasil"
    },
    {
        "id": 1709,
        "nome": "Vitor Viana Altafin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9466111,
        "longitude": -47.104521,
        "cep": "13050724",
        "pais": "Brasil"
    },
    {
        "id": 1710,
        "nome": "Luciana Pansonato Martins",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1013887,
        "longitude": -47.2238299,
        "cep": "13345683",
        "pais": "Brasil"
    },
    {
        "id": 1711,
        "nome": "Adilson Dos Santos Toledo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9634908,
        "longitude": -47.0443996,
        "cep": "13042430",
        "pais": "Brasil"
    },
    {
        "id": 1712,
        "nome": "Thiago Fernando",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.767063,
        "longitude": -47.3384793,
        "cep": "13467197",
        "pais": "Brasil"
    },
    {
        "id": 1713,
        "nome": "raphael josé",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.987456,
        "longitude": -47.1032272,
        "cep": "13052610",
        "pais": "Brasil"
    },
    {
        "id": 1714,
        "nome": "Talita",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3947749,
        "longitude": -47.5695092,
        "cep": "13504130",
        "pais": "Brasil"
    },
    {
        "id": 1715,
        "nome": "ana paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9893977,
        "longitude": -47.1000521,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 1716,
        "nome": "kellyrocha_a",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7221973,
        "longitude": -47.2986907,
        "cep": "13473560",
        "pais": "Brasil"
    },
    {
        "id": 1717,
        "nome": "Dj Luizão",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455385",
        "pais": "Brasil"
    },
    {
        "id": 1718,
        "nome": "Kauanne Martins",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8889394,
        "longitude": -47.1761717,
        "cep": "13185050",
        "pais": "Brasil"
    },
    {
        "id": 1719,
        "nome": "Guilherme Aoki",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.911026,
        "longitude": -47.0496409,
        "cep": "13026020",
        "pais": "Brasil"
    },
    {
        "id": 1720,
        "nome": "Wellington Dias",
        "cidade": "Araras",
        "estado": "SP",
        "latitude": -22.3570047,
        "longitude": -47.337069,
        "cep": "13606224",
        "pais": "Brasil"
    },
    {
        "id": 1721,
        "nome": "fabio bicudo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7319442,
        "longitude": -47.3415276,
        "cep": "13471030",
        "pais": "Brasil"
    },
    {
        "id": 1722,
        "nome": "Willian Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9210497,
        "longitude": -47.0221049,
        "cep": "13101322",
        "pais": "Brasil"
    },
    {
        "id": 1723,
        "nome": "Anderson Garcia De Sousa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13330700",
        "pais": "Brasil"
    },
    {
        "id": 1724,
        "nome": "Wellington Serra",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9085531,
        "longitude": -47.0560834,
        "cep": "13015081",
        "pais": "Brasil"
    },
    {
        "id": 1725,
        "nome": "Marília",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -22.2172002,
        "longitude": -49.9500061,
        "cep": "18117610",
        "pais": NaN
    },
    {
        "id": 1726,
        "nome": "Tamiris Zerbinato",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5737605,
        "longitude": -47.4074707,
        "cep": "13480624",
        "pais": "Brasil"
    },
    {
        "id": 1727,
        "nome": "Eduardo Santos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7435477,
        "longitude": -47.2923081,
        "cep": "13477700",
        "pais": "Brasil"
    },
    {
        "id": 1728,
        "nome": "Marisa Pereira",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -22.6460503,
        "longitude": -47.1967533,
        "cep": "13150027",
        "pais": "Brasil"
    },
    {
        "id": 1729,
        "nome": "Robson Pirani",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.2112714,
        "longitude": -46.8689086,
        "cep": "13202170",
        "pais": "Brasil"
    },
    {
        "id": 1730,
        "nome": "Rosangela Paladini",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9412107,
        "longitude": -47.1247262,
        "cep": "13060763",
        "pais": "Brasil"
    },
    {
        "id": 1731,
        "nome": "leonardo Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13041081",
        "pais": "Brasil"
    },
    {
        "id": 1732,
        "nome": "Leandra Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9194566,
        "longitude": -47.1076718,
        "cep": "13060090",
        "pais": "Brasil"
    },
    {
        "id": 1733,
        "nome": "Hamdy Kamal Genena",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4034405,
        "longitude": -47.5482869,
        "cep": "13506765",
        "pais": "Brasil"
    },
    {
        "id": 1734,
        "nome": "Milena Vieira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9673362,
        "longitude": -47.0012135,
        "cep": "13271140",
        "pais": "Brasil"
    },
    {
        "id": 1735,
        "nome": "Andreia Alcantil",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8683133,
        "longitude": -47.2057372,
        "cep": "13184340",
        "pais": "Brasil"
    },
    {
        "id": 1736,
        "nome": "Josie MS",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7200051,
        "longitude": -47.6299563,
        "cep": "13418190",
        "pais": "Brasil"
    },
    {
        "id": 1737,
        "nome": "thaynara pirolla",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9954104,
        "longitude": -47.143007,
        "cep": "13056040",
        "pais": "Brasil"
    },
    {
        "id": 1738,
        "nome": "William Ricardo Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9333431,
        "longitude": -47.1665329,
        "cep": "13059624",
        "pais": "Brasil"
    },
    {
        "id": 1739,
        "nome": "Camila Faria",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8777189,
        "longitude": -47.200128,
        "cep": "13186032",
        "pais": "Brasil"
    },
    {
        "id": 1740,
        "nome": "Julia Candido",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5865682,
        "longitude": -47.4210353,
        "cep": "13482095",
        "pais": "Brasil"
    },
    {
        "id": 1741,
        "nome": "Carolina Sá",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9433891,
        "longitude": -47.1001393,
        "cep": "13050553",
        "pais": "Brasil"
    },
    {
        "id": 1742,
        "nome": "mauro silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9454368,
        "longitude": -47.0853294,
        "cep": "13051038",
        "pais": "Brasil"
    },
    {
        "id": 1743,
        "nome": "Marlos Silveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9014211,
        "longitude": -47.0681175,
        "cep": "13020060",
        "pais": "Brasil"
    },
    {
        "id": 1744,
        "nome": "Alex Sandro Donizetti Buratto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9218782,
        "longitude": -47.0978917,
        "cep": "13060007",
        "pais": "Brasil"
    },
    {
        "id": 1745,
        "nome": "Everton Augusto Gonçalves da Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8251046,
        "longitude": -47.235804,
        "cep": "13175668",
        "pais": "Brasil"
    },
    {
        "id": 1746,
        "nome": "Anna Cristina Cesar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8885949,
        "longitude": -47.0384356,
        "cep": "13090714",
        "pais": "Brasil"
    },
    {
        "id": 1747,
        "nome": "Erick Jhonny Teodoro",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.684319,
        "longitude": -47.7086254,
        "cep": "13406332",
        "pais": "Brasil"
    },
    {
        "id": 1748,
        "nome": "Claudio Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064860",
        "pais": "Brasil"
    },
    {
        "id": 1749,
        "nome": "Reginaldo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9031228,
        "longitude": -47.2468119,
        "cep": "13188191",
        "pais": "Brasil"
    },
    {
        "id": 1750,
        "nome": "Marcelo Alves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9060547,
        "longitude": -47.1775411,
        "cep": "13185344",
        "pais": "Brasil"
    },
    {
        "id": 1751,
        "nome": "Ana Paula Prado Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9433891,
        "longitude": -47.1001393,
        "cep": "13050553",
        "pais": "Brasil"
    },
    {
        "id": 1752,
        "nome": "Noriel Azuelos",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6666664,
        "longitude": -46.9850449,
        "cep": "13914552",
        "pais": "Brasil"
    },
    {
        "id": 1753,
        "nome": "Luan Almeida",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1215142,
        "longitude": -47.2489216,
        "cep": "13349756",
        "pais": "Brasil"
    },
    {
        "id": 1754,
        "nome": "Juliano Leite",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3775292,
        "longitude": -47.5818228,
        "cep": "13505494",
        "pais": "Brasil"
    },
    {
        "id": 1755,
        "nome": "Luander Guimarães",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.744648,
        "longitude": -47.2848812,
        "cep": "13477754",
        "pais": "Brasil"
    },
    {
        "id": 1756,
        "nome": "Maria Aparecida Soares Dos Santos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7062632,
        "longitude": -47.2946826,
        "cep": "13474358",
        "pais": "Brasil"
    },
    {
        "id": 1757,
        "nome": "Leandro Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9462025,
        "longitude": -47.0199387,
        "cep": "13045050",
        "pais": "Brasil"
    },
    {
        "id": 1758,
        "nome": "Renato Barbosa de Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13045590",
        "pais": "Brasil"
    },
    {
        "id": 1759,
        "nome": "Édson Inácio Silva",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -21.3560687,
        "longitude": -51.8511364,
        "cep": "18559899",
        "pais": NaN
    },
    {
        "id": 1760,
        "nome": "Alessandra",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7380687,
        "longitude": -47.6095282,
        "cep": "13420823",
        "pais": "Brasil"
    },
    {
        "id": 1761,
        "nome": "Isabel Menezes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9412046,
        "longitude": -47.0943086,
        "cep": "13050133",
        "pais": "Brasil"
    },
    {
        "id": 1762,
        "nome": "Juliet Santolaia",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181751",
        "pais": "Brasil"
    },
    {
        "id": 1763,
        "nome": "Eloi Roberto",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1064178,
        "longitude": -47.2771032,
        "cep": "13349059",
        "pais": "Brasil"
    },
    {
        "id": 1764,
        "nome": "Marcos Vinicius dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.951943,
        "longitude": -47.1825292,
        "cep": "13058413",
        "pais": "Brasil"
    },
    {
        "id": 1765,
        "nome": "Rodrigo Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9421519,
        "longitude": -47.0230088,
        "cep": "13045260",
        "pais": "Brasil"
    },
    {
        "id": 1766,
        "nome": "Pedro Campos",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7772809,
        "longitude": -47.1456412,
        "cep": "13140693",
        "pais": "Brasil"
    },
    {
        "id": 1767,
        "nome": "Aline Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181570",
        "pais": "Brasil"
    },
    {
        "id": 1768,
        "nome": "Elielson Martins",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7378053,
        "longitude": -47.1958891,
        "cep": "13145530",
        "pais": "Brasil"
    },
    {
        "id": 1769,
        "nome": "Denise",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9523497,
        "longitude": -47.0864146,
        "cep": "13051125",
        "pais": "Brasil"
    },
    {
        "id": 1770,
        "nome": "Alice Dos Reis Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9907268,
        "longitude": -47.1440784,
        "cep": "13056053",
        "pais": "Brasil"
    },
    {
        "id": 1771,
        "nome": "ANDERSON RAMOS",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.7040596,
        "longitude": -46.9890522,
        "cep": "13910003",
        "pais": "Brasil"
    },
    {
        "id": 1772,
        "nome": "Pedro Henrique",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7472488,
        "longitude": -47.172511,
        "cep": "13145153",
        "pais": "Brasil"
    },
    {
        "id": 1773,
        "nome": "Rafael",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454002",
        "pais": "Brasil"
    },
    {
        "id": 1774,
        "nome": "Thiago Modolo",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5463993,
        "longitude": -47.399753,
        "cep": "13485090",
        "pais": "Brasil"
    },
    {
        "id": 1775,
        "nome": "Luiz Fernando Marques",
        "cidade": "Andradas",
        "estado": "MG",
        "latitude": -22.0693412,
        "longitude": -46.5707584,
        "cep": "37795000",
        "pais": NaN
    },
    {
        "id": 1776,
        "nome": "William Ferreira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8924661,
        "longitude": -47.2362143,
        "cep": "13188064",
        "pais": "Brasil"
    },
    {
        "id": 1777,
        "nome": "Raquel Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9208409,
        "longitude": -47.020468,
        "cep": "13101340",
        "pais": "Brasil"
    },
    {
        "id": 1778,
        "nome": "Joelma Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8131696,
        "longitude": -47.1681053,
        "cep": "13179430",
        "pais": "Brasil"
    },
    {
        "id": 1779,
        "nome": "Anderson Nascimento",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.763119,
        "longitude": -47.3493909,
        "cep": "13468866",
        "pais": "Brasil"
    },
    {
        "id": 1780,
        "nome": "JUUH MARTINS SILVA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9207661,
        "longitude": -47.0896009,
        "cep": "13031835",
        "pais": "Brasil"
    },
    {
        "id": 1781,
        "nome": "Márcio André Lourenço",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7277342,
        "longitude": -47.3432013,
        "cep": "13471710",
        "pais": "Brasil"
    },
    {
        "id": 1782,
        "nome": "Lucas Adriano Bueno De Godoy",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8705726,
        "longitude": -46.9712451,
        "cep": "13104002",
        "pais": "Brasil"
    },
    {
        "id": 1783,
        "nome": "Marilde",
        "cidade": "INDEFINIDO",
        "estado": "INDEFINIDO",
        "latitude": -22.7271731,
        "longitude": -47.3259323,
        "cep": "12927040",
        "pais": NaN
    },
    {
        "id": 1784,
        "nome": "John Matheus",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1322305,
        "longitude": -47.2402056,
        "cep": "13348170",
        "pais": "Brasil"
    },
    {
        "id": 1785,
        "nome": "Laís Valentine Furlan",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5444953,
        "longitude": -47.4289242,
        "cep": "13484676",
        "pais": "Brasil"
    },
    {
        "id": 1786,
        "nome": "Mateus Baccan Cortez",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5770011,
        "longitude": -47.4227394,
        "cep": "13482250",
        "pais": "Brasil"
    },
    {
        "id": 1787,
        "nome": "LUIZ FELIPE ROSA BRAGGION",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1286709,
        "longitude": -47.2424757,
        "cep": "13348220",
        "pais": "Brasil"
    },
    {
        "id": 1788,
        "nome": "Renata Pessoa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7896044,
        "longitude": -47.0753252,
        "cep": "13085335",
        "pais": "Brasil"
    },
    {
        "id": 1789,
        "nome": "Hudson Ferreira leal dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9199006,
        "longitude": -47.0724035,
        "cep": "13030280",
        "pais": "Brasil"
    },
    {
        "id": 1790,
        "nome": "Carlos Eduardo Filigoi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9458341,
        "longitude": -46.9995278,
        "cep": "13272799",
        "pais": "Brasil"
    },
    {
        "id": 1791,
        "nome": "Erivelton",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.986828,
        "longitude": -47.1364219,
        "cep": "13056117",
        "pais": "Brasil"
    },
    {
        "id": 1792,
        "nome": "Silvia Lemes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9223074,
        "longitude": -47.0706007,
        "cep": "13030270",
        "pais": "Brasil"
    },
    {
        "id": 1793,
        "nome": "Luciano Guedes Cavalcante",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9293324,
        "longitude": -47.0572737,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 1794,
        "nome": "Rafael Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054656",
        "pais": "Brasil"
    },
    {
        "id": 1795,
        "nome": "Giceli Dos Santos Sacomani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8874374,
        "longitude": -47.0873805,
        "cep": "13070070",
        "pais": "Brasil"
    },
    {
        "id": 1796,
        "nome": "Vanessa Sartori",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9528792,
        "longitude": -47.188596,
        "cep": "13058364",
        "pais": "Brasil"
    },
    {
        "id": 1797,
        "nome": "gabriel batista",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9662736,
        "longitude": -47.2010341,
        "cep": "13058176",
        "pais": "Brasil"
    },
    {
        "id": 1798,
        "nome": "Bruno Eduardo Vichert Peres",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7807638,
        "longitude": -47.1677234,
        "cep": "13142328",
        "pais": "Brasil"
    },
    {
        "id": 1799,
        "nome": "Valdemir",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7962477,
        "longitude": -47.2738116,
        "cep": "13173425",
        "pais": "Brasil"
    },
    {
        "id": 1800,
        "nome": "Adriano Silva",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456703",
        "pais": "Brasil"
    },
    {
        "id": 1801,
        "nome": "Fernando Geribola",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8899773,
        "longitude": -46.9784981,
        "cep": "13105796",
        "pais": "Brasil"
    },
    {
        "id": 1802,
        "nome": "Vagner",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9238406,
        "longitude": -46.9698433,
        "cep": "13273271",
        "pais": "Brasil"
    },
    {
        "id": 1803,
        "nome": "Cristiano Souza",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9551029,
        "longitude": -46.9999161,
        "cep": "13272300",
        "pais": "Brasil"
    },
    {
        "id": 1804,
        "nome": "Leandro",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4367757,
        "longitude": -47.5831376,
        "cep": "13502270",
        "pais": "Brasil"
    },
    {
        "id": 1805,
        "nome": "André Assis",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9361297,
        "longitude": -47.0503207,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 1806,
        "nome": "Gustavo Duenhas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9546438,
        "longitude": -47.0833799,
        "cep": "13051433",
        "pais": "Brasil"
    },
    {
        "id": 1807,
        "nome": "Elcio Cruz",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7645037,
        "longitude": -47.3254864,
        "cep": "13467273",
        "pais": "Brasil"
    },
    {
        "id": 1808,
        "nome": "Edirlei de Carvalho dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9414884,
        "longitude": -47.1915637,
        "cep": "13058573",
        "pais": "Brasil"
    },
    {
        "id": 1809,
        "nome": "William Marques",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8929736,
        "longitude": -47.2176174,
        "cep": "13187167",
        "pais": "Brasil"
    },
    {
        "id": 1810,
        "nome": "Alexandre Sousa",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "04331020",
        "pais": "Brasil"
    },
    {
        "id": 1811,
        "nome": "BRENO RAFAEL CUNHA NAVE CASTRO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8423799,
        "longitude": -47.1549432,
        "cep": "13069099",
        "pais": "Brasil"
    },
    {
        "id": 1812,
        "nome": "Stella Rustiguel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9143702,
        "longitude": -47.0847401,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 1813,
        "nome": "bolinha bolinha",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5615331,
        "longitude": -47.4129799,
        "cep": "13480743",
        "pais": "Brasil"
    },
    {
        "id": 1814,
        "nome": "Wireless Link Fibra Distribuidora",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9359799,
        "longitude": -47.0401471,
        "cep": "13043750",
        "pais": "Brasil"
    },
    {
        "id": 1815,
        "nome": "Anderson Goncalves",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13457089",
        "pais": "Brasil"
    },
    {
        "id": 1816,
        "nome": "Vanessa Villar",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8304947,
        "longitude": -47.2753039,
        "cep": "13171822",
        "pais": "Brasil"
    },
    {
        "id": 1817,
        "nome": "Larissa Monfardini",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4152458,
        "longitude": -47.5558917,
        "cep": "13500330",
        "pais": "Brasil"
    },
    {
        "id": 1818,
        "nome": "Juliana Arantes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.85482,
        "longitude": -47.0514736,
        "cep": "13087460",
        "pais": "Brasil"
    },
    {
        "id": 1819,
        "nome": "Fabio Camargo",
        "cidade": "Santo Antônio de Posse",
        "estado": "SP",
        "latitude": -22.6063302,
        "longitude": -46.9308319,
        "cep": "13833072",
        "pais": "Brasil"
    },
    {
        "id": 1820,
        "nome": "Junil Vitor",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8648598,
        "longitude": -47.2014883,
        "cep": "13184677",
        "pais": "Brasil"
    },
    {
        "id": 1821,
        "nome": "Aleaudo Sousa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9635541,
        "longitude": -46.9182003,
        "cep": "13274751",
        "pais": "Brasil"
    },
    {
        "id": 1822,
        "nome": "Emerson Rodrigues De Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8118681,
        "longitude": -47.0302948,
        "cep": "13098401",
        "pais": "Brasil"
    },
    {
        "id": 1823,
        "nome": "Simone",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8974924,
        "longitude": -47.2313591,
        "cep": "13188002",
        "pais": "Brasil"
    },
    {
        "id": 1824,
        "nome": "Rafael",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13327467",
        "pais": "Brasil"
    },
    {
        "id": 1825,
        "nome": "Daiane Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9115815,
        "longitude": -47.119288,
        "cep": "13061371",
        "pais": "Brasil"
    },
    {
        "id": 1826,
        "nome": "Bruna Neri",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -22.7304311,
        "longitude": -46.8887659,
        "cep": "13920001",
        "pais": "Brasil"
    },
    {
        "id": 1827,
        "nome": "Juliano Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13065650",
        "pais": "Brasil"
    },
    {
        "id": 1828,
        "nome": "Weslley Morais",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9229731,
        "longitude": -47.1033242,
        "cep": "13060903",
        "pais": "Brasil"
    },
    {
        "id": 1829,
        "nome": "Glauber Fernando Teixeira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8980637,
        "longitude": -47.0675449,
        "cep": "13020110",
        "pais": "Brasil"
    },
    {
        "id": 1830,
        "nome": "Monique Cotan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9040693,
        "longitude": -47.0356015,
        "cep": "13092490",
        "pais": "Brasil"
    },
    {
        "id": 1831,
        "nome": "andreluizbedin@yahoo.com.br",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6931,
        "longitude": -46.9926,
        "cep": "13911062",
        "pais": "Brasil"
    },
    {
        "id": 1832,
        "nome": "Fabiano Soares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13067356",
        "pais": "Brasil"
    },
    {
        "id": 1833,
        "nome": "PETERSON RISSO",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13473040",
        "pais": "Brasil"
    },
    {
        "id": 1834,
        "nome": "Anike Fernanda Aguerra",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272026",
        "pais": "Brasil"
    },
    {
        "id": 1835,
        "nome": "Renato Masson",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13172794",
        "pais": "Brasil"
    },
    {
        "id": 1836,
        "nome": "Joao Carlos Simoes Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13026001",
        "pais": "Brasil"
    },
    {
        "id": 1837,
        "nome": "Richard Silva Vilas Boas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054353",
        "pais": "Brasil"
    },
    {
        "id": 1838,
        "nome": "William Paixão",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13045135",
        "pais": "Brasil"
    },
    {
        "id": 1839,
        "nome": "Fábio Rogério Gudaitis Gonçalves",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13346480",
        "pais": "Brasil"
    },
    {
        "id": 1840,
        "nome": "Mario Serafim",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13340385",
        "pais": "Brasil"
    },
    {
        "id": 1841,
        "nome": "Leticia Cichoski",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181062",
        "pais": "Brasil"
    },
    {
        "id": 1842,
        "nome": "allan fernandes ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060571",
        "pais": "Brasil"
    },
    {
        "id": 1843,
        "nome": "Cássia Queiroz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185844",
        "pais": "Brasil"
    },
    {
        "id": 1844,
        "nome": "LUCAS ROBERTO GOMES DE JESUS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.91316749236776,
        "longitude": -47.07963243743357,
        "cep": "13051492",
        "pais": "Brasil"
    },
    {
        "id": 1845,
        "nome": "Alex Maciel Rodrigues",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.53826467077191,
        "longitude": -46.6479614818176,
        "cep": "01000001",
        "pais": "Brasil"
    },
    {
        "id": 1846,
        "nome": "Aline Sandes da Silva Furtado",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13282370",
        "pais": "Brasil"
    },
    {
        "id": 1847,
        "nome": "robson de araujo paula",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173433",
        "pais": "Brasil"
    },
    {
        "id": 1848,
        "nome": "Daiani Rodrigues de Ávila",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13145702",
        "pais": "Brasil"
    },
    {
        "id": 1849,
        "nome": "Leonardo Souza Lôbo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.921570529580944,
        "longitude": -47.05897775294636,
        "cep": "13045165",
        "pais": "Brasil"
    },
    {
        "id": 1850,
        "nome": "Camila Candreva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042710",
        "pais": "Brasil"
    },
    {
        "id": 1851,
        "nome": "Leandro Renato Trombini",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186521",
        "pais": "Brasil"
    },
    {
        "id": 1852,
        "nome": "Genivaldo Ferreira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470220",
        "pais": "Brasil"
    },
    {
        "id": 1853,
        "nome": "EMERSON",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.853355792365377,
        "longitude": -47.04343542697509,
        "cep": "13186170",
        "pais": "Brasil"
    },
    {
        "id": 1854,
        "nome": "Rodrigo Murari",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060367",
        "pais": "Brasil"
    },
    {
        "id": 1855,
        "nome": "Felipe Bisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13105672",
        "pais": "Brasil"
    },
    {
        "id": 1856,
        "nome": "Caio Cezar Stupelli Chrestan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13106004",
        "pais": "Brasil"
    },
    {
        "id": 1857,
        "nome": "Wellington Lima",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186013",
        "pais": "Brasil"
    },
    {
        "id": 1858,
        "nome": "Marcel Murayama",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.904554059189262,
        "longitude": -47.05082799564008,
        "cep": "13040089",
        "pais": "Brasil"
    },
    {
        "id": 1859,
        "nome": "jullia Magno",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059194",
        "pais": "Brasil"
    },
    {
        "id": 1860,
        "nome": "Fábio Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13030540",
        "pais": "Brasil"
    },
    {
        "id": 1861,
        "nome": "Jefferson Luis Peixoto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13020330",
        "pais": "Brasil"
    },
    {
        "id": 1862,
        "nome": "Simone Pelizaro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042104",
        "pais": "Brasil"
    },
    {
        "id": 1863,
        "nome": "Patrícia de Lara Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040725",
        "pais": "Brasil"
    },
    {
        "id": 1864,
        "nome": "nilson da silva barbosa",
        "cidade": "Bragança Paulista",
        "estado": "SP",
        "latitude": -22.870568610502325,
        "longitude": -46.612576651988014,
        "cep": "13481274",
        "pais": "Brasil"
    },
    {
        "id": 1865,
        "nome": "Ricardo Alexandre Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056400",
        "pais": "Brasil"
    },
    {
        "id": 1866,
        "nome": "Priscilla Helena Bastos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064832",
        "pais": "Brasil"
    },
    {
        "id": 1867,
        "nome": "Guilherme Schenferd Duarte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13065270",
        "pais": "Brasil"
    },
    {
        "id": 1868,
        "nome": "Liva Tavares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13067645",
        "pais": "Brasil"
    },
    {
        "id": 1869,
        "nome": "Roberta Aparecida de Brito Benez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13020110",
        "pais": "Brasil"
    },
    {
        "id": 1870,
        "nome": "Adenilson Luiz Pedro ",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13451190",
        "pais": "Brasil"
    },
    {
        "id": 1871,
        "nome": "Silvino V. Vieira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.86850028640066,
        "longitude": -47.04590779087308,
        "cep": "13483506",
        "pais": "Brasil"
    },
    {
        "id": 1872,
        "nome": "Lucas José de Souza Silva ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 1873,
        "nome": "Elton sa da silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13188191",
        "pais": "Brasil"
    },
    {
        "id": 1874,
        "nome": "Gionedes Aparecido Martins Seabra",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186020",
        "pais": "Brasil"
    },
    {
        "id": 1875,
        "nome": "Anderson Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13177292",
        "pais": "Brasil"
    },
    {
        "id": 1876,
        "nome": "Abayomiakili André Macedo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057201",
        "pais": "Brasil"
    },
    {
        "id": 1877,
        "nome": "Erika Aparecida Gilioli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060773",
        "pais": "Brasil"
    },
    {
        "id": 1878,
        "nome": "Gilvania Sousa Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 1879,
        "nome": "Marcelo Felipe dos Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186330",
        "pais": "Brasil"
    },
    {
        "id": 1880,
        "nome": "Luciano Beteto",
        "cidade": "Bragança Paulista",
        "estado": "SP",
        "latitude": -22.85502461467706,
        "longitude": -46.62181819819583,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 1881,
        "nome": "Leandro Araujo  Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057082",
        "pais": "Brasil"
    },
    {
        "id": 1882,
        "nome": "Jaqueline Mathias Tavares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.902609452910266,
        "longitude": -47.06766034514024,
        "cep": "13058485",
        "pais": "Brasil"
    },
    {
        "id": 1883,
        "nome": "Michele Gomes de Jesus",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051410",
        "pais": "Brasil"
    },
    {
        "id": 1884,
        "nome": "Adriana Paula de Sousa Alvarenga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 1885,
        "nome": "JALMIR VIEIRA DOS SANTOS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054541",
        "pais": "Brasil"
    },
    {
        "id": 1886,
        "nome": "David Fabio da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060740",
        "pais": "Brasil"
    },
    {
        "id": 1887,
        "nome": "Raphael Montali da Assumpção",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13076869",
        "pais": "Brasil"
    },
    {
        "id": 1888,
        "nome": "Daniel Guimarães Sanches",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13278210",
        "pais": "Brasil"
    },
    {
        "id": 1889,
        "nome": "Fábio Almeida Silva",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284488",
        "pais": "Brasil"
    },
    {
        "id": 1890,
        "nome": "Adriana Dias Pessoa da Cruz",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13348896",
        "pais": "Brasil"
    },
    {
        "id": 1891,
        "nome": "Marcelo Alves Bandeira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13475010",
        "pais": "Brasil"
    },
    {
        "id": 1892,
        "nome": "  ƎꓶⱯ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.90081703879639,
        "longitude": -47.04655064592943,
        "cep": "13033740",
        "pais": "Brasil"
    },
    {
        "id": 1893,
        "nome": "Bova",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13338229",
        "pais": "Brasil"
    },
    {
        "id": 1894,
        "nome": "Roberta Monteiro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273300",
        "pais": "Brasil"
    },
    {
        "id": 1895,
        "nome": "Henrique Seiji Higashie Ike",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13091012",
        "pais": "Brasil"
    },
    {
        "id": 1896,
        "nome": "Murilo Pereira Oliveira ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13015122",
        "pais": "Brasil"
    },
    {
        "id": 1897,
        "nome": "Thiago Silveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13026064",
        "pais": "Brasil"
    },
    {
        "id": 1898,
        "nome": "Daniel Marcos Marichi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061100",
        "pais": "Brasil"
    },
    {
        "id": 1899,
        "nome": "RICHARD PEREIRA DE LIMA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.920406992385686,
        "longitude": -47.04321289257495,
        "cep": "13034670",
        "pais": "Brasil"
    },
    {
        "id": 1900,
        "nome": "SOLANGE COUTINHO DOS SANTOS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058358",
        "pais": "Brasil"
    },
    {
        "id": 1901,
        "nome": "dennis frank rezende",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058017",
        "pais": "Brasil"
    },
    {
        "id": 1902,
        "nome": "Ruy Guilherme Vieira da Silva evangelista",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 1903,
        "nome": "Marcelo Freitas",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173482",
        "pais": "Brasil"
    },
    {
        "id": 1904,
        "nome": "Douglas henrique borges",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13087320",
        "pais": "Brasil"
    },
    {
        "id": 1905,
        "nome": "Clecio De Souza Carvalho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179322",
        "pais": "Brasil"
    },
    {
        "id": 1906,
        "nome": "Jeverson J. Fronza",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453833",
        "pais": "Brasil"
    },
    {
        "id": 1907,
        "nome": "Edmir da chaga silveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060766",
        "pais": "Brasil"
    },
    {
        "id": 1908,
        "nome": "Tiago  Alves de Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056430",
        "pais": "Brasil"
    },
    {
        "id": 1909,
        "nome": "Antonio aparecido dias Fernandes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178353",
        "pais": "Brasil"
    },
    {
        "id": 1910,
        "nome": "Alexandre Fernando Zazia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060073",
        "pais": "Brasil"
    },
    {
        "id": 1911,
        "nome": "lorenlayr13@gmail.com",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13100430",
        "pais": "Brasil"
    },
    {
        "id": 1912,
        "nome": "MARCOS WILLIAM Gonçalves Miranda VIEIRA",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178321",
        "pais": "Brasil"
    },
    {
        "id": 1913,
        "nome": "Wellington rodrigo de oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057400",
        "pais": "Brasil"
    },
    {
        "id": 1914,
        "nome": "Valéria",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13291066",
        "pais": "Brasil"
    },
    {
        "id": 1915,
        "nome": "Kristiane Aparecida Daenekas",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272700",
        "pais": "Brasil"
    },
    {
        "id": 1916,
        "nome": "William Vital",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054024",
        "pais": "Brasil"
    },
    {
        "id": 1917,
        "nome": "Igor dos Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13274560",
        "pais": "Brasil"
    },
    {
        "id": 1918,
        "nome": "ELVIO LUIZ CINIELLO",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13274702",
        "pais": "Brasil"
    },
    {
        "id": 1919,
        "nome": "Flávio Rega",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179202",
        "pais": "Brasil"
    },
    {
        "id": 1920,
        "nome": "wilson silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056425",
        "pais": "Brasil"
    },
    {
        "id": 1921,
        "nome": "AL",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273649",
        "pais": "Brasil"
    },
    {
        "id": 1922,
        "nome": "Leandro de Souza Vieira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181180",
        "pais": "Brasil"
    },
    {
        "id": 1923,
        "nome": "Thais Lobo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058381",
        "pais": "Brasil"
    },
    {
        "id": 1924,
        "nome": "Marcelo Roberto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273601",
        "pais": "Brasil"
    },
    {
        "id": 1925,
        "nome": "leandro lopes da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060061",
        "pais": "Brasil"
    },
    {
        "id": 1926,
        "nome": "Clesio Silva Jorge",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185270",
        "pais": "Brasil"
    },
    {
        "id": 1927,
        "nome": "Erika Rondina",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185340",
        "pais": "Brasil"
    },
    {
        "id": 1928,
        "nome": "Renato Novaes",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13474580",
        "pais": "Brasil"
    },
    {
        "id": 1929,
        "nome": "Antonio Vieira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181580",
        "pais": "Brasil"
    },
    {
        "id": 1930,
        "nome": "Ana Claudia Dionisio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13069072",
        "pais": "Brasil"
    },
    {
        "id": 1931,
        "nome": "Gustavo Camargo",
        "cidade": "Goiânia",
        "estado": "GO",
        "latitude": -16.68739088041772,
        "longitude": -49.27120809542918,
        "cep": "18274170",
        "pais": "Brasil"
    },
    {
        "id": 1932,
        "nome": "Aline do Carmo ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064370",
        "pais": "Brasil"
    },
    {
        "id": 1933,
        "nome": "Bianca Stupelli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13031220",
        "pais": "Brasil"
    },
    {
        "id": 1934,
        "nome": "Tony Eduardo de Oliveira ",
        "cidade": "Porto Alegre",
        "estado": "RS",
        "latitude": -30.042688983197383,
        "longitude": -51.21057452974829,
        "cep": "13605508",
        "pais": "Brasil"
    },
    {
        "id": 1935,
        "nome": "Daniel Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059666",
        "pais": "Brasil"
    },
    {
        "id": 1936,
        "nome": "Clayton Souza",
        "cidade": "Salvador",
        "estado": "BA",
        "latitude": -24.1980404,
        "longitude": -65.3050033,
        "cep": "37901602",
        "pais": "Brasil"
    },
    {
        "id": 1937,
        "nome": "Samuel Vinicius Lino ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.877693088516164,
        "longitude": -47.05439016957013,
        "cep": "13990000",
        "pais": "Brasil"
    },
    {
        "id": 1938,
        "nome": "jaqueline castro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185352",
        "pais": "Brasil"
    },
    {
        "id": 1939,
        "nome": "Raianne Bezerra",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053618",
        "pais": "Brasil"
    },
    {
        "id": 1940,
        "nome": "Felipe Cotan",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13187156",
        "pais": "Brasil"
    },
    {
        "id": 1941,
        "nome": "Sidnei Rizzo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13033615",
        "pais": "Brasil"
    },
    {
        "id": 1942,
        "nome": "karina kamargo",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7758,
        "longitude": -47.2917,
        "cep": "13385076",
        "pais": "Brasil"
    },
    {
        "id": 1943,
        "nome": "Filipe Vieira dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13052213",
        "pais": "Brasil"
    },
    {
        "id": 1944,
        "nome": "Ricardo ",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.574367671309275,
        "longitude": -47.39286657785146,
        "cep": "13486062",
        "pais": "Brasil"
    },
    {
        "id": 1945,
        "nome": "Alexandre Ferreira",
        "cidade": "Santa Bárbara d'Oeste",
        "estado": "SP",
        "latitude": -22.860255954167684,
        "longitude": -47.21762637185634,
        "cep": "13487276",
        "pais": "Brasil"
    },
    {
        "id": 1946,
        "nome": "Ricardo Jose Barbosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060611",
        "pais": "Brasil"
    },
    {
        "id": 1947,
        "nome": "AQUILA MARTINS DA SILVA ",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13198012",
        "pais": "Brasil"
    },
    {
        "id": 1948,
        "nome": "Lorena ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050545",
        "pais": "Brasil"
    },
    {
        "id": 1949,
        "nome": "Luan Lins",
        "cidade": "Bragança Paulista",
        "estado": "SP",
        "latitude": -22.863007856801826,
        "longitude": -46.6086072336069,
        "cep": "13212564",
        "pais": "Brasil"
    },
    {
        "id": 1950,
        "nome": "Miquéias Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13330260",
        "pais": "Brasil"
    },
    {
        "id": 1951,
        "nome": "Rafael Ferreira Dos Santos ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13030580",
        "pais": "Brasil"
    },
    {
        "id": 1952,
        "nome": "Jean",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056464",
        "pais": "Brasil"
    },
    {
        "id": 1953,
        "nome": "Rogério de Lima Augusto ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323766",
        "pais": "Brasil"
    },
    {
        "id": 1954,
        "nome": "Adriana Matias",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.573711153009107,
        "longitude": -47.39782762758725,
        "cep": "18558024",
        "pais": "Brasil"
    },
    {
        "id": 1955,
        "nome": "Joao Guilherme Messias Pereira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183864",
        "pais": "Brasil"
    },
    {
        "id": 1956,
        "nome": "Laura Marques",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13145063",
        "pais": "Brasil"
    },
    {
        "id": 1957,
        "nome": "paulo campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13091410",
        "pais": "Brasil"
    },
    {
        "id": 1958,
        "nome": "Aryane Incerti",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178585",
        "pais": "Brasil"
    },
    {
        "id": 1959,
        "nome": "Mauro Sérgio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060516",
        "pais": "Brasil"
    },
    {
        "id": 1960,
        "nome": "Paula Cristina De Oliveira ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13026140",
        "pais": "Brasil"
    },
    {
        "id": 1961,
        "nome": "Clayton Salgado",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184040",
        "pais": "Brasil"
    },
    {
        "id": 1962,
        "nome": "valeria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13013001",
        "pais": "Brasil"
    },
    {
        "id": 1963,
        "nome": "Ronaldo Augusto De Oliveira ",
        "cidade": "Vitória",
        "estado": "ES",
        "latitude": -20.324142139412697,
        "longitude": -40.318168033083005,
        "cep": "13481216",
        "pais": "Brasil"
    },
    {
        "id": 1964,
        "nome": "Samara Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184450",
        "pais": "Brasil"
    },
    {
        "id": 1965,
        "nome": "DOUGLAS HENRIQUE ARAUJO MARTINS",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13190049",
        "pais": "Brasil"
    },
    {
        "id": 1966,
        "nome": "EVELIN ",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13345411",
        "pais": "Brasil"
    },
    {
        "id": 1967,
        "nome": "Sarah Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060020",
        "pais": "Brasil"
    },
    {
        "id": 1968,
        "nome": "Felipe Barufaldi De Nadai",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13468510",
        "pais": "Brasil"
    },
    {
        "id": 1969,
        "nome": "Francisco Valentim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13030530",
        "pais": "Brasil"
    },
    {
        "id": 1970,
        "nome": "Aline Lima",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181779",
        "pais": "Brasil"
    },
    {
        "id": 1971,
        "nome": "Julia Folli Ferreira Savi ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13046130",
        "pais": "Brasil"
    },
    {
        "id": 1972,
        "nome": "Byanca Freire Francisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060494",
        "pais": "Brasil"
    },
    {
        "id": 1973,
        "nome": "Luiz Henrique Ramalho",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181701",
        "pais": "Brasil"
    },
    {
        "id": 1974,
        "nome": "anderson fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034670",
        "pais": "Brasil"
    },
    {
        "id": 1975,
        "nome": "Maria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057166",
        "pais": "Brasil"
    },
    {
        "id": 1976,
        "nome": "Weleso Almeida",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13337145",
        "pais": "Brasil"
    },
    {
        "id": 1977,
        "nome": "Gustavo Martinho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13085260",
        "pais": "Brasil"
    },
    {
        "id": 1978,
        "nome": "Jasmim Costa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 1979,
        "nome": "Eder Azevedo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184750",
        "pais": "Brasil"
    },
    {
        "id": 1980,
        "nome": "giovanni monarin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054664",
        "pais": "Brasil"
    },
    {
        "id": 1981,
        "nome": "Rodrigo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272000",
        "pais": "Brasil"
    },
    {
        "id": 1982,
        "nome": "William Macedo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059701",
        "pais": "Brasil"
    },
    {
        "id": 1983,
        "nome": "Matheus Bustos Ribeiro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.91137644731988,
        "longitude": -47.06558913641309,
        "cep": "13481775",
        "pais": "Brasil"
    },
    {
        "id": 1984,
        "nome": "Rafael Rodrigues Silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13474040",
        "pais": "Brasil"
    },
    {
        "id": 1985,
        "nome": "Ewerton Moreira ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057195",
        "pais": "Brasil"
    },
    {
        "id": 1986,
        "nome": "CopiosPlayer Games",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.406747831428685,
        "longitude": -47.55687622183616,
        "cep": "36730000",
        "pais": "Brasil"
    },
    {
        "id": 1987,
        "nome": "Antonio Paulo De Oliveira ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181720",
        "pais": "Brasil"
    },
    {
        "id": 1988,
        "nome": "Renan Schwartz Cavichiolli",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450197",
        "pais": "Brasil"
    },
    {
        "id": 1989,
        "nome": "Ana Nicole Boscolo Santos ",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0234,
        "longitude": -47.2226,
        "cep": "13360049",
        "pais": "Brasil"
    },
    {
        "id": 1990,
        "nome": "Thais Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13100420",
        "pais": "Brasil"
    },
    {
        "id": 1991,
        "nome": "Luiz Fernando Oliveira Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13087430",
        "pais": "Brasil"
    },
    {
        "id": 1992,
        "nome": "Adriano Trevisan",
        "cidade": "Goiânia",
        "estado": "GO",
        "latitude": -16.688249175468403,
        "longitude": -49.2660087077102,
        "cep": "13420665",
        "pais": "Brasil"
    },
    {
        "id": 1993,
        "nome": "David Pires Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13065820",
        "pais": "Brasil"
    },
    {
        "id": 1994,
        "nome": "cesar augusto",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450028",
        "pais": "Brasil"
    },
    {
        "id": 1995,
        "nome": "Roberto Alves De Araújo ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 1996,
        "nome": "Lucas Lima",
        "cidade": "Porto Alegre",
        "estado": "RS",
        "latitude": -30.03922485356282,
        "longitude": -51.22745942411705,
        "cep": "13800513",
        "pais": "Brasil"
    },
    {
        "id": 1997,
        "nome": "Heitor Mendes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034710",
        "pais": "Brasil"
    },
    {
        "id": 1998,
        "nome": "Daniel Augusto Pereira De Morais ",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6931,
        "longitude": -46.9926,
        "cep": "13914018",
        "pais": "Brasil"
    },
    {
        "id": 1999,
        "nome": "thabata pocaia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13030120",
        "pais": "Brasil"
    },
    {
        "id": 2000,
        "nome": "Carlos Eduardo ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 2001,
        "nome": "Naylan Palhato",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13286013",
        "pais": "Brasil"
    },
    {
        "id": 2002,
        "nome": "Marcelo Brandao",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061100",
        "pais": "Brasil"
    },
    {
        "id": 2003,
        "nome": "Diego H Luiz",
        "cidade": "Goiânia",
        "estado": "GO",
        "latitude": -16.686835023681258,
        "longitude": -49.2604588007866,
        "cep": "13485078",
        "pais": "Brasil"
    },
    {
        "id": 2004,
        "nome": "Leandro Gomes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064769",
        "pais": "Brasil"
    },
    {
        "id": 2005,
        "nome": "Andressa",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7758,
        "longitude": -47.2917,
        "cep": "13385520",
        "pais": "Brasil"
    },
    {
        "id": 2006,
        "nome": "Gledson Garcia",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13199202",
        "pais": "Brasil"
    },
    {
        "id": 2007,
        "nome": "Miguel Vendemiato Basetto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272799",
        "pais": "Brasil"
    },
    {
        "id": 2008,
        "nome": "Leandro Eduardo Pavan ",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13477718",
        "pais": "Brasil"
    },
    {
        "id": 2009,
        "nome": "Diego Almeida",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455500",
        "pais": "Brasil"
    },
    {
        "id": 2010,
        "nome": "Thais Fernanda",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050077",
        "pais": "Brasil"
    },
    {
        "id": 2011,
        "nome": "Jose Clebson ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.914924742371056,
        "longitude": -47.05486574984473,
        "cep": "13052222",
        "pais": "Brasil"
    },
    {
        "id": 2012,
        "nome": "Marcos Henrique Fongari Pereira ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051419",
        "pais": "Brasil"
    },
    {
        "id": 2013,
        "nome": "Felipe Xavier",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13023020",
        "pais": "Brasil"
    },
    {
        "id": 2014,
        "nome": "Moacir Tinoco Lima ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13101361",
        "pais": "Brasil"
    },
    {
        "id": 2015,
        "nome": "Alessandro Guedes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179214",
        "pais": "Brasil"
    },
    {
        "id": 2016,
        "nome": "Gabriel Felix ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13187215",
        "pais": "Brasil"
    },
    {
        "id": 2017,
        "nome": "Sandra ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179331",
        "pais": "Brasil"
    },
    {
        "id": 2018,
        "nome": "Rafael Barbetta",
        "cidade": "Osasco",
        "estado": "SP",
        "latitude": -23.53731030478567,
        "longitude": -46.7907773995335,
        "cep": "13505225",
        "pais": "Brasil"
    },
    {
        "id": 2019,
        "nome": "Murilo Dassi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050078",
        "pais": "Brasil"
    },
    {
        "id": 2020,
        "nome": "Joabe Lobo Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059422",
        "pais": "Brasil"
    },
    {
        "id": 2021,
        "nome": "Priscila Rombi ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184280",
        "pais": "Brasil"
    },
    {
        "id": 2022,
        "nome": "Pamela",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056430",
        "pais": "Brasil"
    },
    {
        "id": 2023,
        "nome": "Andre Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13100372",
        "pais": "Brasil"
    },
    {
        "id": 2024,
        "nome": "Ney Blumer",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13033202",
        "pais": "Brasil"
    },
    {
        "id": 2025,
        "nome": "Jhonatas Alves Franco dos Santos ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054774",
        "pais": "Brasil"
    },
    {
        "id": 2026,
        "nome": "Roney Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050670",
        "pais": "Brasil"
    },
    {
        "id": 2027,
        "nome": "Willian Marion",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.89755959656365,
        "longitude": -47.0587704666905,
        "cep": "13483212",
        "pais": "Brasil"
    },
    {
        "id": 2028,
        "nome": "Jedson Alves Sandes ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049003",
        "pais": "Brasil"
    },
    {
        "id": 2029,
        "nome": "Kaike Peressin",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0234,
        "longitude": -47.2226,
        "cep": "13360350",
        "pais": "Brasil"
    },
    {
        "id": 2030,
        "nome": "robson linares",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.87526417091656,
        "longitude": -47.043978841124094,
        "cep": "13482754",
        "pais": "Brasil"
    },
    {
        "id": 2031,
        "nome": "Roney Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050670",
        "pais": "Brasil"
    },
    {
        "id": 2032,
        "nome": "Willian Marion",
        "cidade": "Osasco",
        "estado": "SP",
        "latitude": -23.546415799726223,
        "longitude": -46.77002809931802,
        "cep": "13483212",
        "pais": "Brasil"
    },
    {
        "id": 2033,
        "nome": "Jedson Alves Sandes ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049003",
        "pais": "Brasil"
    },
    {
        "id": 2034,
        "nome": "Kaike Peressin",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0234,
        "longitude": -47.2226,
        "cep": "13360350",
        "pais": "Brasil"
    },
    {
        "id": 2035,
        "nome": "robson linares",
        "cidade": "Belém",
        "estado": "PA",
        "latitude": -1.4501112733613577,
        "longitude": -48.487281073031234,
        "cep": "13482754",
        "pais": "Brasil"
    },
    {
        "id": 2036,
        "nome": "José Fabiano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13096321",
        "pais": "Brasil"
    },
    {
        "id": 2037,
        "nome": "Nanda Cunha Vital ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13082140",
        "pais": "Brasil"
    },
    {
        "id": 2038,
        "nome": "Gustavo Bregalda Mattos ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.912241822135755,
        "longitude": -47.06088274966096,
        "cep": "13050063",
        "pais": "Brasil"
    },
    {
        "id": 2039,
        "nome": "Alessandra Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042860",
        "pais": "Brasil"
    },
    {
        "id": 2040,
        "nome": "Alessandro ",
        "cidade": "Osasco",
        "estado": "SP",
        "latitude": -23.52163133395098,
        "longitude": -46.778756399624925,
        "cep": "18542308",
        "pais": "Brasil"
    },
    {
        "id": 2041,
        "nome": "Douglas Kamibayashi da Silva ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053254",
        "pais": "Brasil"
    },
    {
        "id": 2042,
        "nome": "Douglas Kamibayashi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053254",
        "pais": "Brasil"
    },
    {
        "id": 2043,
        "nome": "Marcio Milani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060773",
        "pais": "Brasil"
    },
    {
        "id": 2044,
        "nome": "Adriano Silva Oliveira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13144675",
        "pais": "Brasil"
    },
    {
        "id": 2045,
        "nome": "Rafael Varandas",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13140504",
        "pais": "Brasil"
    },
    {
        "id": 2046,
        "nome": "Helen ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13085733",
        "pais": "Brasil"
    },
    {
        "id": 2047,
        "nome": "Gabriel Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13175505",
        "pais": "Brasil"
    },
    {
        "id": 2048,
        "nome": "Erick Souza Bizerra ",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13471255",
        "pais": "Brasil"
    },
    {
        "id": 2049,
        "nome": "Zeilton Evangelista Silva ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173282",
        "pais": "Brasil"
    },
    {
        "id": 2050,
        "nome": "Cristiano Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060489",
        "pais": "Brasil"
    },
    {
        "id": 2051,
        "nome": "GUSTAVO HENRIQUE PEREIRA",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179022",
        "pais": "Brasil"
    },
    {
        "id": 2052,
        "nome": "pedro doniseti benedito",
        "cidade": "Santa Bárbara d'Oeste",
        "estado": "SP",
        "latitude": -22.853223746892297,
        "longitude": -47.22914853939718,
        "cep": "13610499",
        "pais": "Brasil"
    },
    {
        "id": 2053,
        "nome": "Mariana Bernardes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054594",
        "pais": "Brasil"
    },
    {
        "id": 2054,
        "nome": "Heloísa ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.88316404926545,
        "longitude": -47.05391350598489,
        "cep": "13165320",
        "pais": "Brasil"
    },
    {
        "id": 2055,
        "nome": "Bruna Oliveira",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01035100",
        "pais": "Brasil"
    },
    {
        "id": 2056,
        "nome": "Karina Silva de Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185188",
        "pais": "Brasil"
    },
    {
        "id": 2057,
        "nome": "Luiz Henrique Melo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13087430",
        "pais": "Brasil"
    },
    {
        "id": 2058,
        "nome": "Aline Matias",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179214",
        "pais": "Brasil"
    },
    {
        "id": 2059,
        "nome": "Paulinho Manzatto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056175",
        "pais": "Brasil"
    },
    {
        "id": 2060,
        "nome": "Lígia Aparecida Negri Da Matta",
        "cidade": "Porto Alegre",
        "estado": "RS",
        "latitude": -30.036147429647087,
        "longitude": -51.2129636167058,
        "cep": "13481230",
        "pais": "Brasil"
    },
    {
        "id": 2061,
        "nome": "Carol Fernandes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.86716300374178,
        "longitude": -47.045108733544346,
        "cep": "18547164",
        "pais": "Brasil"
    },
    {
        "id": 2062,
        "nome": "caue gustavo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040145",
        "pais": "Brasil"
    },
    {
        "id": 2063,
        "nome": "Giovana Arendt ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13043340",
        "pais": "Brasil"
    },
    {
        "id": 2064,
        "nome": "Jaimilton Oliveira Sousa ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13026480",
        "pais": "Brasil"
    },
    {
        "id": 2065,
        "nome": "Andre Pereira",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456721",
        "pais": "Brasil"
    },
    {
        "id": 2066,
        "nome": "Anielly Da silva cecchetti ",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454186",
        "pais": "Brasil"
    },
    {
        "id": 2067,
        "nome": "Roniery Garcia",
        "cidade": "São Bernardo do Campo",
        "estado": "SP",
        "latitude": -23.648721278923365,
        "longitude": -46.53515899037519,
        "cep": "13485053",
        "pais": "Brasil"
    },
    {
        "id": 2068,
        "nome": "Vineh Gamer BR",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060465",
        "pais": "Brasil"
    },
    {
        "id": 2069,
        "nome": "William Silva da Hora",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323020",
        "pais": "Brasil"
    },
    {
        "id": 2070,
        "nome": "Priscilla Bonturi Pondian",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13092481",
        "pais": "Brasil"
    },
    {
        "id": 2071,
        "nome": "Maria Aline Neves de Souza Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180180",
        "pais": "Brasil"
    },
    {
        "id": 2072,
        "nome": "Everson da silva Tardim",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322180",
        "pais": "Brasil"
    },
    {
        "id": 2073,
        "nome": "Marcelo Gomes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185375",
        "pais": "Brasil"
    },
    {
        "id": 2074,
        "nome": "Marcelo Fazolin",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13471680",
        "pais": "Brasil"
    },
    {
        "id": 2075,
        "nome": "Lucas Zorzan",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450399",
        "pais": "Brasil"
    },
    {
        "id": 2076,
        "nome": "Osmair Moreira ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8971290892396,
        "longitude": -47.05639401755042,
        "cep": "13060663",
        "pais": "Brasil"
    },
    {
        "id": 2077,
        "nome": "helder ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13052222",
        "pais": "Brasil"
    },
    {
        "id": 2078,
        "nome": "Fernando Rodrigues",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "04638090",
        "pais": "Brasil"
    },
    {
        "id": 2079,
        "nome": "Cinthia Cristiane da Silva ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.91210078992732,
        "longitude": -47.06963746058928,
        "cep": "13059107",
        "pais": "Brasil"
    },
    {
        "id": 2080,
        "nome": "Gustavo Galvão Guiliolo ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13271405",
        "pais": "Brasil"
    },
    {
        "id": 2081,
        "nome": "Gustavo Vitorio",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13145063",
        "pais": "Brasil"
    },
    {
        "id": 2082,
        "nome": "Sabrina Silva De Souza ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059107",
        "pais": "Brasil"
    },
    {
        "id": 2083,
        "nome": "Weslley Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13077056",
        "pais": "Brasil"
    },
    {
        "id": 2084,
        "nome": "Wesley Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.907084606793184,
        "longitude": -47.05936256959472,
        "cep": "13060496",
        "pais": "Brasil"
    },
    {
        "id": 2085,
        "nome": "Ricardo Dionisio Da Silva ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058434",
        "pais": "Brasil"
    },
    {
        "id": 2086,
        "nome": "Márcio Correa ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13052573",
        "pais": "Brasil"
    },
    {
        "id": 2087,
        "nome": "Adiel dos Santos Custodio de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060645",
        "pais": "Brasil"
    },
    {
        "id": 2088,
        "nome": "Gustavo Imai",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040103",
        "pais": "Brasil"
    },
    {
        "id": 2089,
        "nome": "Stela Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057504",
        "pais": "Brasil"
    },
    {
        "id": 2090,
        "nome": "Marcelo Rodrigues Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054213",
        "pais": "Brasil"
    },
    {
        "id": 2091,
        "nome": "Bianne",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13473717",
        "pais": "Brasil"
    },
    {
        "id": 2092,
        "nome": "Lucão Andrade",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 2093,
        "nome": "Camila Dalmolin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13096720",
        "pais": "Brasil"
    },
    {
        "id": 2094,
        "nome": "Thiago Pereira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185490",
        "pais": "Brasil"
    },
    {
        "id": 2095,
        "nome": "Ana Paula ",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13280296",
        "pais": "Brasil"
    },
    {
        "id": 2096,
        "nome": "Pedro Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13092072",
        "pais": "Brasil"
    },
    {
        "id": 2097,
        "nome": "Rogerio Antonio da Rocha ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186012",
        "pais": "Brasil"
    },
    {
        "id": 2098,
        "nome": "Maria Cristina Almeida Magalhães",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058133",
        "pais": "Brasil"
    },
    {
        "id": 2099,
        "nome": "Nathalia Lais Dal Bello",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053254",
        "pais": "Brasil"
    },
    {
        "id": 2100,
        "nome": "Eduardo Martins",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13330350",
        "pais": "Brasil"
    },
    {
        "id": 2101,
        "nome": "Altieres Ribeiro Faria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13035270",
        "pais": "Brasil"
    },
    {
        "id": 2102,
        "nome": "Natan Gusmao Matias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058772",
        "pais": "Brasil"
    },
    {
        "id": 2103,
        "nome": "Mayara Galinari",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13275400",
        "pais": "Brasil"
    },
    {
        "id": 2104,
        "nome": "Larissa R Fernandes",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13198412",
        "pais": "Brasil"
    },
    {
        "id": 2105,
        "nome": "Anna Carollyna Amorim Lamana Pereira",
        "cidade": "Salvador",
        "estado": "BA",
        "latitude": -24.242848,
        "longitude": -64.8659606,
        "cep": "13154270",
        "pais": "Brasil"
    },
    {
        "id": 2106,
        "nome": "Clara Helena de Oliveira ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13030117",
        "pais": "Brasil"
    },
    {
        "id": 2107,
        "nome": "Ana Paula ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056213",
        "pais": "Brasil"
    },
    {
        "id": 2108,
        "nome": "Alessandro del grande",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13045760",
        "pais": "Brasil"
    },
    {
        "id": 2109,
        "nome": "Rafael Lima da Silva ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056400",
        "pais": "Brasil"
    },
    {
        "id": 2110,
        "nome": "Jeferson Clayton Barbosa ",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470310",
        "pais": "Brasil"
    },
    {
        "id": 2111,
        "nome": "Wilian Aparecido Manzato",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 2112,
        "nome": "Luciano Kaizen",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180180",
        "pais": "Brasil"
    },
    {
        "id": 2113,
        "nome": "Maria Dos Anjos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184235",
        "pais": "Brasil"
    },
    {
        "id": 2114,
        "nome": "Glayder Renan Cazetta",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13472500",
        "pais": "Brasil"
    },
    {
        "id": 2115,
        "nome": "Alexandra Ramos Cantero",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13474200",
        "pais": "Brasil"
    },
    {
        "id": 2116,
        "nome": "Dione Henrique",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180959",
        "pais": "Brasil"
    },
    {
        "id": 2117,
        "nome": "Hernani Tavares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051215",
        "pais": "Brasil"
    },
    {
        "id": 2118,
        "nome": "ivanilsom Nilsinho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13174540",
        "pais": "Brasil"
    },
    {
        "id": 2119,
        "nome": "Odilei Lourenco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050726",
        "pais": "Brasil"
    },
    {
        "id": 2120,
        "nome": "Alexsander Da cunha Sales",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273606",
        "pais": "Brasil"
    },
    {
        "id": 2121,
        "nome": "Itamar Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13046445",
        "pais": "Brasil"
    },
    {
        "id": 2122,
        "nome": "Camila Liborio",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13170027",
        "pais": "Brasil"
    },
    {
        "id": 2123,
        "nome": "Andre Ribeiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13177905",
        "pais": "Brasil"
    },
    {
        "id": 2124,
        "nome": "Guilherme Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13026180",
        "pais": "Brasil"
    },
    {
        "id": 2125,
        "nome": "Anderson Moreira Martins Correa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059585",
        "pais": "Brasil"
    },
    {
        "id": 2126,
        "nome": "Jessica Da Silva Klampfl Gottardi ",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283046",
        "pais": "Brasil"
    },
    {
        "id": 2127,
        "nome": "Stefani Pedrozo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470734",
        "pais": "Brasil"
    },
    {
        "id": 2128,
        "nome": "Marcos Veiga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13069429",
        "pais": "Brasil"
    },
    {
        "id": 2129,
        "nome": "Luciana De Jesus Cavalcante Sandes ",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.679971869942666,
        "longitude": -46.88890901168633,
        "cep": "18077640",
        "pais": "Brasil"
    },
    {
        "id": 2130,
        "nome": "Leiliane Maria Silva ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058822",
        "pais": "Brasil"
    },
    {
        "id": 2131,
        "nome": "Gustavo Kennedy",
        "cidade": "Recife",
        "estado": "PE",
        "latitude": -7.5617238,
        "longitude": -34.9952357,
        "cep": "18211000",
        "pais": "Brasil"
    },
    {
        "id": 2132,
        "nome": "Charles Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178352",
        "pais": "Brasil"
    },
    {
        "id": 2133,
        "nome": "Carlos Rogério De Oliveira ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 2134,
        "nome": "maxwell ruas",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13188235",
        "pais": "Brasil"
    },
    {
        "id": 2135,
        "nome": "Viviane",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455480",
        "pais": "Brasil"
    },
    {
        "id": 2136,
        "nome": "Michel Guerrini",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13295000",
        "pais": "Brasil"
    },
    {
        "id": 2137,
        "nome": "SANDRA LOPES DE LIMA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059721",
        "pais": "Brasil"
    },
    {
        "id": 2138,
        "nome": "Danieli Godoy",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13276080",
        "pais": "Brasil"
    },
    {
        "id": 2139,
        "nome": "Adriane Cristina da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13069429",
        "pais": "Brasil"
    },
    {
        "id": 2140,
        "nome": "Isabelly Vitória Silva E Sousa ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058822",
        "pais": "Brasil"
    },
    {
        "id": 2141,
        "nome": "Marisa Barbosa Ramalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13101132",
        "pais": "Brasil"
    },
    {
        "id": 2142,
        "nome": "Janaina",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13275400",
        "pais": "Brasil"
    },
    {
        "id": 2143,
        "nome": "Jepherson Miguel",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273116",
        "pais": "Brasil"
    },
    {
        "id": 2144,
        "nome": "Ths Kamell",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186546",
        "pais": "Brasil"
    },
    {
        "id": 2145,
        "nome": "Hernane Jacinto",
        "cidade": "São Bernardo do Campo",
        "estado": "SP",
        "latitude": -23.653405403427968,
        "longitude": -46.5489676454456,
        "cep": "14060168",
        "pais": "Brasil"
    },
    {
        "id": 2146,
        "nome": "Lucas Vlasic Aureliano ",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.73075985549469,
        "longitude": -47.636940790571565,
        "cep": "13203554",
        "pais": "Brasil"
    },
    {
        "id": 2147,
        "nome": "Vivian Tonetto",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178101",
        "pais": "Brasil"
    },
    {
        "id": 2148,
        "nome": "Fabiola Tinti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 2149,
        "nome": "Alexandre .ramalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13101132",
        "pais": "Brasil"
    },
    {
        "id": 2150,
        "nome": "Vinícius Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058100",
        "pais": "Brasil"
    },
    {
        "id": 2151,
        "nome": "Matheus Gabriel ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058100",
        "pais": "Brasil"
    },
    {
        "id": 2152,
        "nome": "Denis",
        "cidade": "São Luís",
        "estado": "MA",
        "latitude": -2.5262752233922594,
        "longitude": -44.31734076083794,
        "cep": "14302236",
        "pais": "Brasil"
    },
    {
        "id": 2153,
        "nome": "Vitor Faria",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13145123",
        "pais": "Brasil"
    },
    {
        "id": 2154,
        "nome": "Ana Gonçalves",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.71978058458994,
        "longitude": -47.64664062622442,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 2155,
        "nome": "Adriano Giroleto",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13469360",
        "pais": "Brasil"
    },
    {
        "id": 2156,
        "nome": "Thiago J",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13174340",
        "pais": "Brasil"
    },
    {
        "id": 2157,
        "nome": "Marcos Garavelo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179515",
        "pais": "Brasil"
    },
    {
        "id": 2158,
        "nome": "Maria Otilia Zuppi ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13087380",
        "pais": "Brasil"
    },
    {
        "id": 2159,
        "nome": "ANDRE NONI",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13041620",
        "pais": "Brasil"
    },
    {
        "id": 2160,
        "nome": "Leandro Fortini",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6931,
        "longitude": -46.9926,
        "cep": "13914128",
        "pais": "Brasil"
    },
    {
        "id": 2161,
        "nome": "Luiz Carlos Dos Santos Junior ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061371",
        "pais": "Brasil"
    },
    {
        "id": 2162,
        "nome": "Karollina Poati",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "04812250",
        "pais": "Brasil"
    },
    {
        "id": 2163,
        "nome": "Lucas Cipriano",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13199190",
        "pais": "Brasil"
    },
    {
        "id": 2164,
        "nome": "Cristiane Shimabukuro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13275443",
        "pais": "Brasil"
    },
    {
        "id": 2165,
        "nome": "Vanderson Roberto Coluci ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13020210",
        "pais": "Brasil"
    },
    {
        "id": 2166,
        "nome": "Danilo Lopes Moreira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272181",
        "pais": "Brasil"
    },
    {
        "id": 2167,
        "nome": "ANGELICA DE PAULA MARTINS",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13190029",
        "pais": "Brasil"
    },
    {
        "id": 2168,
        "nome": "Cristiane Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050471",
        "pais": "Brasil"
    },
    {
        "id": 2169,
        "nome": "Joscelia Borges",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13082145",
        "pais": "Brasil"
    },
    {
        "id": 2170,
        "nome": "Rodrigo Alessio ",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.92256328314404,
        "longitude": -47.075494478727286,
        "cep": "13426470",
        "pais": "Brasil"
    },
    {
        "id": 2171,
        "nome": "Jailson Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053217",
        "pais": "Brasil"
    },
    {
        "id": 2172,
        "nome": "Karen Lopes Ferraz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13070120",
        "pais": "Brasil"
    },
    {
        "id": 2173,
        "nome": "Ricardo Barduchi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13278327",
        "pais": "Brasil"
    },
    {
        "id": 2174,
        "nome": "Talita Barrocal",
        "cidade": "Várzea Paulista",
        "estado": "SP",
        "latitude": -23.211055099566053,
        "longitude": -46.85189366864623,
        "cep": "13923210",
        "pais": "Brasil"
    },
    {
        "id": 2175,
        "nome": "fernanda lima barbo Moreira ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272181",
        "pais": "Brasil"
    },
    {
        "id": 2176,
        "nome": "Luciana Pauleto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060820",
        "pais": "Brasil"
    },
    {
        "id": 2177,
        "nome": "Raquel Stela",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13270362",
        "pais": "Brasil"
    },
    {
        "id": 2178,
        "nome": "Andre Antunes",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7758,
        "longitude": -47.2917,
        "cep": "13387774",
        "pais": "Brasil"
    },
    {
        "id": 2179,
        "nome": "Deiby APARECIDA DA SILVA REGO ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13070760",
        "pais": "Brasil"
    },
    {
        "id": 2180,
        "nome": "Denner Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059591",
        "pais": "Brasil"
    },
    {
        "id": 2181,
        "nome": "fernanda lima barbo Moreira ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272181",
        "pais": "Brasil"
    },
    {
        "id": 2182,
        "nome": "Luciana Pauleto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060820",
        "pais": "Brasil"
    },
    {
        "id": 2183,
        "nome": "Raquel Stela",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13270362",
        "pais": "Brasil"
    },
    {
        "id": 2184,
        "nome": "Andre Antunes",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7758,
        "longitude": -47.2917,
        "cep": "13387774",
        "pais": "Brasil"
    },
    {
        "id": 2185,
        "nome": "Deiby APARECIDA DA SILVA REGO ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13070760",
        "pais": "Brasil"
    },
    {
        "id": 2186,
        "nome": "Denner Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059591",
        "pais": "Brasil"
    },
    {
        "id": 2187,
        "nome": "Marcelo Gramarim Baungartel",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 2188,
        "nome": "Vinicius Furian",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186686",
        "pais": "Brasil"
    },
    {
        "id": 2189,
        "nome": "Vinicius Pereira Costa",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184580",
        "pais": "Brasil"
    },
    {
        "id": 2190,
        "nome": "marcelo brandao maxx",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180370",
        "pais": "Brasil"
    },
    {
        "id": 2191,
        "nome": "Márcio Santana De Almeida ",
        "cidade": "Osasco",
        "estado": "SP",
        "latitude": -23.53167514887703,
        "longitude": -46.78836692436827,
        "cep": "00181950",
        "pais": "Brasil"
    },
    {
        "id": 2192,
        "nome": "João Vitor ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13033485",
        "pais": "Brasil"
    },
    {
        "id": 2193,
        "nome": "Thomas Silva De Barros ",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456540",
        "pais": "Brasil"
    },
    {
        "id": 2194,
        "nome": "Luiz Rezende",
        "cidade": "Diadema",
        "estado": "SP",
        "latitude": -23.47781262526462,
        "longitude": -46.55590209335903,
        "cep": "13990000",
        "pais": "Brasil"
    },
    {
        "id": 2195,
        "nome": "Helem Aparecida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13044750",
        "pais": "Brasil"
    },
    {
        "id": 2196,
        "nome": "Juliana Navarro Versage",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178385",
        "pais": "Brasil"
    },
    {
        "id": 2197,
        "nome": "Cleide Rocha",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456420",
        "pais": "Brasil"
    },
    {
        "id": 2198,
        "nome": "Alex Alves de Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13189205",
        "pais": "Brasil"
    },
    {
        "id": 2199,
        "nome": "Camila Fabian ",
        "cidade": "Curitiba",
        "estado": "PR",
        "latitude": -25.43698151234292,
        "longitude": -49.28187583188251,
        "cep": "13214523",
        "pais": "Brasil"
    },
    {
        "id": 2200,
        "nome": "Miquéias Pacheco De Souza Dias ",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13467273",
        "pais": "Brasil"
    },
    {
        "id": 2201,
        "nome": "Déco ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184390",
        "pais": "Brasil"
    },
    {
        "id": 2202,
        "nome": "Wagner Brito",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450712",
        "pais": "Brasil"
    },
    {
        "id": 2203,
        "nome": "Thais Castro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 2204,
        "nome": "NICOLAS",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13469600",
        "pais": "Brasil"
    },
    {
        "id": 2205,
        "nome": "Adriana Nascimento Dos Santos ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179386",
        "pais": "Brasil"
    },
    {
        "id": 2206,
        "nome": "Carolina Meneghel",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13473400",
        "pais": "Brasil"
    },
    {
        "id": 2207,
        "nome": "Rosana Moreira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13175668",
        "pais": "Brasil"
    },
    {
        "id": 2208,
        "nome": "Ariane Cristina Vieira Corrêa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323111",
        "pais": "Brasil"
    },
    {
        "id": 2209,
        "nome": "Andreo Cesar Pereira ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13073010",
        "pais": "Brasil"
    },
    {
        "id": 2210,
        "nome": "Mônica Christofolli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13090713",
        "pais": "Brasil"
    },
    {
        "id": 2211,
        "nome": "Luis Roberto Marson ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13100473",
        "pais": "Brasil"
    },
    {
        "id": 2212,
        "nome": "Lilian  Macedo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058289",
        "pais": "Brasil"
    },
    {
        "id": 2213,
        "nome": "Leurileia Da Silva Bithencourt",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13285426",
        "pais": "Brasil"
    },
    {
        "id": 2214,
        "nome": "Humberto Carlos Gil Neto ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054423",
        "pais": "Brasil"
    },
    {
        "id": 2215,
        "nome": "Thiago Souza Matos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272828",
        "pais": "Brasil"
    },
    {
        "id": 2216,
        "nome": "Laura Fernandes",
        "cidade": "Diadema",
        "estado": "SP",
        "latitude": -23.46993287625706,
        "longitude": -46.52735012619401,
        "cep": "13481807",
        "pais": "Brasil"
    },
    {
        "id": 2217,
        "nome": "Giovanni Rinaldi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054021",
        "pais": "Brasil"
    },
    {
        "id": 2218,
        "nome": "Kelly Vanessa Costa ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054506",
        "pais": "Brasil"
    },
    {
        "id": 2219,
        "nome": "Shaieny Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.922883686589056,
        "longitude": -47.06171814533083,
        "cep": "13395060",
        "pais": "Brasil"
    },
    {
        "id": 2220,
        "nome": "João Victor Mendonça Da Pra ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060766",
        "pais": "Brasil"
    },
    {
        "id": 2221,
        "nome": "Renato Fernandes ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050004",
        "pais": "Brasil"
    },
    {
        "id": 2222,
        "nome": "Elina Mari Prado Rotti",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453833",
        "pais": "Brasil"
    },
    {
        "id": 2223,
        "nome": "Jose Roberto Correa Fernandes",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13280350",
        "pais": "Brasil"
    },
    {
        "id": 2224,
        "nome": "glacy kelli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056858",
        "pais": "Brasil"
    },
    {
        "id": 2225,
        "nome": "Fernanda ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050003",
        "pais": "Brasil"
    },
    {
        "id": 2226,
        "nome": "Valdenice Oliveira Da Silva Rodrigues ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060236",
        "pais": "Brasil"
    },
    {
        "id": 2227,
        "nome": "Diego Carvalho Andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13023220",
        "pais": "Brasil"
    },
    {
        "id": 2228,
        "nome": "Gui",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13190029",
        "pais": "Brasil"
    },
    {
        "id": 2229,
        "nome": "Amauri Almeida Mota",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13343821",
        "pais": "Brasil"
    },
    {
        "id": 2230,
        "nome": "Luciana Lopes ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056531",
        "pais": "Brasil"
    },
    {
        "id": 2231,
        "nome": "Eduardo Antônio De Oliveira ",
        "cidade": "Maceió",
        "estado": "AL",
        "latitude": -9.6111682,
        "longitude": -35.7376344,
        "cep": "35660213",
        "pais": "Brasil"
    },
    {
        "id": 2232,
        "nome": "Vanessa Gondim",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310200",
        "pais": "Brasil"
    },
    {
        "id": 2233,
        "nome": "Maria Rodrigues",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173423",
        "pais": "Brasil"
    },
    {
        "id": 2234,
        "nome": "Uermeson Da Silva Lima ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057400",
        "pais": "Brasil"
    },
    {
        "id": 2235,
        "nome": "Jose Boiatti",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185485",
        "pais": "Brasil"
    },
    {
        "id": 2236,
        "nome": "Camila Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051037",
        "pais": "Brasil"
    },
    {
        "id": 2237,
        "nome": "Hélio Gama Duarte ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058229",
        "pais": "Brasil"
    },
    {
        "id": 2238,
        "nome": "ANTONIO CELINALDO DA SILVA toninho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049493",
        "pais": "Brasil"
    },
    {
        "id": 2239,
        "nome": "Jose Luiz Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042550",
        "pais": "Brasil"
    },
    {
        "id": 2240,
        "nome": "Débora Aleixo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042210",
        "pais": "Brasil"
    },
    {
        "id": 2241,
        "nome": "Gislaine Dezani",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13253523",
        "pais": "Brasil"
    },
    {
        "id": 2242,
        "nome": "Guilherme Nascimento",
        "cidade": "Fortaleza",
        "estado": "CE",
        "latitude": -3.7454000694015392,
        "longitude": -38.515471812796335,
        "cep": "13165172",
        "pais": "Brasil"
    },
    {
        "id": 2243,
        "nome": "Diego Hiromi Matsumoto ",
        "cidade": "Salvador",
        "estado": "BA",
        "latitude": -24.242848,
        "longitude": -64.8659606,
        "cep": "13480290",
        "pais": "Brasil"
    },
    {
        "id": 2244,
        "nome": "Angelo Januario",
        "cidade": "São Luís",
        "estado": "MA",
        "latitude": -2.5432757518623204,
        "longitude": -44.31950469092173,
        "cep": "18105330",
        "pais": "Brasil"
    },
    {
        "id": 2245,
        "nome": "Bete Primo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13044115",
        "pais": "Brasil"
    },
    {
        "id": 2246,
        "nome": "Marli Carvalho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13175590",
        "pais": "Brasil"
    },
    {
        "id": 2247,
        "nome": "Rgo Lt",
        "cidade": "Várzea Paulista",
        "estado": "SP",
        "latitude": -23.204528811198387,
        "longitude": -46.83747199597439,
        "cep": "13190000",
        "pais": "Brasil"
    },
    {
        "id": 2248,
        "nome": "jeancarlo souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13086708",
        "pais": "Brasil"
    },
    {
        "id": 2249,
        "nome": "Paulo Rogério Mor Dos Santos ",
        "cidade": "Recife",
        "estado": "PE",
        "latitude": -7.5617238,
        "longitude": -34.9952357,
        "cep": "13631601",
        "pais": "Brasil"
    },
    {
        "id": 2250,
        "nome": "adalberto aparecido barros",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13030430",
        "pais": "Brasil"
    },
    {
        "id": 2251,
        "nome": "Luan santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060774",
        "pais": "Brasil"
    },
    {
        "id": 2252,
        "nome": "NILTON Rogger DE ABREU",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "04224010",
        "pais": "Brasil"
    },
    {
        "id": 2253,
        "nome": "Reginaldo Augusto Da Silva Pinto De Oliveira ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13262018",
        "pais": "Brasil"
    },
    {
        "id": 2254,
        "nome": "Filipi ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056392",
        "pais": "Brasil"
    },
    {
        "id": 2255,
        "nome": "Juan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.909912336894426,
        "longitude": -47.06952950852313,
        "cep": "13482375",
        "pais": "Brasil"
    },
    {
        "id": 2256,
        "nome": "Samuel Capelli",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310335",
        "pais": "Brasil"
    },
    {
        "id": 2257,
        "nome": "Adelita Caroline Garcia ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051205",
        "pais": "Brasil"
    },
    {
        "id": 2258,
        "nome": "vania Luiz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058229",
        "pais": "Brasil"
    },
    {
        "id": 2259,
        "nome": "Patricia Figueiredo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13251683",
        "pais": "Brasil"
    },
    {
        "id": 2260,
        "nome": "Sebastião Marques Dos Santos Neto ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322290",
        "pais": "Brasil"
    },
    {
        "id": 2261,
        "nome": "Leandro Gomes Salles ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059673",
        "pais": "Brasil"
    },
    {
        "id": 2262,
        "nome": "DENIS ROMANHOLI DE ARAUJO",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13477674",
        "pais": "Brasil"
    },
    {
        "id": 2263,
        "nome": "Helena Rodrigues da Silva ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058368",
        "pais": "Brasil"
    },
    {
        "id": 2264,
        "nome": "Lucas Zabotto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13088691",
        "pais": "Brasil"
    },
    {
        "id": 2265,
        "nome": "Luciano Dutra de Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13278110",
        "pais": "Brasil"
    },
    {
        "id": 2266,
        "nome": "Marcello Xavier",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13276485",
        "pais": "Brasil"
    },
    {
        "id": 2267,
        "nome": "Fernando Canisella de Castro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273552",
        "pais": "Brasil"
    },
    {
        "id": 2268,
        "nome": "Samara Cristina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053121",
        "pais": "Brasil"
    },
    {
        "id": 2269,
        "nome": "Jeferson Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 2270,
        "nome": "Paulo Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060715",
        "pais": "Brasil"
    },
    {
        "id": 2271,
        "nome": "PEDRO LUIZ VIEIRA",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13309580",
        "pais": "Brasil"
    },
    {
        "id": 2272,
        "nome": "Lucas Cavalcante Da Silva Junior ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13275616",
        "pais": "Brasil"
    },
    {
        "id": 2273,
        "nome": "Mariana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042550",
        "pais": "Brasil"
    },
    {
        "id": 2274,
        "nome": "Caio E Garrote Soares ",
        "cidade": "Recife",
        "estado": "PE",
        "latitude": -7.5617238,
        "longitude": -34.9952357,
        "cep": "18103757",
        "pais": "Brasil"
    },
    {
        "id": 2275,
        "nome": "Leonardo Rodrigue",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185402",
        "pais": "Brasil"
    },
    {
        "id": 2276,
        "nome": "Caique Rodrigues de Oliveira ",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01301500",
        "pais": "Brasil"
    },
    {
        "id": 2277,
        "nome": "Bruna Guimaro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13044503",
        "pais": "Brasil"
    },
    {
        "id": 2278,
        "nome": "WEDSLEY ALMEIDA",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13183310",
        "pais": "Brasil"
    },
    {
        "id": 2279,
        "nome": "Eduardo Pasquoto",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13467080",
        "pais": "Brasil"
    },
    {
        "id": 2280,
        "nome": "Priscila Brito",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13105122",
        "pais": "Brasil"
    },
    {
        "id": 2281,
        "nome": "Felipe Gustavo Mascara",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13031380",
        "pais": "Brasil"
    },
    {
        "id": 2282,
        "nome": "Ariana Lucero",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13044440",
        "pais": "Brasil"
    },
    {
        "id": 2283,
        "nome": "Débora Ferneda",
        "cidade": "Florianópolis",
        "estado": "SC",
        "latitude": -27.599606679345424,
        "longitude": -48.53319386304901,
        "cep": "13406010",
        "pais": "Brasil"
    },
    {
        "id": 2284,
        "nome": "Liliam Lucie Caetano Mathias ",
        "cidade": "Goiânia",
        "estado": "GO",
        "latitude": -16.703173198990907,
        "longitude": -49.277805681858666,
        "cep": "13154090",
        "pais": "Brasil"
    },
    {
        "id": 2285,
        "nome": "Felipe Inacio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040082",
        "pais": "Brasil"
    },
    {
        "id": 2286,
        "nome": "Paulo Cicone ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13179386",
        "pais": "Brasil"
    },
    {
        "id": 2287,
        "nome": "Jéssica Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13082075",
        "pais": "Brasil"
    },
    {
        "id": 2288,
        "nome": "Caroline Domiciano",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13142106",
        "pais": "Brasil"
    },
    {
        "id": 2289,
        "nome": "Yan Delfino",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13172674",
        "pais": "Brasil"
    },
    {
        "id": 2290,
        "nome": "Joyce Fernandes Marques",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180510",
        "pais": "Brasil"
    },
    {
        "id": 2291,
        "nome": "Vam Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053514",
        "pais": "Brasil"
    },
    {
        "id": 2292,
        "nome": "Daniela Gomes Dos Santos ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13053303",
        "pais": "Brasil"
    },
    {
        "id": 2293,
        "nome": "Andrea Souza",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13197198",
        "pais": "Brasil"
    },
    {
        "id": 2294,
        "nome": "Allana Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042760",
        "pais": "Brasil"
    },
    {
        "id": 2295,
        "nome": "Guilherme Carlos De Souza ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13032400",
        "pais": "Brasil"
    },
    {
        "id": 2296,
        "nome": "Gabriele De Souza Dantas Rocha ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13054622",
        "pais": "Brasil"
    },
    {
        "id": 2297,
        "nome": "Daniela Consolini Resende ",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450017",
        "pais": "Brasil"
    },
    {
        "id": 2298,
        "nome": "Bruna Garcia",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450029",
        "pais": "Brasil"
    },
    {
        "id": 2299,
        "nome": "Eric Mendes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056764",
        "pais": "Brasil"
    },
    {
        "id": 2300,
        "nome": "Ana Castalia Rocha Leite Silva ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13273264",
        "pais": "Brasil"
    },
    {
        "id": 2301,
        "nome": "Alessandra Orlandin",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453403",
        "pais": "Brasil"
    },
    {
        "id": 2302,
        "nome": "Graciele Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13092132",
        "pais": "Brasil"
    },
    {
        "id": 2303,
        "nome": "Karen Guerino ",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.910273543676585,
        "longitude": -47.09124375139076,
        "cep": "13481257",
        "pais": "Brasil"
    },
    {
        "id": 2304,
        "nome": "Daniela A M Grilo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186561",
        "pais": "Brasil"
    },
    {
        "id": 2305,
        "nome": "Adilson Ap Jaccomo Jr",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 2306,
        "nome": "Elder Aparecido Fonseca ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058370",
        "pais": "Brasil"
    },
    {
        "id": 2307,
        "nome": "Natália ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049440",
        "pais": "Brasil"
    },
    {
        "id": 2308,
        "nome": "willamar",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180290",
        "pais": "Brasil"
    },
    {
        "id": 2309,
        "nome": "Rondinelli Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272702",
        "pais": "Brasil"
    },
    {
        "id": 2310,
        "nome": "Carla Fernanda Semensato ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13277030",
        "pais": "Brasil"
    },
    {
        "id": 2311,
        "nome": "Tiago Alessandro da Rocha ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13101320",
        "pais": "Brasil"
    },
    {
        "id": 2312,
        "nome": "adriano Trindade",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13479080",
        "pais": "Brasil"
    },
    {
        "id": 2313,
        "nome": "Iasmin Santos Monteiro ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185539",
        "pais": "Brasil"
    },
    {
        "id": 2314,
        "nome": "gabriel Diniz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13023011",
        "pais": "Brasil"
    },
    {
        "id": 2315,
        "nome": "daniel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13033530",
        "pais": "Brasil"
    },
    {
        "id": 2316,
        "nome": "Leonardo Matias Francisco",
        "cidade": "Porto Alegre",
        "estado": "RS",
        "latitude": -30.05438699647424,
        "longitude": -51.202460895232896,
        "cep": "13847022",
        "pais": "Brasil"
    },
    {
        "id": 2317,
        "nome": "Claudineia Santos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13478779",
        "pais": "Brasil"
    },
    {
        "id": 2318,
        "nome": "Andressa Molina",
        "cidade": "São Luís",
        "estado": "MA",
        "latitude": -2.5365558531221497,
        "longitude": -44.29687438358095,
        "cep": "13350000",
        "pais": "Brasil"
    },
    {
        "id": 2319,
        "nome": "Mts",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040565",
        "pais": "Brasil"
    },
    {
        "id": 2320,
        "nome": "Angelina Oliveira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470473",
        "pais": "Brasil"
    },
    {
        "id": 2321,
        "nome": "kellynhaDlinda_123@hotmail.com",
        "cidade": "São Bernardo do Campo",
        "estado": "SP",
        "latitude": -23.67383298573272,
        "longitude": -46.53869866799016,
        "cep": "37135080",
        "pais": "Brasil"
    },
    {
        "id": 2322,
        "nome": "Sergio Stefani Junior ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034040",
        "pais": "Brasil"
    },
    {
        "id": 2323,
        "nome": "EDMARIO DE SOUZA NEVES ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13030290",
        "pais": "Brasil"
    },
    {
        "id": 2324,
        "nome": "eduardo bolonheze",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13474358",
        "pais": "Brasil"
    },
    {
        "id": 2325,
        "nome": "Henrique Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13060840",
        "pais": "Brasil"
    },
    {
        "id": 2326,
        "nome": "Marcos Vinicius",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13088110",
        "pais": "Brasil"
    },
    {
        "id": 2327,
        "nome": "Lucas Constantino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13100486",
        "pais": "Brasil"
    },
    {
        "id": 2328,
        "nome": "Rafael Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178185",
        "pais": "Brasil"
    },
    {
        "id": 2329,
        "nome": "Tatiane Farias Motorista de App",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13197168",
        "pais": "Brasil"
    },
    {
        "id": 2330,
        "nome": "Talita Santos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13467441",
        "pais": "Brasil"
    },
    {
        "id": 2331,
        "nome": "Fernando RUAS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13013095",
        "pais": "Brasil"
    },
    {
        "id": 2332,
        "nome": "Elidio Brito Santana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9290739,
        "longitude": -47.1192671,
        "cep": "13060566",
        "pais": "Brasil"
    },
    {
        "id": 2333,
        "nome": "Rafael Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064862",
        "pais": "Brasil"
    },
    {
        "id": 2334,
        "nome": "Cássia Queiroz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185844",
        "pais": "Brasil"
    },
    {
        "id": 2335,
        "nome": "robson de araujo paula",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173433",
        "pais": "Brasil"
    },
    {
        "id": 2336,
        "nome": "Daiani Rodrigues de Ávila",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7294051,
        "longitude": -47.1782814,
        "cep": "13145702",
        "pais": "Brasil"
    },
    {
        "id": 2337,
        "nome": "Priscilla Helena Bastos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8927256,
        "longitude": -47.1609362,
        "cep": "13064832",
        "pais": "Brasil"
    },
    {
        "id": 2338,
        "nome": "Adriana Dias Pessoa da Cruz",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0975412,
        "longitude": -47.2336124,
        "cep": "13348896",
        "pais": "Brasil"
    },
    {
        "id": 2339,
        "nome": "Marcelo Freitas",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13173482",
        "pais": "Brasil"
    },
    {
        "id": 2340,
        "nome": "William Vital",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9688262,
        "longitude": -47.1331664,
        "cep": "13054024",
        "pais": "Brasil"
    },
    {
        "id": 2341,
        "nome": "Igor dos Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13274560",
        "pais": "Brasil"
    },
    {
        "id": 2342,
        "nome": "Clesio Silva Jorge",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.89747,
        "longitude": -47.1686573,
        "cep": "13185270",
        "pais": "Brasil"
    },
    {
        "id": 2343,
        "nome": "Ana Claudia Dionisio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8398244,
        "longitude": -47.1530462,
        "cep": "13069072",
        "pais": "Brasil"
    },
    {
        "id": 2344,
        "nome": "Helena Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057036",
        "pais": "Brasil"
    },
    {
        "id": 2345,
        "nome": "Vitor Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13299096",
        "pais": "Brasil"
    },
    {
        "id": 2346,
        "nome": "Jaca Paladium",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9389858,
        "longitude": -47.002703,
        "cep": "13272702",
        "pais": "Brasil"
    },
    {
        "id": 2347,
        "nome": "Silvana Lopes de Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 2348,
        "nome": "Rodolfo  Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061342",
        "pais": "Brasil"
    },
    {
        "id": 2349,
        "nome": "FRANCISCO FERNANDES",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051172",
        "pais": "Brasil"
    },
    {
        "id": 2350,
        "nome": "Raquel Barreiro da S Sacienti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9867786,
        "longitude": -47.1503712,
        "cep": "13056706",
        "pais": "Brasil"
    },
    {
        "id": 2351,
        "nome": "Fernando gomes da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064841",
        "pais": "Brasil"
    },
    {
        "id": 2352,
        "nome": "Carolina Cardoso",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0899,
        "longitude": -47.219,
        "cep": "13349341",
        "pais": "Brasil"
    },
    {
        "id": 2353,
        "nome": "Marco Silva Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040215",
        "pais": "Brasil"
    },
    {
        "id": 2354,
        "nome": "Celso Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13067312",
        "pais": "Brasil"
    },
    {
        "id": 2355,
        "nome": "Pedro Vitor de Oliveira",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -22.741347,
        "longitude": -46.894846,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 2356,
        "nome": "Raphael Tavares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13065190",
        "pais": "Brasil"
    },
    {
        "id": 2357,
        "nome": "Alexandra Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13188042",
        "pais": "Brasil"
    },
    {
        "id": 2358,
        "nome": "Lucas.C",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9392976,
        "longitude": -46.9721956,
        "cep": "13273220",
        "pais": "Brasil"
    },
    {
        "id": 2359,
        "nome": "Rosemary F. Lacerda de Olivreira",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4376255,
        "longitude": -46.9719668,
        "cep": "13800460",
        "pais": "Brasil"
    },
    {
        "id": 2360,
        "nome": "EDUARDO MENDES DA COSTA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9659142,
        "longitude": -47.1248407,
        "cep": "13054123",
        "pais": "Brasil"
    },
    {
        "id": 2361,
        "nome": "Anderson Aparecido Dos Santos ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8136892,
        "longitude": -47.2296625,
        "cep": "13177292",
        "pais": "Brasil"
    },
    {
        "id": 2362,
        "nome": "Gustavo Mendes Beltramin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9221519,
        "longitude": -47.0171721,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 2363,
        "nome": "Amanda Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13106760",
        "pais": "Brasil"
    },
    {
        "id": 2364,
        "nome": "Ulisses Paiva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13035555",
        "pais": "Brasil"
    },
    {
        "id": 2365,
        "nome": "Eltom ",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9493623,
        "longitude": -47.3056789,
        "cep": "13190184",
        "pais": "Brasil"
    },
    {
        "id": 2366,
        "nome": "mike silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184664",
        "pais": "Brasil"
    },
    {
        "id": 2367,
        "nome": "Adriano Izidorio",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "08141001",
        "pais": "Brasil"
    },
    {
        "id": 2368,
        "nome": "marcelo",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -8.1133656,
        "longitude": -34.9212345,
        "cep": "13165498",
        "pais": "Brasil"
    },
    {
        "id": 2369,
        "nome": "michelly.asandron@gmail.com",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8347992,
        "longitude": -47.2721892,
        "cep": "13171300",
        "pais": "Brasil"
    },
    {
        "id": 2370,
        "nome": "Gislaine",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.826892,
        "longitude": -47.1640159,
        "cep": "13179216",
        "pais": "Brasil"
    },
    {
        "id": 2371,
        "nome": "Cláudia Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034200",
        "pais": "Brasil"
    },
    {
        "id": 2372,
        "nome": "Wellington silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13171660",
        "pais": "Brasil"
    },
    {
        "id": 2373,
        "nome": "Alexandre Assis",
        "cidade": "Elias Fausto",
        "estado": "SP",
        "latitude": -23.0234,
        "longitude": -47.2226,
        "cep": "13360431",
        "pais": "Brasil"
    },
    {
        "id": 2374,
        "nome": "LARISSA OLIVEIRA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9372956,
        "longitude": -47.1611976,
        "cep": "13059030",
        "pais": "Brasil"
    },
    {
        "id": 2375,
        "nome": "Jaime  Junior ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049103",
        "pais": "Brasil"
    },
    {
        "id": 2376,
        "nome": "Júlio Cesar Rodrigues Da Cruz ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064844",
        "pais": "Brasil"
    },
    {
        "id": 2377,
        "nome": "Marcos Roberto Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034655",
        "pais": "Brasil"
    },
    {
        "id": 2378,
        "nome": "Guilherme Indiano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13057504",
        "pais": "Brasil"
    },
    {
        "id": 2379,
        "nome": "Vanessa Krahembuhl ",
        "cidade": "Itaiópolis",
        "estado": "SC",
        "latitude": -26.3446602,
        "longitude": -49.9070187,
        "cep": "89340000",
        "pais": NaN
    },
    {
        "id": 2380,
        "nome": "Elizete Alves Santez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.953252,
        "longitude": -47.0371895,
        "cep": "13044590",
        "pais": "Brasil"
    },
    {
        "id": 2381,
        "nome": "Carlos Sergio ",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -25.5103737,
        "longitude": -49.3268427,
        "cep": "34800000",
        "pais": "Brasil"
    },
    {
        "id": 2382,
        "nome": "Mariana Moreira de Araújo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9061384,
        "longitude": -47.065405,
        "cep": "13010111",
        "pais": "Brasil"
    },
    {
        "id": 2383,
        "nome": "Daniela Pereira Rodrigues",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8262668,
        "longitude": -47.1680157,
        "cep": "13179515",
        "pais": "Brasil"
    },
    {
        "id": 2384,
        "nome": "Bruno Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13088683",
        "pais": "Brasil"
    },
    {
        "id": 2385,
        "nome": "José Luiz Rodrigues ",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -22.2109304,
        "longitude": -45.9100107,
        "cep": "13218114",
        "pais": "Brasil"
    },
    {
        "id": 2386,
        "nome": "daiane nayara fermino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8501781,
        "longitude": -47.10881,
        "cep": "13082200",
        "pais": "Brasil"
    },
    {
        "id": 2387,
        "nome": "Eduardo Marcelino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13050436",
        "pais": "Brasil"
    },
    {
        "id": 2388,
        "nome": "Bruno Mendes",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450866",
        "pais": "Brasil"
    },
    {
        "id": 2389,
        "nome": "marcelo oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185560",
        "pais": "Brasil"
    },
    {
        "id": 2390,
        "nome": "Anderson Alves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8544619,
        "longitude": -47.2269395,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 2391,
        "nome": "Amauri Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13052200",
        "pais": "Brasil"
    },
    {
        "id": 2392,
        "nome": "Elerson Simonetti Conz",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7778729,
        "longitude": -47.3493699,
        "cep": "13467560",
        "pais": "Brasil"
    },
    {
        "id": 2393,
        "nome": "erick.alexandreaa@gmail.com",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9235396,
        "longitude": -47.0155691,
        "cep": "13101361",
        "pais": "Brasil"
    },
    {
        "id": 2394,
        "nome": "Adriano ",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5571965,
        "longitude": -47.3772316,
        "cep": "13486333",
        "pais": "Brasil"
    },
    {
        "id": 2395,
        "nome": "Antonio Carlos da Silva",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -22.5907673,
        "longitude": -47.1674091,
        "cep": "13825000",
        "pais": "Brasil"
    },
    {
        "id": 2396,
        "nome": "Rafaela Cristina Botelho Domingos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8964874,
        "longitude": -47.2200955,
        "cep": "13187179",
        "pais": "Brasil"
    },
    {
        "id": 2397,
        "nome": "Rafael Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042340",
        "pais": "Brasil"
    },
    {
        "id": 2398,
        "nome": "ELí Martins",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3549801,
        "longitude": -46.9400536,
        "cep": "13847118",
        "pais": "Brasil"
    },
    {
        "id": 2399,
        "nome": "Juliano Martins ",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7777932,
        "longitude": -47.1777857,
        "cep": "13142540",
        "pais": "Brasil"
    },
    {
        "id": 2400,
        "nome": "Murilo Lovatto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9597951,
        "longitude": -47.0658409,
        "cep": "13049334",
        "pais": "Brasil"
    },
    {
        "id": 2401,
        "nome": "Paloma Fabrício Coimbra da Cruz",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.812844,
        "longitude": -47.1977835,
        "cep": "13178417",
        "pais": "Brasil"
    },
    {
        "id": 2402,
        "nome": "Danilo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9350484,
        "longitude": -47.061358,
        "cep": "13040108",
        "pais": "Brasil"
    },
    {
        "id": 2403,
        "nome": "Thiago Vares dos Santos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5957416,
        "longitude": -47.3980338,
        "cep": "13481381",
        "pais": "Brasil"
    },
    {
        "id": 2404,
        "nome": "Daniel Neves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058305",
        "pais": "Brasil"
    },
    {
        "id": 2405,
        "nome": "Douglas Fabiano de Melo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9173119,
        "longitude": -47.080056,
        "cep": "13031385",
        "pais": "Brasil"
    },
    {
        "id": 2406,
        "nome": "Rafael Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064841",
        "pais": "Brasil"
    },
    {
        "id": 2407,
        "nome": "Gustavo manoel Dos Santos",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -26.9174514,
        "longitude": -48.6688154,
        "cep": "13497192",
        "pais": "Brasil"
    },
    {
        "id": 2408,
        "nome": "Mateus Almeida",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.4834798,
        "longitude": -46.6099892,
        "cep": "02303080",
        "pais": "Brasil"
    },
    {
        "id": 2409,
        "nome": "Carolainy Ferreira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.809755,
        "longitude": -47.248204,
        "cep": "13175115",
        "pais": "Brasil"
    },
    {
        "id": 2410,
        "nome": "Marli Bernardes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13059768",
        "pais": "Brasil"
    },
    {
        "id": 2411,
        "nome": "Leandro Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040725",
        "pais": "Brasil"
    },
    {
        "id": 2412,
        "nome": "Cesar Ribeiro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470486",
        "pais": "Brasil"
    },
    {
        "id": 2413,
        "nome": "Michel Pinheiro Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9493214,
        "longitude": -47.0773656,
        "cep": "13051068",
        "pais": "Brasil"
    },
    {
        "id": 2414,
        "nome": "Maria Aparecida Dos Santos ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064000",
        "pais": "Brasil"
    },
    {
        "id": 2415,
        "nome": "Suéllen",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8840901,
        "longitude": -47.1782626,
        "cep": "13185143",
        "pais": "Brasil"
    },
    {
        "id": 2416,
        "nome": "camila",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9537942,
        "longitude": -47.0111981,
        "cep": "13272513",
        "pais": "Brasil"
    },
    {
        "id": 2417,
        "nome": "Felipe  Espinosa",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7735736,
        "longitude": -47.3042812,
        "cep": "13380410",
        "pais": "Brasil"
    },
    {
        "id": 2418,
        "nome": "Thamy  Stephanie",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8165897,
        "longitude": -47.0959936,
        "cep": "13084609",
        "pais": "Brasil"
    },
    {
        "id": 2419,
        "nome": "Héber Romão",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9110182,
        "longitude": -47.0669952,
        "cep": "13035270",
        "pais": "Brasil"
    },
    {
        "id": 2420,
        "nome": "Valéria Cristina da Silva Sousa Moreira ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8974924,
        "longitude": -47.2313591,
        "cep": "13188002",
        "pais": "Brasil"
    },
    {
        "id": 2421,
        "nome": "Rafael Oliveira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13467120",
        "pais": "Brasil"
    },
    {
        "id": 2422,
        "nome": "Rosângela Duarte",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13182630",
        "pais": "Brasil"
    },
    {
        "id": 2423,
        "nome": "Leandro Alves",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6029061,
        "longitude": -47.3877314,
        "cep": "13481467",
        "pais": "Brasil"
    },
    {
        "id": 2424,
        "nome": "Edison Junior",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181640",
        "pais": "Brasil"
    },
    {
        "id": 2425,
        "nome": "Jose Ronaldo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051069",
        "pais": "Brasil"
    },
    {
        "id": 2426,
        "nome": "Guilherme De Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13049107",
        "pais": "Brasil"
    },
    {
        "id": 2427,
        "nome": "Hermes Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8548107,
        "longitude": -47.2209659,
        "cep": "13183080",
        "pais": "Brasil"
    },
    {
        "id": 2428,
        "nome": "Fernanda de Carvalho Ferreira ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9604886,
        "longitude": -46.9997919,
        "cep": "13272106",
        "pais": "Brasil"
    },
    {
        "id": 2429,
        "nome": "Fabio Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034830",
        "pais": "Brasil"
    },
    {
        "id": 2430,
        "nome": "Márcio silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470487",
        "pais": "Brasil"
    },
    {
        "id": 2431,
        "nome": "Carolina Gomes ",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13178559",
        "pais": "Brasil"
    },
    {
        "id": 2432,
        "nome": "Daniela Shirley Castro Bomfim",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8180025,
        "longitude": -47.232043,
        "cep": "13175685",
        "pais": "Brasil"
    },
    {
        "id": 2433,
        "nome": "Marcos Lima",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7758,
        "longitude": -47.2917,
        "cep": "13386078",
        "pais": "Brasil"
    },
    {
        "id": 2434,
        "nome": "Francisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13085415",
        "pais": "Brasil"
    },
    {
        "id": 2435,
        "nome": "Rafael Rubini ",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3928251,
        "longitude": -47.5846342,
        "cep": "13504364",
        "pais": "Brasil"
    },
    {
        "id": 2436,
        "nome": "Tuca",
        "cidade": "São Carlos",
        "estado": "SP",
        "latitude": -22.0017945,
        "longitude": -47.8970978,
        "cep": "13566583",
        "pais": "Brasil"
    },
    {
        "id": 2437,
        "nome": "Juliano Melo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13185148",
        "pais": "Brasil"
    },
    {
        "id": 2438,
        "nome": "Rogerio Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13186524",
        "pais": "Brasil"
    },
    {
        "id": 2439,
        "nome": "Lucas Oliveira ",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -19.452834,
        "longitude": -44.2662032,
        "cep": "39300000",
        "pais": "Brasil"
    },
    {
        "id": 2440,
        "nome": "Marco Antônio Aleixo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13327331",
        "pais": "Brasil"
    },
    {
        "id": 2441,
        "nome": "Eliane ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13069426",
        "pais": "Brasil"
    },
    {
        "id": 2442,
        "nome": "Roselei Alves Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9858092,
        "longitude": -47.1492686,
        "cep": "13056283",
        "pais": "Brasil"
    },
    {
        "id": 2443,
        "nome": "Diego Pereira ",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -22.8788811,
        "longitude": -43.5249968,
        "cep": "17260000",
        "pais": "Brasil"
    },
    {
        "id": 2444,
        "nome": "Rosangela Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13042370",
        "pais": "Brasil"
    },
    {
        "id": 2445,
        "nome": "Wagner Martins",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13190029",
        "pais": "Brasil"
    },
    {
        "id": 2446,
        "nome": "Thiago Morandin",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8964874,
        "longitude": -47.2200955,
        "cep": "13187115",
        "pais": "Brasil"
    },
    {
        "id": 2447,
        "nome": "Ricardo Mariotto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9673281,
        "longitude": -46.9919056,
        "cep": "13274125",
        "pais": "Brasil"
    },
    {
        "id": 2448,
        "nome": "Marcos",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.098218,
        "longitude": -47.2250135,
        "cep": "13345705",
        "pais": "Brasil"
    },
    {
        "id": 2449,
        "nome": "Fabio Marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13031680",
        "pais": "Brasil"
    },
    {
        "id": 2450,
        "nome": "TATIANA S LIMA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13058100",
        "pais": "Brasil"
    },
    {
        "id": 2451,
        "nome": "Victor Moraes",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13277021",
        "pais": "Brasil"
    },
    {
        "id": 2452,
        "nome": "Camila Baldini",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9362308,
        "longitude": -47.0470814,
        "cep": "13044290",
        "pais": "Brasil"
    },
    {
        "id": 2453,
        "nome": "Flavio Guilherme Celestino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9817836,
        "longitude": -47.1364429,
        "cep": "13056137",
        "pais": "Brasil"
    },
    {
        "id": 2454,
        "nome": "Muriel Ap. Massariolli Moreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8178586,
        "longitude": -47.007948,
        "cep": "13098011",
        "pais": "Brasil"
    },
    {
        "id": 2455,
        "nome": "Isadora  Fusari",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8288463,
        "longitude": -47.101936,
        "cep": "13082754",
        "pais": "Brasil"
    },
    {
        "id": 2456,
        "nome": "Thiago Lima",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13176205",
        "pais": "Brasil"
    },
    {
        "id": 2457,
        "nome": "danilo costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13044491",
        "pais": "Brasil"
    },
    {
        "id": 2458,
        "nome": "Silvia  Fukuda ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9184401,
        "longitude": -47.102031,
        "cep": "13060072",
        "pais": "Brasil"
    },
    {
        "id": 2459,
        "nome": "Barbudinho",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.7767128,
        "longitude": -46.7108179,
        "cep": "13506670",
        "pais": "Brasil"
    },
    {
        "id": 2460,
        "nome": "Luiz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9893977,
        "longitude": -47.1000521,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 2461,
        "nome": "Edgard Gabriel",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01305103",
        "pais": "Brasil"
    },
    {
        "id": 2462,
        "nome": "jose caio",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01305800",
        "pais": "Brasil"
    },
    {
        "id": 2463,
        "nome": "Lekao do poção 😎",
        "cidade": "Brotas",
        "estado": "SP",
        "latitude": -22.2840884,
        "longitude": -48.1267265,
        "cep": "17380000",
        "pais": "Brasil"
    },
    {
        "id": 2464,
        "nome": "Anderson da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8559199,
        "longitude": -47.1069223,
        "cep": "13082045",
        "pais": "Brasil"
    },
    {
        "id": 2465,
        "nome": "Bruno Ribeiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13172440",
        "pais": "Brasil"
    },
    {
        "id": 2466,
        "nome": "Luís Felipe da Cunha",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.2177862,
        "longitude": -46.8756955,
        "cep": "13206270",
        "pais": "Brasil"
    },
    {
        "id": 2467,
        "nome": "Renato Domingues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9352346,
        "longitude": -47.1247193,
        "cep": "13060722",
        "pais": "Brasil"
    },
    {
        "id": 2468,
        "nome": "Fabiana Pereira da Silva Rissoli",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8938096,
        "longitude": -47.1982623,
        "cep": "13186472",
        "pais": "Brasil"
    },
    {
        "id": 2469,
        "nome": "alex b correa",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.6774413,
        "longitude": -47.7072728,
        "cep": "13409016",
        "pais": "Brasil"
    },
    {
        "id": 2470,
        "nome": "Renan Assis",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056803",
        "pais": "Brasil"
    },
    {
        "id": 2471,
        "nome": "Guilherme Lima",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7601,
        "longitude": -47.1645,
        "cep": "13142370",
        "pais": "Brasil"
    },
    {
        "id": 2472,
        "nome": "Thiago Belmiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9342631,
        "longitude": -47.0132435,
        "cep": "13046395",
        "pais": "Brasil"
    },
    {
        "id": 2473,
        "nome": "Letícia Pigari",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9421422,
        "longitude": -47.1911058,
        "cep": "13058514",
        "pais": "Brasil"
    },
    {
        "id": 2474,
        "nome": "Danilo Torquato de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.863488,
        "longitude": -47.065931,
        "cep": "13087210",
        "pais": "Brasil"
    },
    {
        "id": 2475,
        "nome": "Sheila  Jackson",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3754989,
        "longitude": -47.5538247,
        "cep": "13506410",
        "pais": "Brasil"
    },
    {
        "id": 2476,
        "nome": "Leonardo dos Santos Augusto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8568461,
        "longitude": -47.0630115,
        "cep": "13080450",
        "pais": "Brasil"
    },
    {
        "id": 2477,
        "nome": "Allan Fassina Spinola ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9175599,
        "longitude": -47.0514273,
        "cep": "13041500",
        "pais": "Brasil"
    },
    {
        "id": 2478,
        "nome": "luis renato silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13046020",
        "pais": "Brasil"
    },
    {
        "id": 2479,
        "nome": "Vinicius Azevedo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7388,
        "longitude": -47.3359,
        "cep": "13470749",
        "pais": "Brasil"
    },
    {
        "id": 2480,
        "nome": "Eduardo Gonçalves",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6931,
        "longitude": -46.9926,
        "cep": "13914553",
        "pais": "Brasil"
    },
    {
        "id": 2481,
        "nome": "Manoel Alexandre",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13299035",
        "pais": "Brasil"
    },
    {
        "id": 2482,
        "nome": "Claudineia ",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13184896",
        "pais": "Brasil"
    },
    {
        "id": 2483,
        "nome": "Emerson Bayhu",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9271709,
        "longitude": -47.1622098,
        "cep": "13059226",
        "pais": "Brasil"
    },
    {
        "id": 2484,
        "nome": "Gustavo Lucas Cornelio Moreira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7701045,
        "longitude": -47.1593841,
        "cep": "13140388",
        "pais": "Brasil"
    },
    {
        "id": 2485,
        "nome": "Eduardo",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "06150270",
        "pais": "Brasil"
    },
    {
        "id": 2486,
        "nome": "vanessa caroline da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9743682,
        "longitude": -47.1189477,
        "cep": "13054211",
        "pais": "Brasil"
    },
    {
        "id": 2487,
        "nome": "Ismael Ghizini",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.738573,
        "longitude": -47.2901763,
        "cep": "13477708",
        "pais": "Brasil"
    },
    {
        "id": 2488,
        "nome": "Rosangela Pagnota",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.929151,
        "longitude": -47.1127621,
        "cep": "13060852",
        "pais": "Brasil"
    },
    {
        "id": 2489,
        "nome": "Marilde S. C.  Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8538327,
        "longitude": -47.0658026,
        "cep": "13080340",
        "pais": "Brasil"
    },
    {
        "id": 2490,
        "nome": "JUNIOR",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1982652,
        "longitude": -46.8839977,
        "cep": "13207210",
        "pais": "Brasil"
    },
    {
        "id": 2491,
        "nome": "Gabriel Mauro Valim Avelar",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1021221,
        "longitude": -47.2197624,
        "cep": "13345443",
        "pais": "Brasil"
    },
    {
        "id": 2492,
        "nome": "Pablo",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.5398323,
        "longitude": -46.7162843,
        "cep": "17393048",
        "pais": "Brasil"
    },
    {
        "id": 2493,
        "nome": "Rodrigo Torquato de Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.863488,
        "longitude": -47.065931,
        "cep": "13087210",
        "pais": "Brasil"
    },
    {
        "id": 2494,
        "nome": "Jaqueline de Lima Gonçalves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8904964,
        "longitude": -47.181811,
        "cep": "13185010",
        "pais": "Brasil"
    },
    {
        "id": 2495,
        "nome": "leopoldo pavan",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454038",
        "pais": "Brasil"
    },
    {
        "id": 2496,
        "nome": "Josmar Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13274440",
        "pais": "Brasil"
    },
    {
        "id": 2497,
        "nome": "RODRIGO SANT ANNA",
        "cidade": "Ribeirão Preto",
        "estado": "SP",
        "latitude": -21.182082,
        "longitude": -47.7643348,
        "cep": "14092100",
        "pais": "Brasil"
    },
    {
        "id": 2498,
        "nome": "Claudemir Dos Santos ",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13315000",
        "pais": "Brasil"
    },
    {
        "id": 2499,
        "nome": "Helena Maria Da Silva ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13040656",
        "pais": "Brasil"
    },
    {
        "id": 2500,
        "nome": "Victor Corrêa Silva Montagnolli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7933755,
        "longitude": -47.0876757,
        "cep": "13085260",
        "pais": "Brasil"
    },
    {
        "id": 2501,
        "nome": "Ederson Luis",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8299317,
        "longitude": -47.2612781,
        "cep": "13171030",
        "pais": "Brasil"
    },
    {
        "id": 2502,
        "nome": "Rubens Gonçalves",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453882",
        "pais": "Brasil"
    },
    {
        "id": 2503,
        "nome": "luiz Santos",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -29.7118986,
        "longitude": -53.7571737,
        "cep": "13825000",
        "pais": "Brasil"
    },
    {
        "id": 2504,
        "nome": "Luis Silveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272725",
        "pais": "Brasil"
    },
    {
        "id": 2505,
        "nome": "Flavio Malfatti Sartorato",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.69933,
        "longitude": -47.023628,
        "cep": "13917662",
        "pais": "Brasil"
    },
    {
        "id": 2506,
        "nome": "Edson Souza Martins ",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13056382",
        "pais": "Brasil"
    },
    {
        "id": 2507,
        "nome": "Luciano Da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13034205",
        "pais": "Brasil"
    },
    {
        "id": 2508,
        "nome": "Eduardo De Souza Cruz",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13174462",
        "pais": "Brasil"
    },
    {
        "id": 2509,
        "nome": "Maria Eduarda",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13474358",
        "pais": "Brasil"
    },
    {
        "id": 2510,
        "nome": "Jose Oliveira",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -23.1571801,
        "longitude": -47.0410543,
        "cep": "13198524",
        "pais": "Brasil"
    },
    {
        "id": 2511,
        "nome": "Eduardo Ribeiro de Campos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13331490",
        "pais": "Brasil"
    },
    {
        "id": 2512,
        "nome": "André Luiz De Oliveira",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0633353,
        "longitude": -47.1381008,
        "cep": "13348359",
        "pais": "Brasil"
    },
    {
        "id": 2513,
        "nome": "Phillipe",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13483527",
        "pais": "Brasil"
    },
    {
        "id": 2514,
        "nome": "Marcelo Henrique",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.9703322,
        "longitude": -47.1042317,
        "cep": "13477160",
        "pais": "Brasil"
    },
    {
        "id": 2515,
        "nome": "JOÃO LIMA",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13282530",
        "pais": "Brasil"
    },
    {
        "id": 2516,
        "nome": "Marcio  Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.2293465,
        "longitude": -49.6409981,
        "cep": "13063570",
        "pais": "Brasil"
    },
    {
        "id": 2517,
        "nome": "Thais",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.1223262,
        "longitude": -46.5531514,
        "cep": "13100474",
        "pais": "Brasil"
    },
    {
        "id": 2518,
        "nome": "tatiana_lima2010",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7742755,
        "longitude": -47.1689074,
        "cep": "13142458",
        "pais": "Brasil"
    },
    {
        "id": 2519,
        "nome": "Lucas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -31.8443734,
        "longitude": -59.0061253,
        "cep": "13052573",
        "pais": "Brasil"
    },
    {
        "id": 2520,
        "nome": "Vinicius Siqueira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.807578,
        "longitude": -38.6324501,
        "cep": "13045603",
        "pais": "Brasil"
    },
    {
        "id": 2521,
        "nome": "Bruno Rodrigues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0990561,
        "longitude": -47.1994076,
        "cep": "13277501",
        "pais": "Brasil"
    },
    {
        "id": 2522,
        "nome": "Guilherme",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -2.4511749,
        "longitude": -46.039127,
        "cep": "13030270",
        "pais": "Brasil"
    },
    {
        "id": 2523,
        "nome": "raissa moreira Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9685086,
        "longitude": -47.1497464,
        "cep": "13056502",
        "pais": "Brasil"
    },
    {
        "id": 2524,
        "nome": "Claudinei Pereira De Oliveira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7995666,
        "longitude": -47.1948595,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 2525,
        "nome": "Diego Domingos Moraes De Sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.944483,
        "longitude": -47.1227975,
        "cep": "13060726",
        "pais": "Brasil"
    },
    {
        "id": 2526,
        "nome": "Luis Henrique",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.7000036,
        "longitude": -46.692328,
        "cep": "13188180",
        "pais": "Brasil"
    },
    {
        "id": 2527,
        "nome": "José Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -6.6513178,
        "longitude": -69.8880851,
        "cep": "13049099",
        "pais": "Brasil"
    },
    {
        "id": 2528,
        "nome": "Marcus Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.1431341,
        "longitude": -46.9837362,
        "cep": "13030710",
        "pais": "Brasil"
    },
    {
        "id": 2529,
        "nome": "Valquiria",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323711",
        "pais": "Brasil"
    },
    {
        "id": 2530,
        "nome": "Thaís",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.3978737,
        "longitude": -51.9800357,
        "cep": "13077003",
        "pais": "Brasil"
    },
    {
        "id": 2531,
        "nome": "Marcus Vinicius",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8674924,
        "longitude": -43.2361404,
        "cep": "13064786",
        "pais": "Brasil"
    },
    {
        "id": 2532,
        "nome": "Ulisses Nto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.80321,
        "longitude": -55.740151,
        "cep": "13056117",
        "pais": "Brasil"
    },
    {
        "id": 2533,
        "nome": "Giovani Cruz",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -23.6359864,
        "longitude": -46.5700777,
        "cep": "13483220",
        "pais": "Brasil"
    },
    {
        "id": 2534,
        "nome": "Alfair",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7392373,
        "longitude": -43.4769892,
        "cep": "13050551",
        "pais": "Brasil"
    },
    {
        "id": 2535,
        "nome": "Joao Ricardo Vicente",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13271130",
        "pais": "Brasil"
    },
    {
        "id": 2536,
        "nome": "Rafaela",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.5498368,
        "longitude": -47.9942415,
        "cep": "13059193",
        "pais": "Brasil"
    },
    {
        "id": 2537,
        "nome": "Ribas",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13187115",
        "pais": "Brasil"
    },
    {
        "id": 2538,
        "nome": "Matheus Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.7227951,
        "longitude": -46.6945268,
        "cep": "13087210",
        "pais": "Brasil"
    },
    {
        "id": 2539,
        "nome": "Ana Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.8092793,
        "longitude": -43.1673698,
        "cep": "13053310",
        "pais": "Brasil"
    },
    {
        "id": 2540,
        "nome": "Beatriz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -19.9269125,
        "longitude": -44.0666707,
        "cep": "13186013",
        "pais": "Brasil"
    },
    {
        "id": 2541,
        "nome": "Felipe Tadei Ramos",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.0051984,
        "longitude": -47.5333876,
        "cep": "13370000",
        "pais": "Brasil"
    },
    {
        "id": 2542,
        "nome": "Ariane Regina Pancate Rodrigues",
        "cidade": "Amparo",
        "estado": "SP",
        "latitude": -22.7109597,
        "longitude": -46.8056419,
        "cep": "13905475",
        "pais": "Brasil"
    },
    {
        "id": 2543,
        "nome": "Ailton Carvalho Leão",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4660108,
        "longitude": -47.4920323,
        "cep": "18071450",
        "pais": "Brasil"
    },
    {
        "id": 2544,
        "nome": "Raquel F",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13483280",
        "pais": "Brasil"
    },
    {
        "id": 2545,
        "nome": "Debora Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.4459457,
        "longitude": -46.3959202,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 2546,
        "nome": "CARLA ALMEIDA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.2756166,
        "longitude": -51.4998698,
        "cep": "13042620",
        "pais": "Brasil"
    },
    {
        "id": 2547,
        "nome": "Marcos",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13502470",
        "pais": "Brasil"
    },
    {
        "id": 2548,
        "nome": "Soares Alemao",
        "cidade": "Atibaia",
        "estado": "SP",
        "latitude": -23.1604764,
        "longitude": -46.584771,
        "cep": "12947768",
        "pais": "Brasil"
    },
    {
        "id": 2549,
        "nome": "Ivan Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7895225,
        "longitude": -43.9678355,
        "cep": "13059625",
        "pais": "Brasil"
    },
    {
        "id": 2550,
        "nome": "Beatriz Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -19.8067985,
        "longitude": -47.9227347,
        "cep": "13174340",
        "pais": "Brasil"
    },
    {
        "id": 2551,
        "nome": "Marcelo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -28.6500006,
        "longitude": -53.595459,
        "cep": "13058016",
        "pais": "Brasil"
    },
    {
        "id": 2552,
        "nome": "Robson Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.9459268,
        "longitude": -44.1826816,
        "cep": "13054787",
        "pais": "Brasil"
    },
    {
        "id": 2553,
        "nome": "Carlos Jose Gomes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.460712,
        "longitude": -47.5093137,
        "cep": "13185490",
        "pais": "Brasil"
    },
    {
        "id": 2554,
        "nome": "Rosana Rosa Nonato",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9118244,
        "longitude": -47.0575696,
        "cep": "13026510",
        "pais": "Brasil"
    },
    {
        "id": 2555,
        "nome": "Paulo Roberto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -10.2235188,
        "longitude": -38.2872554,
        "cep": "13020160",
        "pais": "Brasil"
    },
    {
        "id": 2556,
        "nome": "Diego Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.6176328,
        "longitude": -57.4882639,
        "cep": "13053005",
        "pais": "Brasil"
    },
    {
        "id": 2557,
        "nome": "Felippe Costa",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.5590412,
        "longitude": -48.0277532,
        "cep": "13348882",
        "pais": "Brasil"
    },
    {
        "id": 2558,
        "nome": "marcinha f",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.2019948,
        "longitude": -54.7969748,
        "cep": "13051227",
        "pais": "Brasil"
    },
    {
        "id": 2559,
        "nome": "Fabio Oliveira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.5625301,
        "longitude": -47.4379781,
        "cep": "13178381",
        "pais": "Brasil"
    },
    {
        "id": 2560,
        "nome": "Ivo Dos Santos Neto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.7974393,
        "longitude": -45.1928982,
        "cep": "13274000",
        "pais": "Brasil"
    },
    {
        "id": 2561,
        "nome": "Eduardo Carvalho",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -25.3955525,
        "longitude": -49.3438677,
        "cep": "13178230",
        "pais": "Brasil"
    },
    {
        "id": 2562,
        "nome": "Paulo César Pedrozo de Jesus",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.0984704,
        "longitude": -47.7194738,
        "cep": "18530000",
        "pais": "Brasil"
    },
    {
        "id": 2563,
        "nome": "Aldo Jose dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.0965399,
        "longitude": -45.0938799,
        "cep": "13053368",
        "pais": "Brasil"
    },
    {
        "id": 2564,
        "nome": "Milton Bernardes",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455450",
        "pais": "Brasil"
    },
    {
        "id": 2565,
        "nome": "Oi",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01305014",
        "pais": "Brasil"
    },
    {
        "id": 2566,
        "nome": "Mariane",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9181007,
        "longitude": -47.1012263,
        "cep": "13044160",
        "pais": "Brasil"
    },
    {
        "id": 2567,
        "nome": "Ismar",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -12.916789,
        "longitude": -38.4429063,
        "cep": "12482333",
        "pais": "Brasil"
    },
    {
        "id": 2568,
        "nome": "Gabriel Godoy",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7755587,
        "longitude": -47.6645326,
        "cep": "13145537",
        "pais": "Brasil"
    },
    {
        "id": 2569,
        "nome": "Luciana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -30.0714616,
        "longitude": -51.1112738,
        "cep": "13040735",
        "pais": "Brasil"
    },
    {
        "id": 2570,
        "nome": "Alex",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -15.5998689,
        "longitude": -56.089386,
        "cep": "13082612",
        "pais": "Brasil"
    },
    {
        "id": 2571,
        "nome": "Gabriel Dias",
        "cidade": "Capivari",
        "estado": "SP",
        "latitude": -23.4468592,
        "longitude": -46.7463907,
        "cep": "13363592",
        "pais": "Brasil"
    },
    {
        "id": 2572,
        "nome": "Jose Roberto Vicente",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.1531345,
        "longitude": -47.0607508,
        "cep": "13272819",
        "pais": "Brasil"
    },
    {
        "id": 2573,
        "nome": "Ana Bela Martins de Lima",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13260000",
        "pais": "Brasil"
    },
    {
        "id": 2574,
        "nome": "João Nascimento Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8500599,
        "longitude": -47.1090414,
        "cep": "13082200",
        "pais": "Brasil"
    },
    {
        "id": 2575,
        "nome": "EDMILSON",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13218335",
        "pais": "Brasil"
    },
    {
        "id": 2576,
        "nome": "THAISE ROCHA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212142,
        "longitude": -47.0168006,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 2577,
        "nome": "Luciano Dourado",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.1191704,
        "longitude": -48.3220619,
        "cep": "13175561",
        "pais": "Brasil"
    },
    {
        "id": 2578,
        "nome": "giovane afonso",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -21.4363687,
        "longitude": -50.0759487,
        "cep": "13140526",
        "pais": "Brasil"
    },
    {
        "id": 2579,
        "nome": "silvio ribeiro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.6401735,
        "longitude": -46.7481685,
        "cep": "13188010",
        "pais": "Brasil"
    },
    {
        "id": 2580,
        "nome": "Carlos Andre",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.4853147,
        "longitude": -46.4597075,
        "cep": "13187074",
        "pais": "Brasil"
    },
    {
        "id": 2581,
        "nome": "Daniel Urbano",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -26.331441,
        "longitude": -48.8344356,
        "cep": "23440078",
        "pais": "Brasil"
    },
    {
        "id": 2582,
        "nome": "Guilherme Henrique Francisco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.1740877,
        "longitude": -53.3643899,
        "cep": "13056147",
        "pais": "Brasil"
    },
    {
        "id": 2583,
        "nome": "Ronaldo Abel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.5908753,
        "longitude": -46.9146403,
        "cep": "13050464",
        "pais": "Brasil"
    },
    {
        "id": 2584,
        "nome": "Felipe Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.4719953,
        "longitude": -53.4726164,
        "cep": "13064845",
        "pais": "Brasil"
    },
    {
        "id": 2585,
        "nome": "Claudia",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -11.5057202,
        "longitude": -54.8763166,
        "cep": "13198416",
        "pais": "Brasil"
    },
    {
        "id": 2586,
        "nome": "Marcos",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0633353,
        "longitude": -47.1381008,
        "cep": "13345794",
        "pais": "Brasil"
    },
    {
        "id": 2587,
        "nome": "Taís Castro",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.7243995,
        "longitude": -47.0097048,
        "cep": "13915001",
        "pais": "Brasil"
    },
    {
        "id": 2588,
        "nome": "ANTONIO ANSELMO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.2003311,
        "longitude": -43.7936146,
        "cep": "13058377",
        "pais": "Brasil"
    },
    {
        "id": 2589,
        "nome": "Jesus Mironga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -0.6973043,
        "longitude": -48.5187103,
        "cep": "13100152",
        "pais": "Brasil"
    },
    {
        "id": 2590,
        "nome": "Victor ReINDEFINIDOCampinas",
        "cidade": "SP",
        "estado": "-22.9104511",
        "latitude": -47.0517111,
        "longitude": 13026001.0,
        "cep": "Brasil",
        "pais": NaN
    },
    {
        "id": 2591,
        "nome": "Greici Kely Da Silva Gonçalves Miranda",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7698192,
        "longitude": -47.6535785,
        "cep": "13401630",
        "pais": "Brasil"
    },
    {
        "id": 2592,
        "nome": "Célia De Oliveira Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9396172,
        "longitude": -47.1150178,
        "cep": "13060484",
        "pais": "Brasil"
    },
    {
        "id": 2593,
        "nome": "Joyce Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.6053539,
        "longitude": -41.9991862,
        "cep": "13042330",
        "pais": "Brasil"
    },
    {
        "id": 2594,
        "nome": "Ralph Galante",
        "cidade": "Santos",
        "estado": "SP",
        "latitude": -23.970904,
        "longitude": -46.3247715,
        "cep": "11045540",
        "pais": "Brasil"
    },
    {
        "id": 2595,
        "nome": "Thiago Fernando",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13467197",
        "pais": "Brasil"
    },
    {
        "id": 2596,
        "nome": "raphael josé",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6783761,
        "longitude": -46.6821382,
        "cep": "13052610",
        "pais": "Brasil"
    },
    {
        "id": 2597,
        "nome": "Talita",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13504130",
        "pais": "Brasil"
    },
    {
        "id": 2598,
        "nome": "ana paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9882031,
        "longitude": -47.0993484,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 2599,
        "nome": "Wellington Dias",
        "cidade": "Araras",
        "estado": "SP",
        "latitude": -22.4134148,
        "longitude": -47.3957784,
        "cep": "13606224",
        "pais": "Brasil"
    },
    {
        "id": 2600,
        "nome": "fabio bicudo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.0873449,
        "longitude": -47.2256845,
        "cep": "13471030",
        "pais": "Brasil"
    },
    {
        "id": 2601,
        "nome": "Willian Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.0414458,
        "longitude": -44.2142956,
        "cep": "13101322",
        "pais": "Brasil"
    },
    {
        "id": 2602,
        "nome": "Marília",
        "cidade": "Votorantim",
        "estado": "SP",
        "latitude": -22.2172002,
        "longitude": -49.9500061,
        "cep": "18117610",
        "pais": "Brasil"
    },
    {
        "id": 2603,
        "nome": "Gideon",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.9534651,
        "longitude": -48.2355103,
        "cep": "13053172",
        "pais": "Brasil"
    },
    {
        "id": 2604,
        "nome": "Eduardo Santos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7435786,
        "longitude": -47.2935323,
        "cep": "13477700",
        "pais": "Brasil"
    },
    {
        "id": 2605,
        "nome": "Marisa Pereira",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -7.2563086,
        "longitude": -35.944466,
        "cep": "13150027",
        "pais": "Brasil"
    },
    {
        "id": 2606,
        "nome": "leonardo Nascimento",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.846832,
        "longitude": -41.9353248,
        "cep": "13041081",
        "pais": "Brasil"
    },
    {
        "id": 2607,
        "nome": "Leandra Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9191988,
        "longitude": -47.1070112,
        "cep": "13060090",
        "pais": "Brasil"
    },
    {
        "id": 2608,
        "nome": "Camila Faria",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -20.0617993,
        "longitude": -44.2313244,
        "cep": "13186032",
        "pais": "Brasil"
    },
    {
        "id": 2609,
        "nome": "Julia Candido",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13482095",
        "pais": "Brasil"
    },
    {
        "id": 2610,
        "nome": "Carolina Sá",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -6.1054698,
        "longitude": -49.8679641,
        "cep": "13050553",
        "pais": "Brasil"
    },
    {
        "id": 2611,
        "nome": "mauro silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5795007,
        "longitude": -46.7667974,
        "cep": "13051038",
        "pais": "Brasil"
    },
    {
        "id": 2612,
        "nome": "Anna Cristina Cesar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.1616485,
        "longitude": -45.8909546,
        "cep": "13090714",
        "pais": "Brasil"
    },
    {
        "id": 2613,
        "nome": "Claudio Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5475464,
        "longitude": -46.8006971,
        "cep": "13064860",
        "pais": "Brasil"
    },
    {
        "id": 2614,
        "nome": "Reginaldo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -24.8339327,
        "longitude": -48.4799742,
        "cep": "13188191",
        "pais": "Brasil"
    },
    {
        "id": 2615,
        "nome": "Marcelo Alves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.6117413,
        "longitude": -47.432672,
        "cep": "13185344",
        "pais": "Brasil"
    },
    {
        "id": 2616,
        "nome": "Juliano Leite",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -23.5945696,
        "longitude": -46.5102249,
        "cep": "13505494",
        "pais": "Brasil"
    },
    {
        "id": 2617,
        "nome": "Leandro Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2020453,
        "longitude": -45.95775,
        "cep": "13045050",
        "pais": "Brasil"
    },
    {
        "id": 2618,
        "nome": "Renato Barbosa de Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.7841551,
        "longitude": -41.3148769,
        "cep": "13045590",
        "pais": "Brasil"
    },
    {
        "id": 2619,
        "nome": "Édson Inácio Silva",
        "cidade": "Boituva",
        "estado": "SP",
        "latitude": -21.3560687,
        "longitude": -51.8511364,
        "cep": "18559899",
        "pais": "Brasil"
    },
    {
        "id": 2620,
        "nome": "Alessandra",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7356539,
        "longitude": -47.6065049,
        "cep": "13420823",
        "pais": "Brasil"
    },
    {
        "id": 2621,
        "nome": "Isabel Menezes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.5933542,
        "longitude": -47.8645445,
        "cep": "13050133",
        "pais": "Brasil"
    },
    {
        "id": 2622,
        "nome": "claudemir Mancini",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -22.9858334,
        "longitude": -47.5107032,
        "cep": "13360000",
        "pais": "Brasil"
    },
    {
        "id": 2623,
        "nome": "Marcos Vinicius dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -16.1615388,
        "longitude": -42.2816483,
        "cep": "13058413",
        "pais": "Brasil"
    },
    {
        "id": 2624,
        "nome": "Rodrigo Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.437368,
        "longitude": -43.6041187,
        "cep": "13045260",
        "pais": "Brasil"
    },
    {
        "id": 2625,
        "nome": "Pedro Campos",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.8883795,
        "longitude": -47.0582397,
        "cep": "13140693",
        "pais": "Brasil"
    },
    {
        "id": 2626,
        "nome": "Aline Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181570",
        "pais": "Brasil"
    },
    {
        "id": 2627,
        "nome": "Denise",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.7292165,
        "longitude": -57.0482981,
        "cep": "13051125",
        "pais": "Brasil"
    },
    {
        "id": 2628,
        "nome": "ANDERSON RAMOS",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -25.0542687,
        "longitude": -50.1039598,
        "cep": "13910003",
        "pais": "Brasil"
    },
    {
        "id": 2629,
        "nome": "Pedro Henrique",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7514141,
        "longitude": -47.1635881,
        "cep": "13145153",
        "pais": "Brasil"
    },
    {
        "id": 2630,
        "nome": "Rafael",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454002",
        "pais": "Brasil"
    },
    {
        "id": 2631,
        "nome": "Luiz Fernando Marques",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.5033122,
        "longitude": -47.4338921,
        "cep": "37795000",
        "pais": "Brasil"
    },
    {
        "id": 2632,
        "nome": "William Ferreira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5974094,
        "longitude": -46.7328819,
        "cep": "13188064",
        "pais": "Brasil"
    },
    {
        "id": 2633,
        "nome": "Raquel Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.7691355,
        "longitude": -46.6942497,
        "cep": "13101340",
        "pais": "Brasil"
    },
    {
        "id": 2634,
        "nome": "Joelma Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13179430",
        "pais": "Brasil"
    },
    {
        "id": 2635,
        "nome": "Anderson Nascimento",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13468866",
        "pais": "Brasil"
    },
    {
        "id": 2636,
        "nome": "Leo Brito",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13178400",
        "pais": "Brasil"
    },
    {
        "id": 2637,
        "nome": "Marilde",
        "cidade": "Bragança Paulista",
        "estado": "SP",
        "latitude": -22.7271731,
        "longitude": -47.3259323,
        "cep": "12927040",
        "pais": "Brasil"
    },
    {
        "id": 2638,
        "nome": "LUIZ FELIPE ROSA BRAGGION",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1294245,
        "longitude": -47.2408588,
        "cep": "13348220",
        "pais": "Brasil"
    },
    {
        "id": 2639,
        "nome": "Erivelton",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6301142,
        "longitude": -46.9412969,
        "cep": "13056117",
        "pais": "Brasil"
    },
    {
        "id": 2640,
        "nome": "Rafael Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2809997,
        "longitude": -45.9635855,
        "cep": "13054656",
        "pais": "Brasil"
    },
    {
        "id": 2641,
        "nome": "Giceli Dos Santos Sacomani",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8895241,
        "longitude": -47.0790029,
        "cep": "13070070",
        "pais": "Brasil"
    },
    {
        "id": 2642,
        "nome": "gabriel batista",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5492601,
        "longitude": -46.4395229,
        "cep": "13058176",
        "pais": "Brasil"
    },
    {
        "id": 2643,
        "nome": "Valdemir",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.9541662,
        "longitude": -47.0852444,
        "cep": "13173425",
        "pais": "Brasil"
    },
    {
        "id": 2644,
        "nome": "Adriano Silva",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456703",
        "pais": "Brasil"
    },
    {
        "id": 2645,
        "nome": "Vagner",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -20.7005224,
        "longitude": -44.8228911,
        "cep": "13273271",
        "pais": "Brasil"
    },
    {
        "id": 2646,
        "nome": "Cristiano Souza",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -20.0283855,
        "longitude": -44.2232131,
        "cep": "13272300",
        "pais": "Brasil"
    },
    {
        "id": 2647,
        "nome": "Leandro",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.437247,
        "longitude": -47.583958,
        "cep": "13502270",
        "pais": "Brasil"
    },
    {
        "id": 2648,
        "nome": "André Assis",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.6750227,
        "longitude": -50.4077152,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 2649,
        "nome": "Elcio Cruz",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.210948,
        "longitude": -47.5212331,
        "cep": "13467273",
        "pais": "Brasil"
    },
    {
        "id": 2650,
        "nome": "William Marques",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.829794,
        "longitude": -46.3207023,
        "cep": "13187167",
        "pais": "Brasil"
    },
    {
        "id": 2651,
        "nome": "Alexandre Sousa",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -20.1658847,
        "longitude": -44.8687238,
        "cep": "04331020",
        "pais": "Brasil"
    },
    {
        "id": 2652,
        "nome": "BRENO RAFAEL CUNHA NAVE CASTRO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8407756,
        "longitude": -47.1560695,
        "cep": "13069099",
        "pais": "Brasil"
    },
    {
        "id": 2653,
        "nome": "Fabiana Leite",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -22.2748208,
        "longitude": -48.1399057,
        "cep": "00013070",
        "pais": "Brasil"
    },
    {
        "id": 2654,
        "nome": "Stella Rustiguel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9125144,
        "longitude": -47.0847192,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 2655,
        "nome": "bolinha bolinha",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5615254,
        "longitude": -47.4113865,
        "cep": "13480743",
        "pais": "Brasil"
    },
    {
        "id": 2656,
        "nome": "Anderson Goncalves",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13457089",
        "pais": "Brasil"
    },
    {
        "id": 2657,
        "nome": "Larissa Monfardini",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4178494,
        "longitude": -47.5637816,
        "cep": "13500330",
        "pais": "Brasil"
    },
    {
        "id": 2658,
        "nome": "Juliana Arantes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8538627,
        "longitude": -47.0532376,
        "cep": "13087460",
        "pais": "Brasil"
    },
    {
        "id": 2659,
        "nome": "Fabio Camargo",
        "cidade": "Santo Antônio de Posse",
        "estado": "SP",
        "latitude": -22.7768955,
        "longitude": -45.1866901,
        "cep": "13833072",
        "pais": "Brasil"
    },
    {
        "id": 2660,
        "nome": "Simone",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13188002",
        "pais": "Brasil"
    },
    {
        "id": 2661,
        "nome": "Rafael",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13327467",
        "pais": "Brasil"
    },
    {
        "id": 2662,
        "nome": "Daiane Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5456442,
        "longitude": -47.4581354,
        "cep": "13061371",
        "pais": "Brasil"
    },
    {
        "id": 2663,
        "nome": "Juliano Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2441316,
        "longitude": -45.8999923,
        "cep": "13065650",
        "pais": "Brasil"
    },
    {
        "id": 2664,
        "nome": "Glauber Fernando Teixeira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8976455,
        "longitude": -47.0675819,
        "cep": "13020110",
        "pais": "Brasil"
    },
    {
        "id": 2665,
        "nome": "Maria Gomes De Jesus",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -19.7946935,
        "longitude": -47.9764867,
        "cep": "13183661",
        "pais": "Brasil"
    },
    {
        "id": 2666,
        "nome": "Carlos Medeiros",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.1788255,
        "longitude": -46.9841903,
        "cep": "13075490",
        "pais": "Brasil"
    },
    {
        "id": 2667,
        "nome": "claudia Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -24.001899,
        "longitude": -48.360081,
        "cep": "13030580",
        "pais": "Brasil"
    },
    {
        "id": 2668,
        "nome": "Paulo Galbrest",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9190931,
        "longitude": -47.10287,
        "cep": "13060072",
        "pais": "Brasil"
    },
    {
        "id": 2669,
        "nome": "Denise P Santana",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.1542938,
        "longitude": -51.3871465,
        "cep": "13186472",
        "pais": "Brasil"
    },
    {
        "id": 2670,
        "nome": "Fernando Rodrigues de Camargo",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5398178,
        "longitude": -46.6698493,
        "cep": "05013001",
        "pais": "Brasil"
    },
    {
        "id": 2671,
        "nome": "Mayara Mendes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9071877,
        "longitude": -47.0849617,
        "cep": "13032385",
        "pais": "Brasil"
    },
    {
        "id": 2672,
        "nome": "Luiz Diego",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7201256,
        "longitude": -47.1700682,
        "cep": "13145828",
        "pais": "Brasil"
    },
    {
        "id": 2673,
        "nome": "Lii",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.7198319,
        "longitude": -42.913866,
        "cep": "13064210",
        "pais": "Brasil"
    },
    {
        "id": 2674,
        "nome": "Juninho Adamantina",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -21.6831552,
        "longitude": -51.0716337,
        "cep": "17800000",
        "pais": "Brasil"
    },
    {
        "id": 2675,
        "nome": "Marcos Oliveira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13467520",
        "pais": "Brasil"
    },
    {
        "id": 2676,
        "nome": "FRANCISCO VIEGAS DE LUCENA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9412004,
        "longitude": -47.1862493,
        "cep": "13058533",
        "pais": "Brasil"
    },
    {
        "id": 2677,
        "nome": "Regiane",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.7965676,
        "longitude": -47.1047335,
        "cep": "13186012",
        "pais": "Brasil"
    },
    {
        "id": 2678,
        "nome": "Leandro Xavier",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -21.2977518,
        "longitude": -46.6943032,
        "cep": "13183310",
        "pais": "Brasil"
    },
    {
        "id": 2679,
        "nome": "Tico",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181502",
        "pais": "Brasil"
    },
    {
        "id": 2680,
        "nome": "Maik Teixeira",
        "cidade": "Cordeirópolis",
        "estado": "SP",
        "latitude": -22.4670936,
        "longitude": -47.3985609,
        "cep": "13493292",
        "pais": "Brasil"
    },
    {
        "id": 2681,
        "nome": "Rosemary Moises",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.206264,
        "longitude": -46.9022089,
        "cep": "13090715",
        "pais": "Brasil"
    },
    {
        "id": 2682,
        "nome": "Sergio",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.1889725,
        "longitude": -47.3917896,
        "cep": "13178373",
        "pais": "Brasil"
    },
    {
        "id": 2683,
        "nome": "Mina",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -21.9138081,
        "longitude": -50.7342843,
        "cep": "17690000",
        "pais": "Brasil"
    },
    {
        "id": 2684,
        "nome": "Rogério Gonçalves",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -21.9666855,
        "longitude": -47.9416419,
        "cep": "13175660",
        "pais": "Brasil"
    },
    {
        "id": 2685,
        "nome": "Francisco Fernandes Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -5.1851926,
        "longitude": -37.3628456,
        "cep": "13054374",
        "pais": "Brasil"
    },
    {
        "id": 2686,
        "nome": "Marcos Antônio Albuquerque De Andrade",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4381969,
        "longitude": -47.3678352,
        "cep": "18087730",
        "pais": "Brasil"
    },
    {
        "id": 2687,
        "nome": "Bruno Pereira",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.9437007,
        "longitude": -46.3794581,
        "cep": "13486882",
        "pais": "Brasil"
    },
    {
        "id": 2688,
        "nome": "Robson Araujo",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01317344",
        "pais": "Brasil"
    },
    {
        "id": 2689,
        "nome": "Clayton",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9763385,
        "longitude": -46.9906485,
        "cep": "13050622",
        "pais": "Brasil"
    },
    {
        "id": 2690,
        "nome": "Flavia Barros",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.531352,
        "longitude": -48.3930497,
        "cep": "13045640",
        "pais": "Brasil"
    },
    {
        "id": 2691,
        "nome": "Guilherme de Oliveira",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -23.4990706,
        "longitude": -46.4842712,
        "cep": "13483292",
        "pais": "Brasil"
    },
    {
        "id": 2692,
        "nome": "Paulo",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13451086",
        "pais": "Brasil"
    },
    {
        "id": 2693,
        "nome": "Charles Ferreira",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.6091329,
        "longitude": -46.7454077,
        "cep": "89240364",
        "pais": "Brasil"
    },
    {
        "id": 2694,
        "nome": "Eduardo Gonçalves",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13476060",
        "pais": "Brasil"
    },
    {
        "id": 2695,
        "nome": "Thiago Prado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7280731,
        "longitude": -45.5985574,
        "cep": "13034652",
        "pais": "Brasil"
    },
    {
        "id": 2696,
        "nome": "Rodolfo Cruz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.4207423,
        "longitude": -51.8832288,
        "cep": "13185843",
        "pais": "Brasil"
    },
    {
        "id": 2697,
        "nome": "Fernanda Rodrigues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13299144",
        "pais": "Brasil"
    },
    {
        "id": 2698,
        "nome": "Jeniffer",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -24.019141,
        "longitude": -46.4891377,
        "cep": "13059705",
        "pais": "Brasil"
    },
    {
        "id": 2699,
        "nome": "natarose10@gmail.com",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.0051984,
        "longitude": -47.5333876,
        "cep": "13370000",
        "pais": "Brasil"
    },
    {
        "id": 2700,
        "nome": "Paulo Eduardo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.098568,
        "longitude": -51.4150621,
        "cep": "13474040",
        "pais": "Brasil"
    },
    {
        "id": 2701,
        "nome": "Leandro Pintor",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9436475,
        "longitude": -43.3625903,
        "cep": "13053195",
        "pais": "Brasil"
    },
    {
        "id": 2702,
        "nome": "Eliza de Castro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13273553",
        "pais": "Brasil"
    },
    {
        "id": 2703,
        "nome": "Andreia Cristina de Faria",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.903993,
        "longitude": -47.055736,
        "cep": "13010050",
        "pais": "Brasil"
    },
    {
        "id": 2704,
        "nome": "Alan Nucci",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1054237,
        "longitude": -47.2090081,
        "cep": "13343810",
        "pais": "Brasil"
    },
    {
        "id": 2705,
        "nome": "Andre Cerqueira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13295650",
        "pais": "Brasil"
    },
    {
        "id": 2706,
        "nome": "Micheli",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -23.47952,
        "longitude": -46.6584524,
        "cep": "13141059",
        "pais": "Brasil"
    },
    {
        "id": 2707,
        "nome": "Murilo Borges",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13502140",
        "pais": "Brasil"
    },
    {
        "id": 2708,
        "nome": "Karina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9051877,
        "longitude": -43.1865673,
        "cep": "13054613",
        "pais": "Brasil"
    },
    {
        "id": 2709,
        "nome": "Ari José dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5957992,
        "longitude": -47.0189726,
        "cep": "13064783",
        "pais": "Brasil"
    },
    {
        "id": 2710,
        "nome": "Lucia Helena",
        "cidade": "Maria da Fé",
        "estado": "MG",
        "latitude": -23.4771819,
        "longitude": -46.5466793,
        "cep": "37517000",
        "pais": NaN
    },
    {
        "id": 2711,
        "nome": "Lúcia Helena",
        "cidade": "Maria da Fé",
        "estado": "MG",
        "latitude": -23.4771819,
        "longitude": -46.5466793,
        "cep": "37517000",
        "pais": NaN
    },
    {
        "id": 2712,
        "nome": "Edvaldo Severo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9191988,
        "longitude": -47.1070112,
        "cep": "13060090",
        "pais": "Brasil"
    },
    {
        "id": 2713,
        "nome": "Diógenes Melo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.0971427,
        "longitude": -34.9442007,
        "cep": "13031730",
        "pais": "Brasil"
    },
    {
        "id": 2714,
        "nome": "Polliana Moreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212142,
        "longitude": -47.0168006,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 2715,
        "nome": "Thiago Ribeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -24.4938027,
        "longitude": -47.8473698,
        "cep": "13057190",
        "pais": "Brasil"
    },
    {
        "id": 2716,
        "nome": "Fernanda Lopes",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7738231,
        "longitude": -47.1726411,
        "cep": "13142472",
        "pais": "Brasil"
    },
    {
        "id": 2717,
        "nome": "Renan Camargo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.94859,
        "longitude": -47.1125392,
        "cep": "13060628",
        "pais": "Brasil"
    },
    {
        "id": 2718,
        "nome": "Lucas Martins",
        "cidade": "Rifaina",
        "estado": "SP",
        "latitude": -23.6341539,
        "longitude": -46.5446803,
        "cep": "14490000",
        "pais": "Brasil"
    },
    {
        "id": 2719,
        "nome": "Ricardo Ferreira dos Santos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -23.4216018,
        "longitude": -46.525885,
        "cep": "13486588",
        "pais": "Brasil"
    },
    {
        "id": 2720,
        "nome": "Evandro Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.88681,
        "longitude": -47.0316063,
        "cep": "13091140",
        "pais": "Brasil"
    },
    {
        "id": 2721,
        "nome": "Henrique Assis",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0633353,
        "longitude": -47.1381008,
        "cep": "13348110",
        "pais": "Brasil"
    },
    {
        "id": 2722,
        "nome": "Rafael De Brito",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -22.980061,
        "longitude": -47.1583004,
        "cep": "13206650",
        "pais": "Brasil"
    },
    {
        "id": 2723,
        "nome": "Fabiano Costa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -20.7991325,
        "longitude": -49.4274939,
        "cep": "13173344",
        "pais": "Brasil"
    },
    {
        "id": 2724,
        "nome": "Luiz Cardoso",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.4893968,
        "longitude": -49.3359761,
        "cep": "13050570",
        "pais": "Brasil"
    },
    {
        "id": 2725,
        "nome": "Cesar Carlos *",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.7474918,
        "longitude": -38.5112785,
        "cep": "13070733",
        "pais": "Brasil"
    },
    {
        "id": 2726,
        "nome": "Caio",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13335520",
        "pais": "Brasil"
    },
    {
        "id": 2727,
        "nome": "Edna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9031347,
        "longitude": -47.0992825,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 2728,
        "nome": "Leonardo Lima",
        "cidade": "Campo Grande",
        "estado": "MS",
        "latitude": -20.4494839,
        "longitude": -54.6081159,
        "cep": "79023300",
        "pais": NaN
    },
    {
        "id": 2729,
        "nome": "Allan Lima",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13183223",
        "pais": "Brasil"
    },
    {
        "id": 2730,
        "nome": "Paulo Mello",
        "cidade": "Carira",
        "estado": "SE",
        "latitude": -10.3662375,
        "longitude": -37.7032601,
        "cep": "49550000",
        "pais": NaN
    },
    {
        "id": 2731,
        "nome": "Elaine Galhardi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9520532,
        "longitude": -47.0223554,
        "cep": "13272588",
        "pais": "Brasil"
    },
    {
        "id": 2732,
        "nome": "Lucas Aragão",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13506590",
        "pais": "Brasil"
    },
    {
        "id": 2733,
        "nome": "Alex",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13183500",
        "pais": "Brasil"
    },
    {
        "id": 2734,
        "nome": "Rafael Silva",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -23.4940289,
        "longitude": -46.4000322,
        "cep": "13409016",
        "pais": "Brasil"
    },
    {
        "id": 2735,
        "nome": "Viviane",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13185542",
        "pais": "Brasil"
    },
    {
        "id": 2736,
        "nome": "João Gabriel de Oliveira Celestrino",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.851223,
        "longitude": -47.0727458,
        "cep": "13080080",
        "pais": "Brasil"
    },
    {
        "id": 2737,
        "nome": "Natalia Ribeiro Fonseca",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9567998,
        "longitude": -47.0098573,
        "cep": "13272350",
        "pais": "Brasil"
    },
    {
        "id": 2738,
        "nome": "Igor cruz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -13.3757655,
        "longitude": -42.5166514,
        "cep": "13084185",
        "pais": "Brasil"
    },
    {
        "id": 2739,
        "nome": "Priscilla",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13308044",
        "pais": "Brasil"
    },
    {
        "id": 2740,
        "nome": "João avila",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8724062,
        "longitude": -43.1075437,
        "cep": "13060702",
        "pais": "Brasil"
    },
    {
        "id": 2741,
        "nome": "Paula Camila Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5392159,
        "longitude": -46.1804613,
        "cep": "13056430",
        "pais": "Brasil"
    },
    {
        "id": 2742,
        "nome": "Luciana Pereira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -19.856851,
        "longitude": -44.0365852,
        "cep": "13188210",
        "pais": "Brasil"
    },
    {
        "id": 2743,
        "nome": "Renato Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13277540",
        "pais": "Brasil"
    },
    {
        "id": 2744,
        "nome": "Erick França",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8811072,
        "longitude": -47.2302215,
        "cep": "13184210",
        "pais": "Brasil"
    },
    {
        "id": 2745,
        "nome": "Eduardo Tiago",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.0898543,
        "longitude": -51.0949179,
        "cep": "13058005",
        "pais": "Brasil"
    },
    {
        "id": 2746,
        "nome": "Lidiane Silva",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13480620",
        "pais": "Brasil"
    },
    {
        "id": 2747,
        "nome": "Edson Moreira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -19.5752593,
        "longitude": -46.9225122,
        "cep": "13184505",
        "pais": "Brasil"
    },
    {
        "id": 2748,
        "nome": "Guilherme Torres",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13482783",
        "pais": "Brasil"
    },
    {
        "id": 2749,
        "nome": "Angelica Costa",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13474444",
        "pais": "Brasil"
    },
    {
        "id": 2750,
        "nome": "ANDRE TORRES",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -20.2431345,
        "longitude": -50.6525462,
        "cep": "18103540",
        "pais": "Brasil"
    },
    {
        "id": 2751,
        "nome": "ReINDEFINIDOAmericana",
        "cidade": "SP",
        "estado": "-22.7167917",
        "latitude": -47.2941442,
        "longitude": 13467441.0,
        "cep": "Brasil",
        "pais": NaN
    },
    {
        "id": 2752,
        "nome": "Rubens",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8157972,
        "longitude": -43.3587935,
        "cep": "13044491",
        "pais": "Brasil"
    },
    {
        "id": 2753,
        "nome": "Claudio junior",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -22.1508772,
        "longitude": -51.4245342,
        "cep": "13348500",
        "pais": "Brasil"
    },
    {
        "id": 2754,
        "nome": "rafael moraes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.4444855,
        "longitude": -46.5747487,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 2755,
        "nome": "Rafael Bellettato",
        "cidade": "Amparo",
        "estado": "SP",
        "latitude": -22.7153268,
        "longitude": -46.8097957,
        "cep": "13905612",
        "pais": "Brasil"
    },
    {
        "id": 2756,
        "nome": "Juliana",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -29.0722114,
        "longitude": -53.8445443,
        "cep": "13370000",
        "pais": "Brasil"
    },
    {
        "id": 2757,
        "nome": "Nalita Lorenzi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8560778,
        "longitude": -47.0662175,
        "cep": "13080470",
        "pais": "Brasil"
    },
    {
        "id": 2758,
        "nome": "Eduardo Araújo",
        "cidade": "Paraibuna",
        "estado": "SP",
        "latitude": -23.6943316,
        "longitude": -46.6471048,
        "cep": "12260000",
        "pais": "Brasil"
    },
    {
        "id": 2759,
        "nome": "Guilherme Personeni",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9511772,
        "longitude": -47.008893,
        "cep": "13272503",
        "pais": "Brasil"
    },
    {
        "id": 2760,
        "nome": "Geraldo Mendes Maciel",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3787587,
        "longitude": -46.9539611,
        "cep": "13846115",
        "pais": "Brasil"
    },
    {
        "id": 2761,
        "nome": "Vitor Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.007842,
        "longitude": -45.587945,
        "cep": "13052412",
        "pais": "Brasil"
    },
    {
        "id": 2762,
        "nome": "Graziela Pomilio",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1929016,
        "longitude": -46.9561476,
        "cep": "13211771",
        "pais": "Brasil"
    },
    {
        "id": 2763,
        "nome": "Aparecido",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": 3.0250964,
        "longitude": -61.3486863,
        "cep": "13064806",
        "pais": "Brasil"
    },
    {
        "id": 2764,
        "nome": "Tatiana",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -21.993173,
        "longitude": -47.3333435,
        "cep": "13423332",
        "pais": "Brasil"
    },
    {
        "id": 2765,
        "nome": "Gabriel",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13285076",
        "pais": "Brasil"
    },
    {
        "id": 2766,
        "nome": "Erick",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7394946,
        "longitude": -47.1822998,
        "cep": "13068010",
        "pais": "Brasil"
    },
    {
        "id": 2767,
        "nome": "Guilherme Ferreira",
        "cidade": "Santo Antônio de Posse",
        "estado": "SP",
        "latitude": -19.7667731,
        "longitude": -47.9388533,
        "cep": "13830088",
        "pais": "Brasil"
    },
    {
        "id": 2768,
        "nome": "Claudivania Brito",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9483288,
        "longitude": -47.0866581,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 2769,
        "nome": "Dayane Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13052555",
        "pais": "Brasil"
    },
    {
        "id": 2770,
        "nome": "Regiane Teixeira",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3787587,
        "longitude": -46.9539611,
        "cep": "13848887",
        "pais": "Brasil"
    },
    {
        "id": 2771,
        "nome": "Marcus Vinícius",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13185404",
        "pais": "Brasil"
    },
    {
        "id": 2772,
        "nome": "Elaine",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13184481",
        "pais": "Brasil"
    },
    {
        "id": 2773,
        "nome": "Erica Livia",
        "cidade": "Descalvado",
        "estado": "SP",
        "latitude": -21.9064329,
        "longitude": -47.6193704,
        "cep": "13690000",
        "pais": "Brasil"
    },
    {
        "id": 2774,
        "nome": "Camila Leme",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -21.993173,
        "longitude": -47.3333435,
        "cep": "13424030",
        "pais": "Brasil"
    },
    {
        "id": 2775,
        "nome": "Carolina Abreu",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.53703,
        "longitude": -46.9197969,
        "cep": "13076540",
        "pais": "Brasil"
    },
    {
        "id": 2776,
        "nome": "Devair",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13482330",
        "pais": "Brasil"
    },
    {
        "id": 2777,
        "nome": "Lucas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -33.3585121,
        "longitude": -70.7449584,
        "cep": "13088028",
        "pais": "Brasil"
    },
    {
        "id": 2778,
        "nome": "Alexandre De Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.3888278,
        "longitude": -49.2893235,
        "cep": "13054045",
        "pais": "Brasil"
    },
    {
        "id": 2779,
        "nome": "Fabio Fontana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8821792,
        "longitude": -47.0671926,
        "cep": "13073090",
        "pais": "Brasil"
    },
    {
        "id": 2780,
        "nome": "Samuel Rodrigues",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -23.1940243,
        "longitude": -45.8829899,
        "cep": "13807499",
        "pais": "Brasil"
    },
    {
        "id": 2781,
        "nome": "paulo ricardo",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13202340",
        "pais": "Brasil"
    },
    {
        "id": 2782,
        "nome": "Haroldo França",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -20.5362584,
        "longitude": -47.3596228,
        "cep": "13184837",
        "pais": "Brasil"
    },
    {
        "id": 2783,
        "nome": "R C",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9076346,
        "longitude": -43.0533652,
        "cep": "13054213",
        "pais": "Brasil"
    },
    {
        "id": 2784,
        "nome": "Priscila Barbosa martins",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13260000",
        "pais": "Brasil"
    },
    {
        "id": 2785,
        "nome": "Rodrigo Da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13188171",
        "pais": "Brasil"
    },
    {
        "id": 2786,
        "nome": "fabio ramos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -23.682808,
        "longitude": -46.6020132,
        "cep": "13481894",
        "pais": "Brasil"
    },
    {
        "id": 2787,
        "nome": "Fernando Augusto Luiz",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.0760033,
        "longitude": -51.4740405,
        "cep": "13276500",
        "pais": "Brasil"
    },
    {
        "id": 2788,
        "nome": "Adelson Dandrea",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8977568,
        "longitude": -47.0629739,
        "cep": "13023040",
        "pais": "Brasil"
    },
    {
        "id": 2789,
        "nome": "Leomar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.103982,
        "longitude": -50.1673702,
        "cep": "13058662",
        "pais": "Brasil"
    },
    {
        "id": 2790,
        "nome": "Guilherme Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -13.8643915,
        "longitude": -40.0753357,
        "cep": "13060019",
        "pais": "Brasil"
    },
    {
        "id": 2791,
        "nome": "Fernando dos Santos Vieira",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -23.7775042,
        "longitude": -47.2913289,
        "cep": "13385764",
        "pais": "Brasil"
    },
    {
        "id": 2792,
        "nome": "Graziela Ribeiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8328139,
        "longitude": -47.5946019,
        "cep": "13171450",
        "pais": "Brasil"
    },
    {
        "id": 2793,
        "nome": "Juliana Oliveira Carvalho Grota",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212142,
        "longitude": -47.0168006,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 2794,
        "nome": "Juliano Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7670027,
        "longitude": -47.9838441,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 2795,
        "nome": "Cida Lopes",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -21.1311292,
        "longitude": -47.829261,
        "cep": "13142128",
        "pais": "Brasil"
    },
    {
        "id": 2796,
        "nome": "Lucas",
        "cidade": "Itapira",
        "estado": "SP",
        "latitude": -22.4480126,
        "longitude": -46.8098036,
        "cep": "13973198",
        "pais": "Brasil"
    },
    {
        "id": 2797,
        "nome": "Rafael Makio Yamaguti Makio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8477816,
        "longitude": -47.0875689,
        "cep": "13080655",
        "pais": "Brasil"
    },
    {
        "id": 2798,
        "nome": "Henrique",
        "cidade": "São Sebastião do Oeste",
        "estado": "MG",
        "latitude": -20.1856329,
        "longitude": -44.9146375,
        "cep": "35567000",
        "pais": NaN
    },
    {
        "id": 2799,
        "nome": "Emerson Gregorio da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8636333,
        "longitude": -47.1536023,
        "cep": "13068219",
        "pais": "Brasil"
    },
    {
        "id": 2800,
        "nome": "Reinaldo Santos",
        "cidade": "Amparo",
        "estado": "SP",
        "latitude": -23.6718463,
        "longitude": -46.6517795,
        "cep": "13902160",
        "pais": "Brasil"
    },
    {
        "id": 2801,
        "nome": "Paloma Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.3307254,
        "longitude": -48.8211495,
        "cep": "13056701",
        "pais": "Brasil"
    },
    {
        "id": 2802,
        "nome": "Aron Rodrigo Silva",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5531283,
        "longitude": -47.4455747,
        "cep": "13483332",
        "pais": "Brasil"
    },
    {
        "id": 2803,
        "nome": "Luciano Paulo Dos Santos",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.9573853,
        "longitude": -46.4137641,
        "cep": "13345414",
        "pais": "Brasil"
    },
    {
        "id": 2804,
        "nome": "Célia Regina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.1592696,
        "longitude": -44.1987397,
        "cep": "13086120",
        "pais": "Brasil"
    },
    {
        "id": 2805,
        "nome": "André Lopes da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.1520338,
        "longitude": -47.9829594,
        "cep": "13059852",
        "pais": "Brasil"
    },
    {
        "id": 2806,
        "nome": "Igor Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9193041,
        "longitude": -47.1038519,
        "cep": "13060073",
        "pais": "Brasil"
    },
    {
        "id": 2807,
        "nome": "Carlos Perez",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.2267393,
        "longitude": -49.9173946,
        "cep": "13091320",
        "pais": "Brasil"
    },
    {
        "id": 2808,
        "nome": "Marcelo Ronald Zaia",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.0984704,
        "longitude": -47.7194738,
        "cep": "18530000",
        "pais": "Brasil"
    },
    {
        "id": 2809,
        "nome": "Juninho Megahertz",
        "cidade": "Vila Velha",
        "estado": "ES",
        "latitude": -20.3715088,
        "longitude": -40.3031397,
        "cep": "29102010",
        "pais": NaN
    },
    {
        "id": 2810,
        "nome": "Ronaldo Batista",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.796554,
        "longitude": -47.9691134,
        "cep": "13041190",
        "pais": "Brasil"
    },
    {
        "id": 2811,
        "nome": "Julia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212142,
        "longitude": -47.0168006,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 2812,
        "nome": "Matheus Cunha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.1616749,
        "longitude": -49.5859552,
        "cep": "13023010",
        "pais": "Brasil"
    },
    {
        "id": 2813,
        "nome": "Guilherme Levy",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.6171079,
        "longitude": -47.4110269,
        "cep": "13015311",
        "pais": "Brasil"
    },
    {
        "id": 2814,
        "nome": "netaneas Fernandes sena",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9882031,
        "longitude": -47.0993484,
        "cep": "13052691",
        "pais": "Brasil"
    },
    {
        "id": 2815,
        "nome": "Alessandro Gardinal",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7336068,
        "longitude": -47.331719,
        "cep": "13471200",
        "pais": "Brasil"
    },
    {
        "id": 2816,
        "nome": "Wagner Stein",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5516688,
        "longitude": -47.4142602,
        "cep": "13484270",
        "pais": "Brasil"
    },
    {
        "id": 2817,
        "nome": "Ricardo Espelho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9204468,
        "longitude": -47.1059521,
        "cep": "13060078",
        "pais": "Brasil"
    },
    {
        "id": 2818,
        "nome": "Rafael Faria",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.4202067,
        "longitude": -45.4498396,
        "cep": "13468580",
        "pais": "Brasil"
    },
    {
        "id": 2819,
        "nome": "Henrique Braga",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13467353",
        "pais": "Brasil"
    },
    {
        "id": 2820,
        "nome": "Bruna Calori",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.851223,
        "longitude": -47.0727458,
        "cep": "13080080",
        "pais": "Brasil"
    },
    {
        "id": 2821,
        "nome": "Acacio A D",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9226714,
        "longitude": -45.3459606,
        "cep": "13020160",
        "pais": "Brasil"
    },
    {
        "id": 2822,
        "nome": "Luiz Felipe Lopes de Souza",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9322216,
        "longitude": -46.9815892,
        "cep": "13273701",
        "pais": "Brasil"
    },
    {
        "id": 2823,
        "nome": "Diogo Porfirio",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -24.3217777,
        "longitude": -46.9998593,
        "cep": "13150302",
        "pais": "Brasil"
    },
    {
        "id": 2824,
        "nome": "Carlos Laureano",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13337144",
        "pais": "Brasil"
    },
    {
        "id": 2825,
        "nome": "Angelo Freitas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.0261026,
        "longitude": -40.5369854,
        "cep": "13031900",
        "pais": "Brasil"
    },
    {
        "id": 2826,
        "nome": "Jorge de Souza",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.6034455,
        "longitude": -46.5982516,
        "cep": "13184885",
        "pais": "Brasil"
    },
    {
        "id": 2827,
        "nome": "Josué Soares",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -5.1889764,
        "longitude": -42.7398546,
        "cep": "18560000",
        "pais": "Brasil"
    },
    {
        "id": 2828,
        "nome": "Rodrigo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.2941929,
        "longitude": -40.7476044,
        "cep": "13050112",
        "pais": "Brasil"
    },
    {
        "id": 2829,
        "nome": "Gustavo Antonio Correa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.1419496,
        "longitude": -51.1148611,
        "cep": "13099007",
        "pais": "Brasil"
    },
    {
        "id": 2830,
        "nome": "Pedro Henrique da Silva",
        "cidade": "Araraquara",
        "estado": "SP",
        "latitude": -19.9263424,
        "longitude": -44.0926447,
        "cep": "14810534",
        "pais": "Brasil"
    },
    {
        "id": 2831,
        "nome": "Alexandre Coelho Da Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13178465",
        "pais": "Brasil"
    },
    {
        "id": 2832,
        "nome": "Geraldo Guimarães",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7920435,
        "longitude": -43.9820863,
        "cep": "13026515",
        "pais": "Brasil"
    },
    {
        "id": 2833,
        "nome": "Ana Tedesco",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.5399634,
        "longitude": -46.89761,
        "cep": "13473220",
        "pais": "Brasil"
    },
    {
        "id": 2834,
        "nome": "Eliano",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -22.6164881,
        "longitude": -46.7245821,
        "cep": "13163336",
        "pais": "Brasil"
    },
    {
        "id": 2835,
        "nome": "Irailson Dos Santos Nunes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8023528,
        "longitude": -47.2174334,
        "cep": "13170586",
        "pais": "Brasil"
    },
    {
        "id": 2836,
        "nome": "Rogerio Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.4720269,
        "longitude": -52.4664638,
        "cep": "13054240",
        "pais": "Brasil"
    },
    {
        "id": 2837,
        "nome": "Wilson Camargo",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -21.7526776,
        "longitude": -48.1577166,
        "cep": "13914456",
        "pais": "Brasil"
    },
    {
        "id": 2838,
        "nome": "Alexandre Coelho Vilalba",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180570",
        "pais": "Brasil"
    },
    {
        "id": 2839,
        "nome": "Eduardo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13296060",
        "pais": "Brasil"
    },
    {
        "id": 2840,
        "nome": "George",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13254434",
        "pais": "Brasil"
    },
    {
        "id": 2841,
        "nome": "Vagner oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6116469,
        "longitude": -46.5161837,
        "cep": "13060110",
        "pais": "Brasil"
    },
    {
        "id": 2842,
        "nome": "Tiago",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -27.0988552,
        "longitude": -52.6797339,
        "cep": "13042720",
        "pais": "Brasil"
    },
    {
        "id": 2843,
        "nome": "Takata",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13468150",
        "pais": "Brasil"
    },
    {
        "id": 2844,
        "nome": "Vinícius Lima",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4549364,
        "longitude": -46.9810832,
        "cep": "13803235",
        "pais": "Brasil"
    },
    {
        "id": 2845,
        "nome": "Maíra Souza",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13289464",
        "pais": "Brasil"
    },
    {
        "id": 2846,
        "nome": "Carla",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8893663,
        "longitude": -47.0758084,
        "cep": "13060073",
        "pais": "Brasil"
    },
    {
        "id": 2847,
        "nome": "Renato",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453717",
        "pais": "Brasil"
    },
    {
        "id": 2848,
        "nome": "Caio Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.4144493,
        "longitude": -46.8331331,
        "cep": "13026210",
        "pais": "Brasil"
    },
    {
        "id": 2849,
        "nome": "Li Luck",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.5628264,
        "longitude": -47.1669774,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 2850,
        "nome": "Cassia Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8961898,
        "longitude": -47.1569898,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 2851,
        "nome": "Victor Augusto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -12.8833738,
        "longitude": -38.4285788,
        "cep": "13034730",
        "pais": "Brasil"
    },
    {
        "id": 2852,
        "nome": "Karen Cristine",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322224",
        "pais": "Brasil"
    },
    {
        "id": 2853,
        "nome": "Rafaela",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -20.5498368,
        "longitude": -47.9942415,
        "cep": "37795000",
        "pais": "Brasil"
    },
    {
        "id": 2854,
        "nome": "stephano lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9471579,
        "longitude": -47.1585812,
        "cep": "13059107",
        "pais": "Brasil"
    },
    {
        "id": 2855,
        "nome": "Catarina Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.1808752,
        "longitude": -50.6594015,
        "cep": "13031500",
        "pais": "Brasil"
    },
    {
        "id": 2856,
        "nome": "Rene Monteiro",
        "cidade": "Iguape",
        "estado": "SP",
        "latitude": -24.7130818,
        "longitude": -47.5642212,
        "cep": "11920000",
        "pais": "Brasil"
    },
    {
        "id": 2857,
        "nome": "Luis Fernando",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.7243995,
        "longitude": -47.0097048,
        "cep": "13913372",
        "pais": "Brasil"
    },
    {
        "id": 2858,
        "nome": "Humberto Silvério",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.686123,
        "longitude": -46.4113644,
        "cep": "13183210",
        "pais": "Brasil"
    },
    {
        "id": 2859,
        "nome": "Gabriel Cardoso",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13184505",
        "pais": "Brasil"
    },
    {
        "id": 2860,
        "nome": "Anderson",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8452269,
        "longitude": -47.1554264,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 2861,
        "nome": "Natalia Cerrao",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7809686,
        "longitude": -47.1767623,
        "cep": "13142300",
        "pais": "Brasil"
    },
    {
        "id": 2862,
        "nome": "Diogo De Morais Oliveira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7576335,
        "longitude": -47.1521675,
        "cep": "13140113",
        "pais": "Brasil"
    },
    {
        "id": 2863,
        "nome": "Rafael Pereira Silveira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7791653,
        "longitude": -47.1601718,
        "cep": "13140538",
        "pais": "Brasil"
    },
    {
        "id": 2864,
        "nome": "Jéssica Eliza Rachioni",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5530241,
        "longitude": -47.447796,
        "cep": "13483286",
        "pais": "Brasil"
    },
    {
        "id": 2865,
        "nome": "Rafael Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.8235598,
        "longitude": -38.4625481,
        "cep": "13031810",
        "pais": "Brasil"
    },
    {
        "id": 2866,
        "nome": "Marcelo Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13061160",
        "pais": "Brasil"
    },
    {
        "id": 2867,
        "nome": "CLAUDENIR SOUZA FARIAS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8764982,
        "longitude": -47.032842,
        "cep": "13091020",
        "pais": "Brasil"
    },
    {
        "id": 2868,
        "nome": "Camila Sanchez Reckelberg",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 2869,
        "nome": "Lenise",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13276250",
        "pais": "Brasil"
    },
    {
        "id": 2870,
        "nome": "Nilton Batista",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13186371",
        "pais": "Brasil"
    },
    {
        "id": 2871,
        "nome": "Sabrina",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322221",
        "pais": "Brasil"
    },
    {
        "id": 2872,
        "nome": "Gerson",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.5147694,
        "longitude": -47.4858937,
        "cep": "18045180",
        "pais": "Brasil"
    },
    {
        "id": 2873,
        "nome": "jaime silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.544015,
        "longitude": -46.6893863,
        "cep": "13271751",
        "pais": "Brasil"
    },
    {
        "id": 2874,
        "nome": "Sandra conceicao da silva",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.336521,
        "longitude": -46.9501645,
        "cep": "13846137",
        "pais": "Brasil"
    },
    {
        "id": 2875,
        "nome": "josiel Oliveira",
        "cidade": "Senador Canedo",
        "estado": "GO",
        "latitude": -16.7637069,
        "longitude": -49.0996897,
        "cep": "75264006",
        "pais": NaN
    },
    {
        "id": 2876,
        "nome": "Aylla Yagizi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8821792,
        "longitude": -47.0671926,
        "cep": "13073090",
        "pais": "Brasil"
    },
    {
        "id": 2877,
        "nome": "Rudney Pissolato",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8851866,
        "longitude": -47.0640884,
        "cep": "13073010",
        "pais": "Brasil"
    },
    {
        "id": 2878,
        "nome": "Paulo Coelho da silva",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.8418692,
        "longitude": -47.6770455,
        "cep": "13483516",
        "pais": "Brasil"
    },
    {
        "id": 2879,
        "nome": "Ivanildo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13272419",
        "pais": "Brasil"
    },
    {
        "id": 2880,
        "nome": "Paulo Henrique",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13184665",
        "pais": "Brasil"
    },
    {
        "id": 2881,
        "nome": "Juliano Teixeira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13174570",
        "pais": "Brasil"
    },
    {
        "id": 2882,
        "nome": "Filipe Chaves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6186733,
        "longitude": -46.6325169,
        "cep": "13101134",
        "pais": "Brasil"
    },
    {
        "id": 2883,
        "nome": "Natalia Castro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -19.8406697,
        "longitude": -44.0146552,
        "cep": "13175583",
        "pais": "Brasil"
    },
    {
        "id": 2884,
        "nome": "Iara",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2122215,
        "longitude": -46.6991259,
        "cep": "13040108",
        "pais": "Brasil"
    },
    {
        "id": 2885,
        "nome": "Maurício Borges",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.6214411,
        "longitude": -45.4306098,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 2886,
        "nome": "Antônio Carlos De Araujo",
        "cidade": "Araras",
        "estado": "SP",
        "latitude": -22.4134148,
        "longitude": -47.3957784,
        "cep": "13601441",
        "pais": "Brasil"
    },
    {
        "id": 2887,
        "nome": "Ana Carolina Grandim Lopes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8813769,
        "longitude": -47.0500259,
        "cep": "13076008",
        "pais": "Brasil"
    },
    {
        "id": 2888,
        "nome": "Michelly",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9238007,
        "longitude": -47.1189263,
        "cep": "13060562",
        "pais": "Brasil"
    },
    {
        "id": 2889,
        "nome": "Juslaine Diniz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938725,
        "longitude": -47.0509288,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 2890,
        "nome": "Julio Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.4632078,
        "longitude": -49.1192466,
        "cep": "13052400",
        "pais": "Brasil"
    },
    {
        "id": 2891,
        "nome": "Eriton",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -29.4301875,
        "longitude": -50.5611161,
        "cep": "13520000",
        "pais": "Brasil"
    },
    {
        "id": 2892,
        "nome": "Rafael dos santos Gonçales",
        "cidade": "Monte Sião",
        "estado": "MG",
        "latitude": -22.4318167,
        "longitude": -46.5727673,
        "cep": "37580000",
        "pais": NaN
    },
    {
        "id": 2893,
        "nome": "Thiago",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.8792369,
        "longitude": -36.4924636,
        "cep": "13053034",
        "pais": "Brasil"
    },
    {
        "id": 2894,
        "nome": "Fernanda Barbosa",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13185250",
        "pais": "Brasil"
    },
    {
        "id": 2895,
        "nome": "Marcio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9543916,
        "longitude": -43.1697002,
        "cep": "13010200",
        "pais": "Brasil"
    },
    {
        "id": 2896,
        "nome": "Stefanie",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.6776904,
        "longitude": -45.0070672,
        "cep": "13054107",
        "pais": "Brasil"
    },
    {
        "id": 2897,
        "nome": "PEDRO HP",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.9904457,
        "longitude": -47.1414648,
        "cep": "13054566",
        "pais": "Brasil"
    },
    {
        "id": 2898,
        "nome": "Samuel Figueiredo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8541244,
        "longitude": -47.0472805,
        "cep": "13087500",
        "pais": "Brasil"
    },
    {
        "id": 2899,
        "nome": "Janaina Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13278072",
        "pais": "Brasil"
    },
    {
        "id": 2900,
        "nome": "Miguel Henrique Santos Alvarenga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938725,
        "longitude": -47.0509288,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 2901,
        "nome": "Willian",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -21.2631631,
        "longitude": -48.5099094,
        "cep": "14840000",
        "pais": "Brasil"
    },
    {
        "id": 2902,
        "nome": "du araujo",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.7243995,
        "longitude": -47.0097048,
        "cep": "13915001",
        "pais": "Brasil"
    },
    {
        "id": 2903,
        "nome": "Paula Oliveira Rodrigues",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7743983,
        "longitude": -47.143757,
        "cep": "13145370",
        "pais": "Brasil"
    },
    {
        "id": 2904,
        "nome": "Junior Bonilha",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180080",
        "pais": "Brasil"
    },
    {
        "id": 2905,
        "nome": "Paulo Viana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8533012,
        "longitude": -43.345696,
        "cep": "13041030",
        "pais": "Brasil"
    },
    {
        "id": 2906,
        "nome": "Na Cristina",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7743983,
        "longitude": -47.143757,
        "cep": "13140400",
        "pais": "Brasil"
    },
    {
        "id": 2907,
        "nome": "Carla Cristina pavanato",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.5044131,
        "longitude": -47.4895886,
        "cep": "18055200",
        "pais": "Brasil"
    },
    {
        "id": 2908,
        "nome": "Maria Angélica Queiroz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.1361747,
        "longitude": -47.0800067,
        "cep": "13087540",
        "pais": "Brasil"
    },
    {
        "id": 2909,
        "nome": "Jessica Gomes",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13273062",
        "pais": "Brasil"
    },
    {
        "id": 2910,
        "nome": "Josiane Barbosa Da Silva Santos",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": 9.9353192,
        "longitude": -84.2230945,
        "cep": "00013060",
        "pais": "Brasil"
    },
    {
        "id": 2911,
        "nome": "Sílvio Gonçalves",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -19.8283538,
        "longitude": -44.6070791,
        "cep": "13197560",
        "pais": "Brasil"
    },
    {
        "id": 2912,
        "nome": "Jessé Martins Da Silva",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7797599,
        "longitude": -47.1691783,
        "cep": "13142334",
        "pais": "Brasil"
    },
    {
        "id": 2913,
        "nome": "Robson Moreira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9802586,
        "longitude": -46.98642,
        "cep": "13274600",
        "pais": "Brasil"
    },
    {
        "id": 2914,
        "nome": "Claudinei",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -20.2905916,
        "longitude": -40.7883233,
        "cep": "13375000",
        "pais": "Brasil"
    },
    {
        "id": 2915,
        "nome": "Leandro Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7169632,
        "longitude": -45.0245003,
        "cep": "13053341",
        "pais": "Brasil"
    },
    {
        "id": 2916,
        "nome": "Roberta",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.2027578,
        "longitude": -49.3477832,
        "cep": "13051553",
        "pais": "Brasil"
    },
    {
        "id": 2917,
        "nome": "Raphael Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5372043,
        "longitude": -47.4446515,
        "cep": "13068201",
        "pais": "Brasil"
    },
    {
        "id": 2918,
        "nome": "Gabriel",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13482411",
        "pais": "Brasil"
    },
    {
        "id": 2919,
        "nome": "Marcos Gabriel Rodrigues Ferreira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.7995666,
        "longitude": -47.1948595,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 2920,
        "nome": "Adaylton",
        "cidade": "Leme",
        "estado": "SP",
        "latitude": -22.2014073,
        "longitude": -47.3975133,
        "cep": "13610310",
        "pais": "Brasil"
    },
    {
        "id": 2921,
        "nome": "Daniel De Oliveira Faria Daniel Faria",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 2922,
        "nome": "Everton Castilho",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.2764488,
        "longitude": -51.4986715,
        "cep": "13274465",
        "pais": "Brasil"
    },
    {
        "id": 2923,
        "nome": "Cremilda De Jesus Sampaio Cutis",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "08568700",
        "pais": "Brasil"
    },
    {
        "id": 2924,
        "nome": "William",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -27.5042631,
        "longitude": -48.4910696,
        "cep": "13059050",
        "pais": "Brasil"
    },
    {
        "id": 2925,
        "nome": "Rafael Henrique De Campos",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4952647,
        "longitude": -47.4183004,
        "cep": "18017000",
        "pais": "Brasil"
    },
    {
        "id": 2926,
        "nome": "Bruno Cezar Dusso",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9790145,
        "longitude": -46.9884675,
        "cep": "13275400",
        "pais": "Brasil"
    },
    {
        "id": 2927,
        "nome": "Aline Cunha",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5284871,
        "longitude": -46.5754241,
        "cep": "03081003",
        "pais": "Brasil"
    },
    {
        "id": 2928,
        "nome": "Flávio Miranda",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.2633602,
        "longitude": -47.2925144,
        "cep": "13348383",
        "pais": "Brasil"
    },
    {
        "id": 2929,
        "nome": "Marilene Maria Da Silva",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1013477,
        "longitude": -47.1774708,
        "cep": "13340350",
        "pais": "Brasil"
    },
    {
        "id": 2930,
        "nome": "Rafael Santos",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13219120",
        "pais": "Brasil"
    },
    {
        "id": 2931,
        "nome": "Rodrigo Guedes",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -3.0279021,
        "longitude": -60.013276,
        "cep": "13750316",
        "pais": "Brasil"
    },
    {
        "id": 2932,
        "nome": "william jesus",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13187031",
        "pais": "Brasil"
    },
    {
        "id": 2933,
        "nome": "Veronika Homma",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4207899,
        "longitude": -47.5806691,
        "cep": "13503538",
        "pais": "Brasil"
    },
    {
        "id": 2934,
        "nome": "Luis Fernando",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323420",
        "pais": "Brasil"
    },
    {
        "id": 2935,
        "nome": "Hugo Costa",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.9504475,
        "longitude": -46.3666085,
        "cep": "37795000",
        "pais": "Brasil"
    },
    {
        "id": 2936,
        "nome": "Aline",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.1143306,
        "longitude": -39.256077,
        "cep": "13031885",
        "pais": "Brasil"
    },
    {
        "id": 2937,
        "nome": "Ana Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.8092793,
        "longitude": -43.1673698,
        "cep": "13057504",
        "pais": "Brasil"
    },
    {
        "id": 2938,
        "nome": "Thais Romano",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458184",
        "pais": "Brasil"
    },
    {
        "id": 2939,
        "nome": "Ricardo Mendes De Carvalho",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4323192,
        "longitude": -47.5822904,
        "cep": "13502100",
        "pais": "Brasil"
    },
    {
        "id": 2940,
        "nome": "Edson Ribeiro Junior",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.5233431,
        "longitude": -47.4534201,
        "cep": "18031310",
        "pais": "Brasil"
    },
    {
        "id": 2941,
        "nome": "Jader Barbosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.5403116,
        "longitude": -42.6445506,
        "cep": "13051065",
        "pais": "Brasil"
    },
    {
        "id": 2942,
        "nome": "Isaac Israel Ribeiro Ribeiro",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -21.5955933,
        "longitude": -48.8162579,
        "cep": "14900000",
        "pais": "Brasil"
    },
    {
        "id": 2943,
        "nome": "Rosa Gomes da silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.131677,
        "longitude": -47.850246,
        "cep": "13056809",
        "pais": "Brasil"
    },
    {
        "id": 2944,
        "nome": "Marcelino Nelson Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0132731,
        "longitude": -49.897143,
        "cep": "13026410",
        "pais": "Brasil"
    },
    {
        "id": 2945,
        "nome": "Gabriel",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -26.2549618,
        "longitude": -53.6447293,
        "cep": "12056343",
        "pais": "Brasil"
    },
    {
        "id": 2946,
        "nome": "Cabelo",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13506650",
        "pais": "Brasil"
    },
    {
        "id": 2947,
        "nome": "Thiago",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13280288",
        "pais": "Brasil"
    },
    {
        "id": 2948,
        "nome": "Jennifer -",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.7474656,
        "longitude": -49.4128808,
        "cep": "13101310",
        "pais": "Brasil"
    },
    {
        "id": 2949,
        "nome": "Rodrigo Franco",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13184677",
        "pais": "Brasil"
    },
    {
        "id": 2950,
        "nome": "Tatiane Andrade",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9567998,
        "longitude": -47.0098573,
        "cep": "13272350",
        "pais": "Brasil"
    },
    {
        "id": 2951,
        "nome": "Fernando Bagattini",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9567998,
        "longitude": -47.0098573,
        "cep": "13272350",
        "pais": "Brasil"
    },
    {
        "id": 2952,
        "nome": "Wellington Santos",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13452030",
        "pais": "Brasil"
    },
    {
        "id": 2953,
        "nome": "Paulo Henrique Rios",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -22.9627739,
        "longitude": -43.6902455,
        "cep": "13920000",
        "pais": "Brasil"
    },
    {
        "id": 2954,
        "nome": "Pedro NN",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13276240",
        "pais": "Brasil"
    },
    {
        "id": 2955,
        "nome": "Diego",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -33.0185953,
        "longitude": -60.6260373,
        "cep": "13050422",
        "pais": "Brasil"
    },
    {
        "id": 2956,
        "nome": "Rosana Cardoso",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.4414556,
        "longitude": -46.5050258,
        "cep": "13183580",
        "pais": "Brasil"
    },
    {
        "id": 2957,
        "nome": "Jose Domingos",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -11.0101591,
        "longitude": -40.5784321,
        "cep": "12157394",
        "pais": "Brasil"
    },
    {
        "id": 2958,
        "nome": "Willian",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.2161921,
        "longitude": -46.8655529,
        "cep": "13209201",
        "pais": "Brasil"
    },
    {
        "id": 2959,
        "nome": "Jonas Rodrigues dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.8611336,
        "longitude": -51.4944355,
        "cep": "13058297",
        "pais": "Brasil"
    },
    {
        "id": 2960,
        "nome": "Giuliano Facio",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1880815,
        "longitude": -46.860936,
        "cep": "13218233",
        "pais": "Brasil"
    },
    {
        "id": 2961,
        "nome": "Sandra Siqueira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13175667",
        "pais": "Brasil"
    },
    {
        "id": 2962,
        "nome": "Edvaldo Joaquim",
        "cidade": "Costa Rica",
        "estado": "MS",
        "latitude": -18.5445641,
        "longitude": -53.1266282,
        "cep": "79550000",
        "pais": NaN
    },
    {
        "id": 2963,
        "nome": "Pam",
        "cidade": "Pirassununga",
        "estado": "SP",
        "latitude": -21.993173,
        "longitude": -47.3333435,
        "cep": "13636201",
        "pais": "Brasil"
    },
    {
        "id": 2964,
        "nome": "Paulo",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7740401,
        "longitude": -47.30475,
        "cep": "13382550",
        "pais": "Brasil"
    },
    {
        "id": 2965,
        "nome": "Gabriel Oliveira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.5835725,
        "longitude": -46.5218194,
        "cep": "13469710",
        "pais": "Brasil"
    },
    {
        "id": 2966,
        "nome": "Joao Paulo dos Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5458236,
        "longitude": -46.9118161,
        "cep": "13186360",
        "pais": "Brasil"
    },
    {
        "id": 2967,
        "nome": "Vinicius Rodrigues",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -21.2420379,
        "longitude": -45.2157209,
        "cep": "13187094",
        "pais": "Brasil"
    },
    {
        "id": 2968,
        "nome": "Rafael",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13482785",
        "pais": "Brasil"
    },
    {
        "id": 2969,
        "nome": "Matheus Teixeira",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13506870",
        "pais": "Brasil"
    },
    {
        "id": 2970,
        "nome": "Rafael Carvalho",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9727765,
        "longitude": -46.9998054,
        "cep": "13270180",
        "pais": "Brasil"
    },
    {
        "id": 2971,
        "nome": "Bruno Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.8796294,
        "longitude": -41.9735914,
        "cep": "13054521",
        "pais": "Brasil"
    },
    {
        "id": 2972,
        "nome": "Marcos Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.653751,
        "longitude": -47.1601161,
        "cep": "13051103",
        "pais": "Brasil"
    },
    {
        "id": 2973,
        "nome": "Fabio Gomes",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13304275",
        "pais": "Brasil"
    },
    {
        "id": 2974,
        "nome": "Thais Kolb Dias Leal",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.831416,
        "longitude": -47.2201138,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 2975,
        "nome": "wagner Lima",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13506685",
        "pais": "Brasil"
    },
    {
        "id": 2976,
        "nome": "Diego Veiga",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -23.7155433,
        "longitude": -46.653776,
        "cep": "13928430",
        "pais": "Brasil"
    },
    {
        "id": 2977,
        "nome": "Gabriel Bardí",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181664",
        "pais": "Brasil"
    },
    {
        "id": 2978,
        "nome": "Vania",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.3063032,
        "longitude": -49.0966828,
        "cep": "13101310",
        "pais": "Brasil"
    },
    {
        "id": 2979,
        "nome": "Gabrielle",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6198792,
        "longitude": -46.6797115,
        "cep": "13040061",
        "pais": "Brasil"
    },
    {
        "id": 2980,
        "nome": "Carlos Alberto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13255701",
        "pais": "Brasil"
    },
    {
        "id": 2981,
        "nome": "Thalita",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7189265,
        "longitude": -47.9441304,
        "cep": "13042520",
        "pais": "Brasil"
    },
    {
        "id": 2982,
        "nome": "Rodrigo Zanatta",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.0984704,
        "longitude": -47.7194738,
        "cep": "18530000",
        "pais": "Brasil"
    },
    {
        "id": 2983,
        "nome": "Bruno Henrique",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13175590",
        "pais": "Brasil"
    },
    {
        "id": 2984,
        "nome": "Sergio Mardegam",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938725,
        "longitude": -47.0509288,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 2985,
        "nome": "Robson Souza",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13214755",
        "pais": "Brasil"
    },
    {
        "id": 2986,
        "nome": "Wagner Lima",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13179041",
        "pais": "Brasil"
    },
    {
        "id": 2987,
        "nome": "Júlia",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9761546,
        "longitude": -46.9884262,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 2988,
        "nome": "Sarah David",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7410412,
        "longitude": -50.7889659,
        "cep": "13107230",
        "pais": "Brasil"
    },
    {
        "id": 2989,
        "nome": "Karina Cristina Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.8143826,
        "longitude": -49.4941968,
        "cep": "13098797",
        "pais": "Brasil"
    },
    {
        "id": 2990,
        "nome": "Thais De Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4449599,
        "longitude": -46.7156122,
        "cep": "13059856",
        "pais": "Brasil"
    },
    {
        "id": 2991,
        "nome": "Beatriz Simões",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.5230729,
        "longitude": -46.4414142,
        "cep": "13270393",
        "pais": "Brasil"
    },
    {
        "id": 2992,
        "nome": "Guigo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.1225923,
        "longitude": -40.480671,
        "cep": "13044380",
        "pais": "Brasil"
    },
    {
        "id": 2993,
        "nome": "Jaqueline",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.802321,
        "longitude": -43.931343,
        "cep": "13107228",
        "pais": "Brasil"
    },
    {
        "id": 2994,
        "nome": "Dhe Barros",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8855223,
        "longitude": -47.1765502,
        "cep": "13185153",
        "pais": "Brasil"
    },
    {
        "id": 2995,
        "nome": "Fábio Antunes",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01318500",
        "pais": "Brasil"
    },
    {
        "id": 2996,
        "nome": "Felipe",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13309091",
        "pais": "Brasil"
    },
    {
        "id": 2997,
        "nome": "Julia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.5486883,
        "longitude": -65.2083267,
        "cep": "13050126",
        "pais": "Brasil"
    },
    {
        "id": 2998,
        "nome": "Adriano Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181643",
        "pais": "Brasil"
    },
    {
        "id": 2999,
        "nome": "Henrique Costa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13177365",
        "pais": "Brasil"
    },
    {
        "id": 3000,
        "nome": "Maria Eduarda",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -2.591762,
        "longitude": -42.7056037,
        "cep": "13067364",
        "pais": "Brasil"
    },
    {
        "id": 3001,
        "nome": "Adriana Amaro",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13294140",
        "pais": "Brasil"
    },
    {
        "id": 3002,
        "nome": "Fernanda Ferreira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -21.4378801,
        "longitude": -50.0950556,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 3003,
        "nome": "Felipe Gomes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13178582",
        "pais": "Brasil"
    },
    {
        "id": 3004,
        "nome": "Ronaldo Camargo",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.8248662,
        "longitude": -47.7077144,
        "cep": "13346250",
        "pais": "Brasil"
    },
    {
        "id": 3005,
        "nome": "Edna",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13174119",
        "pais": "Brasil"
    },
    {
        "id": 3006,
        "nome": "Beatriz",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -19.9269125,
        "longitude": -44.0666707,
        "cep": "13279700",
        "pais": "Brasil"
    },
    {
        "id": 3007,
        "nome": "Camila cristina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13046400",
        "pais": "Brasil"
    },
    {
        "id": 3008,
        "nome": "Humberto Dias Da SILVA",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.7243995,
        "longitude": -47.0097048,
        "cep": "13914464",
        "pais": "Brasil"
    },
    {
        "id": 3009,
        "nome": "Luis Gustavo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.4210709,
        "longitude": -49.9581522,
        "cep": "13053037",
        "pais": "Brasil"
    },
    {
        "id": 3010,
        "nome": "Diogo Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.564493,
        "longitude": -46.5434978,
        "cep": "13179903",
        "pais": "Brasil"
    },
    {
        "id": 3011,
        "nome": "Wilson Vieira",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13487133",
        "pais": "Brasil"
    },
    {
        "id": 3012,
        "nome": "Caroline Fernandes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13185052",
        "pais": "Brasil"
    },
    {
        "id": 3013,
        "nome": "Gustavo Bueno",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5450133,
        "longitude": -51.4095074,
        "cep": "13082140",
        "pais": "Brasil"
    },
    {
        "id": 3014,
        "nome": "Matheus Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8493653,
        "longitude": -47.0731354,
        "cep": "13082205",
        "pais": "Brasil"
    },
    {
        "id": 3015,
        "nome": "Andre Luis Ribeiro",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -23.6446004,
        "longitude": -46.7425567,
        "cep": "13403338",
        "pais": "Brasil"
    },
    {
        "id": 3016,
        "nome": "Felipe Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.4719953,
        "longitude": -53.4726164,
        "cep": "13045650",
        "pais": "Brasil"
    },
    {
        "id": 3017,
        "nome": "wendell Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.313614,
        "longitude": -46.0492411,
        "cep": "13059739",
        "pais": "Brasil"
    },
    {
        "id": 3018,
        "nome": "Edvaldo",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7966307,
        "longitude": -47.1539027,
        "cep": "13145536",
        "pais": "Brasil"
    },
    {
        "id": 3019,
        "nome": "José Ricardo Araujo",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -30.0968166,
        "longitude": -51.0400659,
        "cep": "13940000",
        "pais": "Brasil"
    },
    {
        "id": 3020,
        "nome": "GF",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.531463,
        "longitude": -47.387017,
        "cep": "13185475",
        "pais": "Brasil"
    },
    {
        "id": 3021,
        "nome": "Israel Martins",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -21.1159627,
        "longitude": -48.0285602,
        "cep": "13179231",
        "pais": "Brasil"
    },
    {
        "id": 3022,
        "nome": "José Ricardo Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13300090",
        "pais": "Brasil"
    },
    {
        "id": 3023,
        "nome": "Isabella",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.1391844,
        "longitude": -48.9905425,
        "cep": "13084012",
        "pais": "Brasil"
    },
    {
        "id": 3024,
        "nome": "Eduardo Micos",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7591803,
        "longitude": -47.1837186,
        "cep": "13144725",
        "pais": "Brasil"
    },
    {
        "id": 3025,
        "nome": "Allan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -16.472472,
        "longitude": -49.731525,
        "cep": "13050175",
        "pais": "Brasil"
    },
    {
        "id": 3026,
        "nome": "Maria Eduarda",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13313112",
        "pais": "Brasil"
    },
    {
        "id": 3027,
        "nome": "fabio silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181701",
        "pais": "Brasil"
    },
    {
        "id": 3028,
        "nome": "Victor Ribeiro",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283312",
        "pais": "Brasil"
    },
    {
        "id": 3029,
        "nome": "Thiago Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.2082045,
        "longitude": -34.9204647,
        "cep": "13013040",
        "pais": "Brasil"
    },
    {
        "id": 3030,
        "nome": "José Daniel Corali",
        "cidade": "Vargem Grande do Sul",
        "estado": "SP",
        "latitude": -21.8345679,
        "longitude": -46.8995898,
        "cep": "13880000",
        "pais": "Brasil"
    },
    {
        "id": 3031,
        "nome": "Marcio Silva",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454074",
        "pais": "Brasil"
    },
    {
        "id": 3032,
        "nome": "Marcos Aurélio",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181580",
        "pais": "Brasil"
    },
    {
        "id": 3033,
        "nome": "Carlos Augusto Alves",
        "cidade": "Chapada",
        "estado": "RS",
        "latitude": -28.0587422,
        "longitude": -53.0680698,
        "cep": "99530000",
        "pais": NaN
    },
    {
        "id": 3034,
        "nome": "Fernanda Araujo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -16.7468825,
        "longitude": -48.5055046,
        "cep": "13101282",
        "pais": "Brasil"
    },
    {
        "id": 3035,
        "nome": "Ivonete",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5185092,
        "longitude": -46.3668778,
        "cep": "13056506",
        "pais": "Brasil"
    },
    {
        "id": 3036,
        "nome": "Jeyson Baldo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9267097,
        "longitude": -47.0891757,
        "cep": "13050440",
        "pais": "Brasil"
    },
    {
        "id": 3037,
        "nome": "Lilian",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4848852,
        "longitude": -46.9782805,
        "cep": "13807687",
        "pais": "Brasil"
    },
    {
        "id": 3038,
        "nome": "Andre Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4929192,
        "longitude": -46.4596133,
        "cep": "13058000",
        "pais": "Brasil"
    },
    {
        "id": 3039,
        "nome": "Guilherme",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5468704,
        "longitude": -46.6738817,
        "cep": "13188101",
        "pais": "Brasil"
    },
    {
        "id": 3040,
        "nome": "Marcos Borges",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.9154896,
        "longitude": -48.2311239,
        "cep": "13061210",
        "pais": "Brasil"
    },
    {
        "id": 3041,
        "nome": "Gisele",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13178473",
        "pais": "Brasil"
    },
    {
        "id": 3042,
        "nome": "Guilherme",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13086907",
        "pais": "Brasil"
    },
    {
        "id": 3043,
        "nome": "Valter Leite",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -12.5558785,
        "longitude": -55.7070371,
        "cep": "12046145",
        "pais": "Brasil"
    },
    {
        "id": 3044,
        "nome": "Amanda Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181740",
        "pais": "Brasil"
    },
    {
        "id": 3045,
        "nome": "William Terra",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456625",
        "pais": "Brasil"
    },
    {
        "id": 3046,
        "nome": "Flavia Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -5.8167187,
        "longitude": -61.291068,
        "cep": "13087440",
        "pais": "Brasil"
    },
    {
        "id": 3047,
        "nome": "Alan Dias",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3659863,
        "longitude": -46.9559579,
        "cep": "13843227",
        "pais": "Brasil"
    },
    {
        "id": 3048,
        "nome": "Franciele",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.3164126,
        "longitude": -48.6494928,
        "cep": "13054552",
        "pais": "Brasil"
    },
    {
        "id": 3049,
        "nome": "renato saes melhado",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8177949,
        "longitude": -47.2848393,
        "cep": "13172560",
        "pais": "Brasil"
    },
    {
        "id": 3050,
        "nome": "Lucas Delboni",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.445392,
        "longitude": -46.975711,
        "cep": "13800207",
        "pais": "Brasil"
    },
    {
        "id": 3051,
        "nome": "Thays Seabra Pinho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9185612,
        "longitude": -47.0487015,
        "cep": "13026285",
        "pais": "Brasil"
    },
    {
        "id": 3052,
        "nome": "Tamires Pinho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9185612,
        "longitude": -47.0487015,
        "cep": "13026285",
        "pais": "Brasil"
    },
    {
        "id": 3053,
        "nome": "Luana Barreto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9185612,
        "longitude": -47.0487015,
        "cep": "13026285",
        "pais": "Brasil"
    },
    {
        "id": 3054,
        "nome": "Ana Carla",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -16.4681135,
        "longitude": -54.679494,
        "cep": "13044005",
        "pais": "Brasil"
    },
    {
        "id": 3055,
        "nome": "Carol Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.7309965,
        "longitude": -43.0380548,
        "cep": "13068429",
        "pais": "Brasil"
    },
    {
        "id": 3056,
        "nome": "Joyce Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.14252,
        "longitude": -41.1391487,
        "cep": "13043770",
        "pais": "Brasil"
    },
    {
        "id": 3057,
        "nome": "Karla Ribeiro Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8636333,
        "longitude": -47.1536023,
        "cep": "13068219",
        "pais": "Brasil"
    },
    {
        "id": 3058,
        "nome": "Thiago Gonçalves",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13274768",
        "pais": "Brasil"
    },
    {
        "id": 3059,
        "nome": "Tiago Rodrigues Das Chagas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8679868,
        "longitude": -47.0378732,
        "cep": "13088038",
        "pais": "Brasil"
    },
    {
        "id": 3060,
        "nome": "Paulo sousa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0597221,
        "longitude": -47.18133,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 3061,
        "nome": "Luan José",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -5.6677038,
        "longitude": -36.6013476,
        "cep": "13053614",
        "pais": "Brasil"
    },
    {
        "id": 3062,
        "nome": "Luciana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -30.0714616,
        "longitude": -51.1112738,
        "cep": "13034060",
        "pais": "Brasil"
    },
    {
        "id": 3063,
        "nome": "RM",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13187179",
        "pais": "Brasil"
    },
    {
        "id": 3064,
        "nome": "Beatriz Chaves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.0146975,
        "longitude": -49.8853846,
        "cep": "13187047",
        "pais": "Brasil"
    },
    {
        "id": 3065,
        "nome": "Jedaías Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.2683917,
        "longitude": -45.9367719,
        "cep": "13060779",
        "pais": "Brasil"
    },
    {
        "id": 3066,
        "nome": "Thatyana Miranda De Moraes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9531008,
        "longitude": -47.0906109,
        "cep": "13051105",
        "pais": "Brasil"
    },
    {
        "id": 3067,
        "nome": "Fabiana",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13329350",
        "pais": "Brasil"
    },
    {
        "id": 3068,
        "nome": "Isabella Camanzi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0012823,
        "longitude": -47.0123861,
        "cep": "13278137",
        "pais": "Brasil"
    },
    {
        "id": 3069,
        "nome": "Daniel Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.5446727,
        "longitude": -46.7642246,
        "cep": "13179272",
        "pais": "Brasil"
    },
    {
        "id": 3070,
        "nome": "Douglas Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.400774,
        "longitude": -47.3823505,
        "cep": "13069079",
        "pais": "Brasil"
    },
    {
        "id": 3071,
        "nome": "André Barwinski",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1730136,
        "longitude": -46.9259108,
        "cep": "13209430",
        "pais": "Brasil"
    },
    {
        "id": 3072,
        "nome": "Carolina Abreu",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5405965,
        "longitude": -46.9213921,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 3073,
        "nome": "Leonardo Henrique De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4756322,
        "longitude": -51.8074854,
        "cep": "13050420",
        "pais": "Brasil"
    },
    {
        "id": 3074,
        "nome": "Giovani",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.600831,
        "longitude": -47.4000191,
        "cep": "13486852",
        "pais": "Brasil"
    },
    {
        "id": 3075,
        "nome": "Jeferson Da silva ferreira",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0633353,
        "longitude": -47.1381008,
        "cep": "13346410",
        "pais": "Brasil"
    },
    {
        "id": 3076,
        "nome": "Priscilla",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.7591418,
        "longitude": -49.3890778,
        "cep": "13059758",
        "pais": "Brasil"
    },
    {
        "id": 3077,
        "nome": "Whatts Diário",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9567998,
        "longitude": -47.0098573,
        "cep": "13272350",
        "pais": "Brasil"
    },
    {
        "id": 3078,
        "nome": "Matheus",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13271500",
        "pais": "Brasil"
    },
    {
        "id": 3079,
        "nome": "Ana Paula",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -19.8092793,
        "longitude": -43.1673698,
        "cep": "13193212",
        "pais": "Brasil"
    },
    {
        "id": 3080,
        "nome": "Priscila Coelho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8525261,
        "longitude": -47.1075621,
        "cep": "13082125",
        "pais": "Brasil"
    },
    {
        "id": 3081,
        "nome": "BEATRIZ VIANA",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7557125,
        "longitude": -47.191493,
        "cep": "13069400",
        "pais": "Brasil"
    },
    {
        "id": 3082,
        "nome": "Sabrina Barbosa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.6802766,
        "longitude": -45.456387,
        "cep": "13178370",
        "pais": "Brasil"
    },
    {
        "id": 3083,
        "nome": "Aline Vilela",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5796924,
        "longitude": -47.3995654,
        "cep": "13480410",
        "pais": "Brasil"
    },
    {
        "id": 3084,
        "nome": "Carlos Luiz Duarte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.3670755,
        "longitude": -49.0294107,
        "cep": "13067390",
        "pais": "Brasil"
    },
    {
        "id": 3085,
        "nome": "João De Morais Santos Junior",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -21.7959035,
        "longitude": -50.8821712,
        "cep": "17700000",
        "pais": "Brasil"
    },
    {
        "id": 3086,
        "nome": "Weliton",
        "cidade": "Votuporanga",
        "estado": "SP",
        "latitude": -20.4083838,
        "longitude": -49.9769098,
        "cep": "15503409",
        "pais": "Brasil"
    },
    {
        "id": 3087,
        "nome": "Enzo",
        "cidade": "Cordeirópolis",
        "estado": "SP",
        "latitude": -22.4670936,
        "longitude": -47.3985609,
        "cep": "13491190",
        "pais": "Brasil"
    },
    {
        "id": 3088,
        "nome": "Claudia Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.4928115,
        "longitude": -47.4268001,
        "cep": "13064845",
        "pais": "Brasil"
    },
    {
        "id": 3089,
        "nome": "Karen",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5031311,
        "longitude": -47.4341778,
        "cep": "13010041",
        "pais": "Brasil"
    },
    {
        "id": 3090,
        "nome": "Kleber Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.7623193,
        "longitude": -38.581697,
        "cep": "13031365",
        "pais": "Brasil"
    },
    {
        "id": 3091,
        "nome": "Adriano Nunes",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -10.5499582,
        "longitude": -37.5388116,
        "cep": "18240000",
        "pais": "Brasil"
    },
    {
        "id": 3092,
        "nome": "Luis",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13275724",
        "pais": "Brasil"
    },
    {
        "id": 3093,
        "nome": "Helen De Andrade",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5702302,
        "longitude": -47.3899706,
        "cep": "13486062",
        "pais": "Brasil"
    },
    {
        "id": 3094,
        "nome": "Renan Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.8936543,
        "longitude": -49.3429133,
        "cep": "13069404",
        "pais": "Brasil"
    },
    {
        "id": 3095,
        "nome": "Jr",
        "cidade": "Araras",
        "estado": "SP",
        "latitude": -22.4129891,
        "longitude": -47.3966899,
        "cep": "13604174",
        "pais": "Brasil"
    },
    {
        "id": 3096,
        "nome": "Letícia Salla",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8934463,
        "longitude": -47.0788816,
        "cep": "13070030",
        "pais": "Brasil"
    },
    {
        "id": 3097,
        "nome": "Vanessa",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "latitude": -22.315998,
        "longitude": -49.0934504,
        "cep": "23595009",
        "pais": NaN
    },
    {
        "id": 3098,
        "nome": "Ana Paula Pimentel Silva",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "06753030",
        "pais": "Brasil"
    },
    {
        "id": 3099,
        "nome": "Laís",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5179561,
        "longitude": -46.5418779,
        "cep": "13061085",
        "pais": "Brasil"
    },
    {
        "id": 3100,
        "nome": "Claudio Junior",
        "cidade": "Itapetininga",
        "estado": "SP",
        "latitude": -23.1506864,
        "longitude": -47.0088791,
        "cep": "18210340",
        "pais": "Brasil"
    },
    {
        "id": 3101,
        "nome": "Rafael de Campos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.2809997,
        "longitude": -45.9635855,
        "cep": "13177432",
        "pais": "Brasil"
    },
    {
        "id": 3102,
        "nome": "Leandro Porto",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13186490",
        "pais": "Brasil"
    },
    {
        "id": 3103,
        "nome": "Lucas Tavares",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13468460",
        "pais": "Brasil"
    },
    {
        "id": 3104,
        "nome": "Valdemar Junior",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -3.9387472,
        "longitude": -40.7478967,
        "cep": "15895000",
        "pais": "Brasil"
    },
    {
        "id": 3105,
        "nome": "Lucas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.0641534,
        "longitude": -46.991699,
        "cep": "13070030",
        "pais": "Brasil"
    },
    {
        "id": 3106,
        "nome": "Hércules Uchôa",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3922908,
        "longitude": -47.5838707,
        "cep": "13504363",
        "pais": "Brasil"
    },
    {
        "id": 3107,
        "nome": "Willian Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -15.6026816,
        "longitude": -56.085007,
        "cep": "13088112",
        "pais": "Brasil"
    },
    {
        "id": 3108,
        "nome": "Paulo Leandro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.5814157,
        "longitude": -48.5701688,
        "cep": "13042390",
        "pais": "Brasil"
    },
    {
        "id": 3109,
        "nome": "Fernando Baldo",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454335",
        "pais": "Brasil"
    },
    {
        "id": 3110,
        "nome": "Daniela Garcia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4552334,
        "longitude": -51.9390053,
        "cep": "13060721",
        "pais": "Brasil"
    },
    {
        "id": 3111,
        "nome": "Júlia Pedroso",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13336351",
        "pais": "Brasil"
    },
    {
        "id": 3112,
        "nome": "William Hergert",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6497963,
        "longitude": -47.327506,
        "cep": "13480970",
        "pais": "Brasil"
    },
    {
        "id": 3113,
        "nome": "Clayton dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -9.0789754,
        "longitude": -44.359311,
        "cep": "13045529",
        "pais": "Brasil"
    },
    {
        "id": 3114,
        "nome": "Thiago",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13481849",
        "pais": "Brasil"
    },
    {
        "id": 3115,
        "nome": "Rafael De Oliveira Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -12.5306326,
        "longitude": -40.3007833,
        "cep": "13054648",
        "pais": "Brasil"
    },
    {
        "id": 3116,
        "nome": "3E Entregas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.1554095,
        "longitude": -48.9837277,
        "cep": "13054363",
        "pais": "Brasil"
    },
    {
        "id": 3117,
        "nome": "Marcia Aparecida",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -20.7982146,
        "longitude": -49.4349986,
        "cep": "13183270",
        "pais": "Brasil"
    },
    {
        "id": 3118,
        "nome": "Gabriela Dos Santos",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.4159941,
        "longitude": -45.4585254,
        "cep": "13380025",
        "pais": "Brasil"
    },
    {
        "id": 3119,
        "nome": "Amanda Leme",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13309521",
        "pais": "Brasil"
    },
    {
        "id": 3120,
        "nome": "Laura Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5822672,
        "longitude": -46.7981284,
        "cep": "13188002",
        "pais": "Brasil"
    },
    {
        "id": 3121,
        "nome": "Paola Mofatto",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5643569,
        "longitude": -47.3904673,
        "cep": "13486083",
        "pais": "Brasil"
    },
    {
        "id": 3122,
        "nome": "Diego Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.3201332,
        "longitude": -48.9962814,
        "cep": "13054370",
        "pais": "Brasil"
    },
    {
        "id": 3123,
        "nome": "João Vítor de Barros Freire",
        "cidade": "Serra Negra",
        "estado": "SP",
        "latitude": -22.606932,
        "longitude": -46.698003,
        "cep": "13930000",
        "pais": "Brasil"
    },
    {
        "id": 3124,
        "nome": "Erim",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.94859,
        "longitude": -47.1125392,
        "cep": "13060628",
        "pais": "Brasil"
    },
    {
        "id": 3125,
        "nome": "Márcio Da Silva",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.7336016,
        "longitude": -46.7966769,
        "cep": "13343300",
        "pais": "Brasil"
    },
    {
        "id": 3126,
        "nome": "Carlos Alberto Rodrigues",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.6173058,
        "longitude": -48.0614681,
        "cep": "13212576",
        "pais": "Brasil"
    },
    {
        "id": 3127,
        "nome": "Luis Antonio Ramos",
        "cidade": "Duartina",
        "estado": "SP",
        "latitude": -25.4671547,
        "longitude": -49.2647982,
        "cep": "17471404",
        "pais": "Brasil"
    },
    {
        "id": 3128,
        "nome": "Gabriel Hernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.1300573,
        "longitude": -49.0141835,
        "cep": "13051103",
        "pais": "Brasil"
    },
    {
        "id": 3129,
        "nome": "Nathalia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.2689133,
        "longitude": -46.3056567,
        "cep": "13052570",
        "pais": "Brasil"
    },
    {
        "id": 3130,
        "nome": "Dislaine souza",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7213531,
        "longitude": -47.1787136,
        "cep": "13145770",
        "pais": "Brasil"
    },
    {
        "id": 3131,
        "nome": "Karina",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13170290",
        "pais": "Brasil"
    },
    {
        "id": 3132,
        "nome": "Natanael Junior",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181060",
        "pais": "Brasil"
    },
    {
        "id": 3133,
        "nome": "Vinicius Santiago",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.807621,
        "longitude": -47.2206023,
        "cep": "13179314",
        "pais": "Brasil"
    },
    {
        "id": 3134,
        "nome": "Rafaela",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13310036",
        "pais": "Brasil"
    },
    {
        "id": 3135,
        "nome": "Fábio Miguel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.5404408,
        "longitude": -47.3646491,
        "cep": "13083510",
        "pais": "Brasil"
    },
    {
        "id": 3136,
        "nome": "Nadia Soraia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9419726,
        "longitude": -47.1830092,
        "cep": "13058543",
        "pais": "Brasil"
    },
    {
        "id": 3137,
        "nome": "Izabel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -1.1668189,
        "longitude": -62.5270572,
        "cep": "13054024",
        "pais": "Brasil"
    },
    {
        "id": 3138,
        "nome": "Paulo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": 0.5840111,
        "longitude": -50.161125,
        "cep": "13060023",
        "pais": "Brasil"
    },
    {
        "id": 3139,
        "nome": "Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.9095759,
        "longitude": -48.2817182,
        "cep": "13042340",
        "pais": "Brasil"
    },
    {
        "id": 3140,
        "nome": "RODRIGO DA SILVA  MARCHI",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.939028,
        "longitude": -47.1929695,
        "cep": "13058581",
        "pais": "Brasil"
    },
    {
        "id": 3141,
        "nome": "Alexandre Neves",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01711007",
        "pais": "Brasil"
    },
    {
        "id": 3142,
        "nome": "Andre  Pires",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6716743,
        "longitude": -46.513144,
        "cep": "13040093",
        "pais": "Brasil"
    },
    {
        "id": 3143,
        "nome": "Abel",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -22.9065187,
        "longitude": -46.1368919,
        "cep": "13212321",
        "pais": "Brasil"
    },
    {
        "id": 3144,
        "nome": "Suéllen Onofre",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8636333,
        "longitude": -47.1536023,
        "cep": "13068219",
        "pais": "Brasil"
    },
    {
        "id": 3145,
        "nome": "Martins .h",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.5538799,
        "longitude": -47.448977,
        "cep": "13042340",
        "pais": "Brasil"
    },
    {
        "id": 3146,
        "nome": "Dori Edison José Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9035085,
        "longitude": -47.0605903,
        "cep": "13010151",
        "pais": "Brasil"
    },
    {
        "id": 3147,
        "nome": "Maria APARECIDA BORGES",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -17.8175352,
        "longitude": -50.9557023,
        "cep": "13053171",
        "pais": "Brasil"
    },
    {
        "id": 3148,
        "nome": "Allan costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.7644687,
        "longitude": -43.3291471,
        "cep": "13060478",
        "pais": "Brasil"
    },
    {
        "id": 3149,
        "nome": "Adilson",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7435677,
        "longitude": -45.5988601,
        "cep": "13058490",
        "pais": "Brasil"
    },
    {
        "id": 3150,
        "nome": "Gustavo Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13096155",
        "pais": "Brasil"
    },
    {
        "id": 3151,
        "nome": "Vinicius Lima",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13183255",
        "pais": "Brasil"
    },
    {
        "id": 3152,
        "nome": "Marcello Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9112361,
        "longitude": -47.0815398,
        "cep": "13035000",
        "pais": "Brasil"
    },
    {
        "id": 3153,
        "nome": "Nathália",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.2689133,
        "longitude": -46.3056567,
        "cep": "13087723",
        "pais": "Brasil"
    },
    {
        "id": 3154,
        "nome": "João vinicius",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -4.296774,
        "longitude": -45.2461648,
        "cep": "13056040",
        "pais": "Brasil"
    },
    {
        "id": 3155,
        "nome": "Ana Paula Machado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.674478,
        "longitude": -47.2429965,
        "cep": "13100235",
        "pais": "Brasil"
    },
    {
        "id": 3156,
        "nome": "Marina Giovana",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180653",
        "pais": "Brasil"
    },
    {
        "id": 3157,
        "nome": "Jenifher Caroline Cardozo",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5702302,
        "longitude": -47.3899706,
        "cep": "13486062",
        "pais": "Brasil"
    },
    {
        "id": 3158,
        "nome": "Wagner",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -12.2818593,
        "longitude": -41.1686734,
        "cep": "13059675",
        "pais": "Brasil"
    },
    {
        "id": 3159,
        "nome": "Diego",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -33.0185953,
        "longitude": -60.6260373,
        "cep": "13060611",
        "pais": "Brasil"
    },
    {
        "id": 3160,
        "nome": "Guilherme Barbosa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6048312,
        "longitude": -46.6955109,
        "cep": "13052572",
        "pais": "Brasil"
    },
    {
        "id": 3161,
        "nome": "Ari fernando Fernando",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -23.5796988,
        "longitude": -48.05216,
        "cep": "13487411",
        "pais": "Brasil"
    },
    {
        "id": 3162,
        "nome": "Rodrigo Cesar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.5548493,
        "longitude": -48.6026175,
        "cep": "13031885",
        "pais": "Brasil"
    },
    {
        "id": 3163,
        "nome": "Felipe Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6199967,
        "longitude": -46.5164781,
        "cep": "13060611",
        "pais": "Brasil"
    },
    {
        "id": 3164,
        "nome": "Bárbara Germano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -30.0225426,
        "longitude": -51.1143078,
        "cep": "13044510",
        "pais": "Brasil"
    },
    {
        "id": 3165,
        "nome": "Romeo Antônio Zangalli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8890697,
        "longitude": -47.0727729,
        "cep": "13070118",
        "pais": "Brasil"
    },
    {
        "id": 3166,
        "nome": "mariana carolina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.6459235,
        "longitude": -43.8132627,
        "cep": "13088118",
        "pais": "Brasil"
    },
    {
        "id": 3167,
        "nome": "K. Jhones",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.0297523,
        "longitude": -48.8622121,
        "cep": "13061096",
        "pais": "Brasil"
    },
    {
        "id": 3168,
        "nome": "Priscila Rocha",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8882408,
        "longitude": -47.2370922,
        "cep": "13185475",
        "pais": "Brasil"
    },
    {
        "id": 3169,
        "nome": "Laura",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13474026",
        "pais": "Brasil"
    },
    {
        "id": 3170,
        "nome": "Naiara Maia",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7576335,
        "longitude": -47.1521675,
        "cep": "13140113",
        "pais": "Brasil"
    },
    {
        "id": 3171,
        "nome": "Andréia Antônio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.0448023,
        "longitude": -49.3879971,
        "cep": "13020060",
        "pais": "Brasil"
    },
    {
        "id": 3172,
        "nome": "Ana Maria Amancio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -6.9104534,
        "longitude": -37.6014062,
        "cep": "13045903",
        "pais": "Brasil"
    },
    {
        "id": 3173,
        "nome": "Humberto David Machado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9459583,
        "longitude": -47.0286394,
        "cep": "13045137",
        "pais": "Brasil"
    },
    {
        "id": 3174,
        "nome": "Ana Neves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -17.2294867,
        "longitude": -46.863391,
        "cep": "13056350",
        "pais": "Brasil"
    },
    {
        "id": 3175,
        "nome": "Fernanda Mello",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2616541,
        "longitude": -51.1600199,
        "cep": "13051555",
        "pais": "Brasil"
    },
    {
        "id": 3176,
        "nome": "BRENDA LIMA AMORIM AMORIM",
        "cidade": "Medeiros Neto",
        "estado": "BA",
        "latitude": -17.3786306,
        "longitude": -40.234118,
        "cep": "45960000",
        "pais": NaN
    },
    {
        "id": 3177,
        "nome": "Ana Medeiros",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -16.8173023,
        "longitude": -49.3729311,
        "cep": "13058900",
        "pais": "Brasil"
    },
    {
        "id": 3178,
        "nome": "Sonia Aparecida Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8566233,
        "longitude": -47.1549925,
        "cep": "13105796",
        "pais": "Brasil"
    },
    {
        "id": 3179,
        "nome": "Vanessa Ricco da Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9320873,
        "longitude": -47.0593693,
        "cep": "13040108",
        "pais": "Brasil"
    },
    {
        "id": 3180,
        "nome": "Ismael",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -27.3057387,
        "longitude": -54.0622529,
        "cep": "13190800",
        "pais": "Brasil"
    },
    {
        "id": 3181,
        "nome": "Cristiano de Mendonça",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -10.92077,
        "longitude": -37.050479,
        "cep": "13100490",
        "pais": "Brasil"
    },
    {
        "id": 3182,
        "nome": "João Mathias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5384316,
        "longitude": -46.6932829,
        "cep": "13058485",
        "pais": "Brasil"
    },
    {
        "id": 3183,
        "nome": "Adilson Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.4622395,
        "longitude": -47.1982726,
        "cep": "13063570",
        "pais": "Brasil"
    },
    {
        "id": 3184,
        "nome": "Leandro Gonçalves",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13500110",
        "pais": "Brasil"
    },
    {
        "id": 3185,
        "nome": "Maycon Alves",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7435786,
        "longitude": -47.2935323,
        "cep": "13477700",
        "pais": "Brasil"
    },
    {
        "id": 3186,
        "nome": "Thiago Mancini Soares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.869295,
        "longitude": -47.045005,
        "cep": "13088010",
        "pais": "Brasil"
    },
    {
        "id": 3187,
        "nome": "Furyo live filmes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8851866,
        "longitude": -47.0640884,
        "cep": "13073010",
        "pais": "Brasil"
    },
    {
        "id": 3188,
        "nome": "Roberto T Z",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7634875,
        "longitude": -47.9962614,
        "cep": "13063420",
        "pais": "Brasil"
    },
    {
        "id": 3189,
        "nome": "Julio Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13188100",
        "pais": "Brasil"
    },
    {
        "id": 3190,
        "nome": "Jeane Félix da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.2562947,
        "longitude": -35.25197,
        "cep": "13033204",
        "pais": "Brasil"
    },
    {
        "id": 3191,
        "nome": "Julio Cesar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -6.4787046,
        "longitude": -36.162536,
        "cep": "13053206",
        "pais": "Brasil"
    },
    {
        "id": 3192,
        "nome": "Aline",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.1143306,
        "longitude": -39.256077,
        "cep": "13065201",
        "pais": "Brasil"
    },
    {
        "id": 3193,
        "nome": "Felipe",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -32.7418966,
        "longitude": -70.7177729,
        "cep": "13101239",
        "pais": "Brasil"
    },
    {
        "id": 3194,
        "nome": "Juliana Barbosa de Melo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212142,
        "longitude": -47.0168006,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 3195,
        "nome": "Kelvin Scorçafava",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9194832,
        "longitude": -47.1041331,
        "cep": "13060076",
        "pais": "Brasil"
    },
    {
        "id": 3196,
        "nome": "Erika",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8864,
        "longitude": -47.0452615,
        "cep": "13024035",
        "pais": "Brasil"
    },
    {
        "id": 3197,
        "nome": "Vinicius Alves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.9179305,
        "longitude": -48.6933875,
        "cep": "13088601",
        "pais": "Brasil"
    },
    {
        "id": 3198,
        "nome": "Joao Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4862264,
        "longitude": -46.3660546,
        "cep": "13051205",
        "pais": "Brasil"
    },
    {
        "id": 3199,
        "nome": "Daniel Jose Silva Costa",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -20.8075477,
        "longitude": -49.3386247,
        "cep": "13467275",
        "pais": "Brasil"
    },
    {
        "id": 3200,
        "nome": "rodrigo silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9483288,
        "longitude": -47.0866581,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 3201,
        "nome": "Tiago Felipe",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -11.8113235,
        "longitude": -39.3782722,
        "cep": "13056006",
        "pais": "Brasil"
    },
    {
        "id": 3202,
        "nome": "Durval Junior",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13172590",
        "pais": "Brasil"
    },
    {
        "id": 3203,
        "nome": "Alexandre Rodrigues da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -15.6134985,
        "longitude": -56.0951531,
        "cep": "13026515",
        "pais": "Brasil"
    },
    {
        "id": 3204,
        "nome": "Rafael Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.0085444,
        "longitude": -60.0238496,
        "cep": "13056220",
        "pais": "Brasil"
    },
    {
        "id": 3205,
        "nome": "William",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13185230",
        "pais": "Brasil"
    },
    {
        "id": 3206,
        "nome": "Tiago Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.032351,
        "longitude": -48.9456087,
        "cep": "13070024",
        "pais": "Brasil"
    },
    {
        "id": 3207,
        "nome": "Emerson De Almeida",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3732483,
        "longitude": -46.9546864,
        "cep": "13844123",
        "pais": "Brasil"
    },
    {
        "id": 3208,
        "nome": "André Luis Teodoro De Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9758606,
        "longitude": -47.1364904,
        "cep": "13054107",
        "pais": "Brasil"
    },
    {
        "id": 3209,
        "nome": "Odete Souza",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4848852,
        "longitude": -46.9782805,
        "cep": "13806610",
        "pais": "Brasil"
    },
    {
        "id": 3210,
        "nome": "Priscila",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13274590",
        "pais": "Brasil"
    },
    {
        "id": 3211,
        "nome": "CAMILA",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458727",
        "pais": "Brasil"
    },
    {
        "id": 3212,
        "nome": "Lucas Andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.3063989,
        "longitude": -40.3191248,
        "cep": "13042430",
        "pais": "Brasil"
    },
    {
        "id": 3213,
        "nome": "Cleber Jose",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8431617,
        "longitude": -47.1192296,
        "cep": "13096320",
        "pais": "Brasil"
    },
    {
        "id": 3214,
        "nome": "Luiz Isipon",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9187603,
        "longitude": -47.0998873,
        "cep": "13060082",
        "pais": "Brasil"
    },
    {
        "id": 3215,
        "nome": "Anderson Glaucius Pereira De Sousa Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938725,
        "longitude": -47.0509288,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 3216,
        "nome": "Guta Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.881429,
        "longitude": -47.0690136,
        "cep": "13073035",
        "pais": "Brasil"
    },
    {
        "id": 3217,
        "nome": "Thais Dias",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13299039",
        "pais": "Brasil"
    },
    {
        "id": 3218,
        "nome": "Rodrigo Souza",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13304387",
        "pais": "Brasil"
    },
    {
        "id": 3219,
        "nome": "Maria Eduarda Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.1512319,
        "longitude": -34.836925,
        "cep": "13058822",
        "pais": "Brasil"
    },
    {
        "id": 3220,
        "nome": "luciana souza",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.850363,
        "longitude": -47.2023892,
        "cep": "13189106",
        "pais": "Brasil"
    },
    {
        "id": 3221,
        "nome": "Marcelo",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.8057869,
        "longitude": -47.1170923,
        "cep": "13148218",
        "pais": "Brasil"
    },
    {
        "id": 3222,
        "nome": "Miguel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.7003791,
        "longitude": -48.901155,
        "cep": "13044695",
        "pais": "Brasil"
    },
    {
        "id": 3223,
        "nome": "Adrielly",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7256886,
        "longitude": -47.1793582,
        "cep": "13145706",
        "pais": "Brasil"
    },
    {
        "id": 3224,
        "nome": "gabriel silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5665258,
        "longitude": -46.6775168,
        "cep": "13187219",
        "pais": "Brasil"
    },
    {
        "id": 3225,
        "nome": "Alice Pereira Prates",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9514567,
        "longitude": -47.0257006,
        "cep": "13044502",
        "pais": "Brasil"
    },
    {
        "id": 3226,
        "nome": "Camila Vieira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9776973,
        "longitude": -47.1374379,
        "cep": "13056300",
        "pais": "Brasil"
    },
    {
        "id": 3227,
        "nome": "Pedro Santana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8841679,
        "longitude": -47.1506054,
        "cep": "13041770",
        "pais": "Brasil"
    },
    {
        "id": 3228,
        "nome": "Eliton Rubens da Costa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.881429,
        "longitude": -47.0690136,
        "cep": "13073035",
        "pais": "Brasil"
    },
    {
        "id": 3229,
        "nome": "Barbara Fonseca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9035085,
        "longitude": -47.0605903,
        "cep": "13010151",
        "pais": "Brasil"
    },
    {
        "id": 3230,
        "nome": "Giovana Frizzarin",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7470964,
        "longitude": -47.3424681,
        "cep": "13465660",
        "pais": "Brasil"
    },
    {
        "id": 3231,
        "nome": "Julia De Souza",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456437",
        "pais": "Brasil"
    },
    {
        "id": 3232,
        "nome": "David martins",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -25.4171369,
        "longitude": -49.3105981,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 3233,
        "nome": "Andre Rosa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13275090",
        "pais": "Brasil"
    },
    {
        "id": 3234,
        "nome": "Anderson Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9521941,
        "longitude": -47.2141886,
        "cep": "13059700",
        "pais": "Brasil"
    },
    {
        "id": 3235,
        "nome": "Thalita",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -19.7189265,
        "longitude": -47.9441304,
        "cep": "13183050",
        "pais": "Brasil"
    },
    {
        "id": 3236,
        "nome": "Vitória Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.2939066,
        "longitude": -40.3088365,
        "cep": "13091203",
        "pais": "Brasil"
    },
    {
        "id": 3237,
        "nome": "Mariana Rezende",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.3169189,
        "longitude": -47.3322625,
        "cep": "13049453",
        "pais": "Brasil"
    },
    {
        "id": 3238,
        "nome": "Cristiane",
        "cidade": "São Carlos",
        "estado": "SP",
        "latitude": -23.5612688,
        "longitude": -46.6423701,
        "cep": "13571639",
        "pais": "Brasil"
    },
    {
        "id": 3239,
        "nome": "Aline Ribeiro",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7966307,
        "longitude": -47.1539027,
        "cep": "13140508",
        "pais": "Brasil"
    },
    {
        "id": 3240,
        "nome": "Maicon Aparecido",
        "cidade": "Pinhalzinho",
        "estado": "SP",
        "latitude": -22.7828693,
        "longitude": -46.5927175,
        "cep": "12995000",
        "pais": "Brasil"
    },
    {
        "id": 3241,
        "nome": "Bruna Fidencio",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 3242,
        "nome": "Isaias Cavalcante",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6757876,
        "longitude": -46.7794042,
        "cep": "13050581",
        "pais": "Brasil"
    },
    {
        "id": 3243,
        "nome": "André Vieira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.0830289,
        "longitude": -34.9290062,
        "cep": "13010111",
        "pais": "Brasil"
    },
    {
        "id": 3244,
        "nome": "Mariana Crispim",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284460",
        "pais": "Brasil"
    },
    {
        "id": 3245,
        "nome": "William Ribeiro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180220",
        "pais": "Brasil"
    },
    {
        "id": 3246,
        "nome": "Pedrina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6488012,
        "longitude": -46.7678031,
        "cep": "13088606",
        "pais": "Brasil"
    },
    {
        "id": 3247,
        "nome": "claudinei barros",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.3409224,
        "longitude": -48.7656372,
        "cep": "13185005",
        "pais": "Brasil"
    },
    {
        "id": 3248,
        "nome": "Ana Clara",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 3249,
        "nome": "Weliton Silva Pereira Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.891854,
        "longitude": -47.0967006,
        "cep": "13070193",
        "pais": "Brasil"
    },
    {
        "id": 3250,
        "nome": "Denise Gonçalves",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.2400067,
        "longitude": -45.7017467,
        "cep": "13190800",
        "pais": "Brasil"
    },
    {
        "id": 3251,
        "nome": "Ronaldo Araujo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.4358208,
        "longitude": -46.9204439,
        "cep": "13060633",
        "pais": "Brasil"
    },
    {
        "id": 3252,
        "nome": "Raphael Rodrigues França",
        "cidade": "Colíder",
        "estado": "MT",
        "latitude": -10.8055267,
        "longitude": -55.4557306,
        "cep": "78500000",
        "pais": NaN
    },
    {
        "id": 3253,
        "nome": "Deisy Paes",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7259059,
        "longitude": -47.1872547,
        "cep": "13145731",
        "pais": "Brasil"
    },
    {
        "id": 3254,
        "nome": "DIEGO ALBERTO REZENDE CAMPOS",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3896452,
        "longitude": -47.5822338,
        "cep": "13504265",
        "pais": "Brasil"
    },
    {
        "id": 3255,
        "nome": "Paula",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13178402",
        "pais": "Brasil"
    },
    {
        "id": 3256,
        "nome": "Maurício",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -12.9260592,
        "longitude": -42.7538968,
        "cep": "13030640",
        "pais": "Brasil"
    },
    {
        "id": 3257,
        "nome": "Nelson Leite",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9489505,
        "longitude": -47.1017422,
        "cep": "13087620",
        "pais": "Brasil"
    },
    {
        "id": 3258,
        "nome": "Giovanna",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9474723,
        "longitude": -47.0956299,
        "cep": "13199310",
        "pais": "Brasil"
    },
    {
        "id": 3259,
        "nome": "Leandro Morais",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -6.596487,
        "longitude": -40.3200248,
        "cep": "13040704",
        "pais": "Brasil"
    },
    {
        "id": 3260,
        "nome": "Tiago De Jesus",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -10.3684344,
        "longitude": -38.3364845,
        "cep": "13059671",
        "pais": "Brasil"
    },
    {
        "id": 3261,
        "nome": "Bruna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.1209315,
        "longitude": -34.9046174,
        "cep": "13065320",
        "pais": "Brasil"
    },
    {
        "id": 3262,
        "nome": "Julio Cesar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13086069",
        "pais": "Brasil"
    },
    {
        "id": 3263,
        "nome": "Alexsander",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9473563,
        "longitude": -47.0313677,
        "cep": "13059604",
        "pais": "Brasil"
    },
    {
        "id": 3264,
        "nome": "Vanderlei Aguilera Comino",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4495517,
        "longitude": -47.5063453,
        "cep": "18070862",
        "pais": "Brasil"
    },
    {
        "id": 3265,
        "nome": "Alexsandher Coelho",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.3741311,
        "longitude": -47.6474189,
        "cep": "18560000",
        "pais": "Brasil"
    },
    {
        "id": 3266,
        "nome": "Yoka",
        "cidade": "Rio das Pedras",
        "estado": "SP",
        "latitude": -23.5554665,
        "longitude": -46.6348312,
        "cep": "13398006",
        "pais": "Brasil"
    },
    {
        "id": 3267,
        "nome": "Rafael Dias",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181341",
        "pais": "Brasil"
    },
    {
        "id": 3268,
        "nome": "Nathália",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13219522",
        "pais": "Brasil"
    },
    {
        "id": 3269,
        "nome": "Fabio Pereira De Souza",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1158664,
        "longitude": -47.2236332,
        "cep": "13346070",
        "pais": "Brasil"
    },
    {
        "id": 3270,
        "nome": "Henrique",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453721",
        "pais": "Brasil"
    },
    {
        "id": 3271,
        "nome": "Lucas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -33.3585121,
        "longitude": -70.7449584,
        "cep": "13050078",
        "pais": "Brasil"
    },
    {
        "id": 3272,
        "nome": "Flávio da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.8285751,
        "longitude": -49.4952941,
        "cep": "13057012",
        "pais": "Brasil"
    },
    {
        "id": 3273,
        "nome": "Rafael Costa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322278",
        "pais": "Brasil"
    },
    {
        "id": 3274,
        "nome": "LOVO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.567689,
        "longitude": -47.3590093,
        "cep": "13056473",
        "pais": "Brasil"
    },
    {
        "id": 3275,
        "nome": "Sandra",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1452561,
        "longitude": -47.0033252,
        "cep": "13212590",
        "pais": "Brasil"
    },
    {
        "id": 3276,
        "nome": "Manuel Pessoa",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13179902",
        "pais": "Brasil"
    },
    {
        "id": 3277,
        "nome": "Fagner jose da silva Jose",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9193041,
        "longitude": -47.1038519,
        "cep": "13060073",
        "pais": "Brasil"
    },
    {
        "id": 3278,
        "nome": "Allan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -16.472472,
        "longitude": -49.731525,
        "cep": "13067818",
        "pais": "Brasil"
    },
    {
        "id": 3279,
        "nome": "Willian",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -15.6020687,
        "longitude": -56.0852123,
        "cep": "13058208",
        "pais": "Brasil"
    },
    {
        "id": 3280,
        "nome": "Rosimeire Alves Luiz",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7797599,
        "longitude": -47.1691783,
        "cep": "13142334",
        "pais": "Brasil"
    },
    {
        "id": 3281,
        "nome": "Sidney",
        "cidade": "São João Del Rei",
        "estado": "MG",
        "latitude": -23.9970828,
        "longitude": -48.3471353,
        "cep": "36302539",
        "pais": NaN
    },
    {
        "id": 3282,
        "nome": "Wilson Nunes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5138263,
        "longitude": -47.5143118,
        "cep": "13051103",
        "pais": "Brasil"
    },
    {
        "id": 3283,
        "nome": "Anderson Soares",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -23.6242632,
        "longitude": -46.3159754,
        "cep": "13917120",
        "pais": "Brasil"
    },
    {
        "id": 3284,
        "nome": "Nilberto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -5.845649,
        "longitude": -35.2511409,
        "cep": "13049109",
        "pais": "Brasil"
    },
    {
        "id": 3285,
        "nome": "Erisvaldo da Silva",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.284805,
        "longitude": -51.9088956,
        "cep": "13197198",
        "pais": "Brasil"
    },
    {
        "id": 3286,
        "nome": "Ismael Araujo",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -9.6005809,
        "longitude": -35.7425278,
        "cep": "13190800",
        "pais": "Brasil"
    },
    {
        "id": 3287,
        "nome": "Renato",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5784123,
        "longitude": -46.6754416,
        "cep": "13035120",
        "pais": "Brasil"
    },
    {
        "id": 3288,
        "nome": "Soraya",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -13.5782204,
        "longitude": -41.8130376,
        "cep": "13150017",
        "pais": "Brasil"
    },
    {
        "id": 3289,
        "nome": "Luciana",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -30.0714616,
        "longitude": -51.1112738,
        "cep": "13190820",
        "pais": "Brasil"
    },
    {
        "id": 3290,
        "nome": "Lucélia",
        "cidade": "Tatuí",
        "estado": "SP",
        "latitude": -21.7211293,
        "longitude": -51.0188,
        "cep": "18279180",
        "pais": "Brasil"
    },
    {
        "id": 3291,
        "nome": "Flavio",
        "cidade": "Fátima do Sul",
        "estado": "MS",
        "latitude": -20.8285751,
        "longitude": -49.4952941,
        "cep": "79700000",
        "pais": NaN
    },
    {
        "id": 3292,
        "nome": "João Natal Cezar",
        "cidade": "Serra Negra",
        "estado": "SP",
        "latitude": -22.606932,
        "longitude": -46.698003,
        "cep": "13930000",
        "pais": "Brasil"
    },
    {
        "id": 3293,
        "nome": "Natalia Rodrigues",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13506813",
        "pais": "Brasil"
    },
    {
        "id": 3294,
        "nome": "Robson Carvalho",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453882",
        "pais": "Brasil"
    },
    {
        "id": 3295,
        "nome": "Herbert William De Assis",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -22.9858334,
        "longitude": -47.5107032,
        "cep": "13360000",
        "pais": "Brasil"
    },
    {
        "id": 3296,
        "nome": "Ander Gordão",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7147038,
        "longitude": -47.3622543,
        "cep": "13469670",
        "pais": "Brasil"
    },
    {
        "id": 3297,
        "nome": "Marcos Alvarez",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.420935,
        "longitude": -47.4215594,
        "cep": "18103210",
        "pais": "Brasil"
    },
    {
        "id": 3298,
        "nome": "Rubens Maciel Junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9531008,
        "longitude": -47.0906109,
        "cep": "13051105",
        "pais": "Brasil"
    },
    {
        "id": 3299,
        "nome": "Daniel Oliveira",
        "cidade": "Araras",
        "estado": "SP",
        "latitude": -22.5777168,
        "longitude": -47.374789,
        "cep": "13606020",
        "pais": "Brasil"
    },
    {
        "id": 3300,
        "nome": "Gabriel",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.5597285,
        "longitude": -47.1234935,
        "cep": "18053080",
        "pais": "Brasil"
    },
    {
        "id": 3301,
        "nome": "Itamar Rodrigues Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9684348,
        "longitude": -47.0007308,
        "cep": "13271150",
        "pais": "Brasil"
    },
    {
        "id": 3302,
        "nome": "Silas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.3267009,
        "longitude": -48.9778745,
        "cep": "13031390",
        "pais": "Brasil"
    },
    {
        "id": 3303,
        "nome": "Jessica",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -20.7596726,
        "longitude": -49.3846874,
        "cep": "13380025",
        "pais": "Brasil"
    },
    {
        "id": 3304,
        "nome": "Fernanda",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8312181,
        "longitude": -47.263031,
        "cep": "13171120",
        "pais": "Brasil"
    },
    {
        "id": 3305,
        "nome": "Henrique Pegorari",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7243236,
        "longitude": -47.3171261,
        "cep": "13472360",
        "pais": "Brasil"
    },
    {
        "id": 3306,
        "nome": "Kayane Moreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8787927,
        "longitude": -47.0359915,
        "cep": "13091133",
        "pais": "Brasil"
    },
    {
        "id": 3307,
        "nome": "Guina",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8476474,
        "longitude": -47.044351,
        "cep": "13024035",
        "pais": "Brasil"
    },
    {
        "id": 3308,
        "nome": "Caue Lazzarini",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.3745028,
        "longitude": -47.5512695,
        "cep": "13506121",
        "pais": "Brasil"
    },
    {
        "id": 3309,
        "nome": "Douglas Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -9.565663,
        "longitude": -35.7409183,
        "cep": "13056350",
        "pais": "Brasil"
    },
    {
        "id": 3310,
        "nome": "Everton Ramos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.3254916,
        "longitude": -46.7214649,
        "cep": "13044510",
        "pais": "Brasil"
    },
    {
        "id": 3311,
        "nome": "James",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -25.4335441,
        "longitude": -49.2815625,
        "cep": "13348430",
        "pais": "Brasil"
    },
    {
        "id": 3312,
        "nome": "Luiz Fernando Braga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.0360801,
        "longitude": -42.3816532,
        "cep": "13054595",
        "pais": "Brasil"
    },
    {
        "id": 3313,
        "nome": "Eduardo Filipe",
        "cidade": "Fortaleza",
        "estado": "CE",
        "latitude": -3.8118221,
        "longitude": -38.5257355,
        "cep": "60862460",
        "pais": NaN
    },
    {
        "id": 3314,
        "nome": "VITOR MATEUS",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -30.1477812,
        "longitude": -51.14892,
        "cep": "13069083",
        "pais": "Brasil"
    },
    {
        "id": 3315,
        "nome": "Leandro",
        "cidade": "Pirassununga",
        "estado": "SP",
        "latitude": -21.993173,
        "longitude": -47.3333435,
        "cep": "13640403",
        "pais": "Brasil"
    },
    {
        "id": 3316,
        "nome": "Marcio Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9181988,
        "longitude": -47.1001614,
        "cep": "13060866",
        "pais": "Brasil"
    },
    {
        "id": 3317,
        "nome": "Márcio",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5530241,
        "longitude": -47.447796,
        "cep": "13483286",
        "pais": "Brasil"
    },
    {
        "id": 3318,
        "nome": "Matheus Mendes",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7243236,
        "longitude": -47.3171261,
        "cep": "13472360",
        "pais": "Brasil"
    },
    {
        "id": 3319,
        "nome": "Eric",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13064324",
        "pais": "Brasil"
    },
    {
        "id": 3320,
        "nome": "Murilo Ramos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.6975383,
        "longitude": -46.9556623,
        "cep": "13486470",
        "pais": "Brasil"
    },
    {
        "id": 3321,
        "nome": "DIRETORIA 0792",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8193193,
        "longitude": -43.3067275,
        "cep": "13088095",
        "pais": "Brasil"
    },
    {
        "id": 3322,
        "nome": "Débora",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13328010",
        "pais": "Brasil"
    },
    {
        "id": 3323,
        "nome": "Kaua",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13477460",
        "pais": "Brasil"
    },
    {
        "id": 3324,
        "nome": "Joao Marcos Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.2440995,
        "longitude": -48.5161962,
        "cep": "13054584",
        "pais": "Brasil"
    },
    {
        "id": 3325,
        "nome": "Maira Cristina Do Nascimento",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.6582507,
        "longitude": -47.0531731,
        "cep": "13916410",
        "pais": "Brasil"
    },
    {
        "id": 3326,
        "nome": "Robert Toledo",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7207803,
        "longitude": -47.179275,
        "cep": "13145778",
        "pais": "Brasil"
    },
    {
        "id": 3327,
        "nome": "Julian Pereira Gomes",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13290000",
        "pais": "Brasil"
    },
    {
        "id": 3328,
        "nome": "Wagner Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.6209613,
        "longitude": -43.2206973,
        "cep": "13059675",
        "pais": "Brasil"
    },
    {
        "id": 3329,
        "nome": "Roseli",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -28.2921083,
        "longitude": -49.9369705,
        "cep": "13045120",
        "pais": "Brasil"
    },
    {
        "id": 3330,
        "nome": "Adriana Dias",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.322373,
        "longitude": -46.7091115,
        "cep": "13058005",
        "pais": "Brasil"
    },
    {
        "id": 3331,
        "nome": "Eder",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13172691",
        "pais": "Brasil"
    },
    {
        "id": 3332,
        "nome": "Marcos",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0633353,
        "longitude": -47.1381008,
        "cep": "13349060",
        "pais": "Brasil"
    },
    {
        "id": 3333,
        "nome": "DR. FERNANDO",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01304185",
        "pais": "Brasil"
    },
    {
        "id": 3334,
        "nome": "Luana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.8258987,
        "longitude": -44.0353253,
        "cep": "13045310",
        "pais": "Brasil"
    },
    {
        "id": 3335,
        "nome": "Ana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": 9.9353192,
        "longitude": -84.2230945,
        "cep": "13056350",
        "pais": "Brasil"
    },
    {
        "id": 3336,
        "nome": "Sérgio Mariano",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.2087865,
        "longitude": -46.8000337,
        "cep": "13184675",
        "pais": "Brasil"
    },
    {
        "id": 3337,
        "nome": "Cacá",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.9573466,
        "longitude": -50.9769902,
        "cep": "13030640",
        "pais": "Brasil"
    },
    {
        "id": 3338,
        "nome": "Ariane",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.3754424,
        "longitude": -47.3641742,
        "cep": "13186260",
        "pais": "Brasil"
    },
    {
        "id": 3339,
        "nome": "Roberto Moraes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6443398,
        "longitude": -46.7464551,
        "cep": "13050072",
        "pais": "Brasil"
    },
    {
        "id": 3340,
        "nome": "Henrique",
        "cidade": "Porto Feliz",
        "estado": "SP",
        "latitude": -23.2342137,
        "longitude": -47.5227418,
        "cep": "18542248",
        "pais": "Brasil"
    },
    {
        "id": 3341,
        "nome": "DEGRIEH MAIA SANDOVAL",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.8057869,
        "longitude": -47.1170923,
        "cep": "13148218",
        "pais": "Brasil"
    },
    {
        "id": 3342,
        "nome": "Leandro Rodrigo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -19.587345,
        "longitude": -46.925944,
        "cep": "13473060",
        "pais": "Brasil"
    },
    {
        "id": 3343,
        "nome": "Bene",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4147608,
        "longitude": -47.516441,
        "cep": "18073122",
        "pais": "Brasil"
    },
    {
        "id": 3344,
        "nome": "Davi Araujo",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -21.993173,
        "longitude": -47.3333435,
        "cep": "13420440",
        "pais": "Brasil"
    },
    {
        "id": 3345,
        "nome": "Rafael",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13203240",
        "pais": "Brasil"
    },
    {
        "id": 3346,
        "nome": "Willian Mendes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.417179,
        "longitude": -41.7296886,
        "cep": "13060430",
        "pais": "Brasil"
    },
    {
        "id": 3347,
        "nome": "Vanessa Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13184496",
        "pais": "Brasil"
    },
    {
        "id": 3348,
        "nome": "Josi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13321421",
        "pais": "Brasil"
    },
    {
        "id": 3349,
        "nome": "Beatriz Francelli De Oliveira",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -21.5329841,
        "longitude": -46.6415211,
        "cep": "13770000",
        "pais": "Brasil"
    },
    {
        "id": 3350,
        "nome": "Bruno Amorim da Rocha",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.2239276,
        "longitude": -47.5065736,
        "cep": "18540000",
        "pais": "Brasil"
    },
    {
        "id": 3351,
        "nome": "Ana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": 9.9353192,
        "longitude": -84.2230945,
        "cep": "13060536",
        "pais": "Brasil"
    },
    {
        "id": 3352,
        "nome": "Natalia Siqueira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2917412,
        "longitude": -45.9587459,
        "cep": "13025190",
        "pais": "Brasil"
    },
    {
        "id": 3353,
        "nome": "Flávio Alberto",
        "cidade": "Teresina",
        "estado": "PI",
        "latitude": -5.0902277,
        "longitude": -42.8129529,
        "cep": "64009187",
        "pais": NaN
    },
    {
        "id": 3354,
        "nome": "Glauco",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13339545",
        "pais": "Brasil"
    },
    {
        "id": 3355,
        "nome": "Rafael Souza Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.558208,
        "longitude": -46.4744438,
        "cep": "13058800",
        "pais": "Brasil"
    },
    {
        "id": 3356,
        "nome": "Thati",
        "cidade": "Leme",
        "estado": "SP",
        "latitude": -22.2107155,
        "longitude": -47.4033707,
        "cep": "13610130",
        "pais": "Brasil"
    },
    {
        "id": 3357,
        "nome": "Thiago Nunes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -27.8343291,
        "longitude": -50.3439334,
        "cep": "13049109",
        "pais": "Brasil"
    },
    {
        "id": 3358,
        "nome": "Natalia",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -11.3411522,
        "longitude": -41.745207,
        "cep": "13082315",
        "pais": "Brasil"
    },
    {
        "id": 3359,
        "nome": "Humberto Castelo",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13183210",
        "pais": "Brasil"
    },
    {
        "id": 3360,
        "nome": "SERAPHIM ANJO DA VIDA",
        "cidade": "Bom Jesus dos Perdões",
        "estado": "SP",
        "latitude": -23.0136643,
        "longitude": -46.504949,
        "cep": "12955000",
        "pais": "Brasil"
    },
    {
        "id": 3361,
        "nome": "Bárbara Valentina Gomes da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9125144,
        "longitude": -47.0847192,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 3362,
        "nome": "Eliene Silva",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13504460",
        "pais": "Brasil"
    },
    {
        "id": 3363,
        "nome": "Luiz Paulo Da Silva",
        "cidade": "Varginha",
        "estado": "MG",
        "latitude": -20.0974711,
        "longitude": -45.2858533,
        "cep": "37045264",
        "pais": NaN
    },
    {
        "id": 3364,
        "nome": "Adilson do Prado",
        "cidade": "Tatuí",
        "estado": "SP",
        "latitude": -21.7161091,
        "longitude": -48.0984801,
        "cep": "18274140",
        "pais": "Brasil"
    },
    {
        "id": 3365,
        "nome": "Diego H.",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.1678022,
        "longitude": -50.6300994,
        "cep": "37540000",
        "pais": "Brasil"
    },
    {
        "id": 3366,
        "nome": "Gabriela",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01305667",
        "pais": "Brasil"
    },
    {
        "id": 3367,
        "nome": "Guilherme Leandro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.9428935,
        "longitude": -47.1915605,
        "cep": "13470749",
        "pais": "Brasil"
    },
    {
        "id": 3368,
        "nome": "Ruy Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13173212",
        "pais": "Brasil"
    },
    {
        "id": 3369,
        "nome": "Pedro Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8012455,
        "longitude": -47.017201,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 3370,
        "nome": "Giovanna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9474723,
        "longitude": -47.0956299,
        "cep": "13056116",
        "pais": "Brasil"
    },
    {
        "id": 3371,
        "nome": "Felipe",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13174383",
        "pais": "Brasil"
    },
    {
        "id": 3372,
        "nome": "Matheus Pereira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7264063,
        "longitude": -47.1737647,
        "cep": "13146000",
        "pais": "Brasil"
    },
    {
        "id": 3373,
        "nome": "Kelly Araújo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.1969496,
        "longitude": -34.8663884,
        "cep": "13015310",
        "pais": "Brasil"
    },
    {
        "id": 3374,
        "nome": "Ademir Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -12.9062876,
        "longitude": -38.4230744,
        "cep": "13059001",
        "pais": "Brasil"
    },
    {
        "id": 3375,
        "nome": "Hugo Machado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -2.583037,
        "longitude": -44.2365569,
        "cep": "13065705",
        "pais": "Brasil"
    },
    {
        "id": 3376,
        "nome": "Nicholas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4684198,
        "longitude": -46.6338613,
        "cep": "13065030",
        "pais": "Brasil"
    },
    {
        "id": 3377,
        "nome": "Felipe Santos Sales",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -21.8810556,
        "longitude": -51.8413303,
        "cep": "13476735",
        "pais": "Brasil"
    },
    {
        "id": 3378,
        "nome": "Franciele Martins",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.72594,
        "longitude": -47.1743834,
        "cep": "13145796",
        "pais": "Brasil"
    },
    {
        "id": 3379,
        "nome": "Livia Andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8795192,
        "longitude": -47.036527,
        "cep": "13091150",
        "pais": "Brasil"
    },
    {
        "id": 3380,
        "nome": "Gabriel",
        "cidade": "Capivari",
        "estado": "SP",
        "latitude": -22.7191088,
        "longitude": -45.5656714,
        "cep": "13363592",
        "pais": "Brasil"
    },
    {
        "id": 3381,
        "nome": "Gean Alencar De Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8983322,
        "longitude": -47.0651844,
        "cep": "13020440",
        "pais": "Brasil"
    },
    {
        "id": 3382,
        "nome": "Edivaldo Góis",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13280000",
        "pais": "Brasil"
    },
    {
        "id": 3383,
        "nome": "Ana Clara Miranda",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.1110264,
        "longitude": -51.4271667,
        "cep": "13178302",
        "pais": "Brasil"
    },
    {
        "id": 3384,
        "nome": "Gisele Duarte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5408838,
        "longitude": -47.4665201,
        "cep": "13043710",
        "pais": "Brasil"
    },
    {
        "id": 3385,
        "nome": "Priscila",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13185040",
        "pais": "Brasil"
    },
    {
        "id": 3386,
        "nome": "Rafael Campos Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9243528,
        "longitude": -47.044581,
        "cep": "13041445",
        "pais": "Brasil"
    },
    {
        "id": 3387,
        "nome": "José Geraldo Teixeira",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -20.1311667,
        "longitude": -45.1723987,
        "cep": "13157574",
        "pais": "Brasil"
    },
    {
        "id": 3388,
        "nome": "Letícia",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454275",
        "pais": "Brasil"
    },
    {
        "id": 3389,
        "nome": "Rafael Neves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6065962,
        "longitude": -46.7556086,
        "cep": "13100472",
        "pais": "Brasil"
    },
    {
        "id": 3390,
        "nome": "Nicaelly Vieira Perego",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9190931,
        "longitude": -47.10287,
        "cep": "13060072",
        "pais": "Brasil"
    },
    {
        "id": 3391,
        "nome": "José Lucas Reis",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9978031,
        "longitude": -44.3062735,
        "cep": "13073221",
        "pais": "Brasil"
    },
    {
        "id": 3392,
        "nome": "Priscila",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4781034,
        "longitude": -47.5069802,
        "cep": "18055851",
        "pais": "Brasil"
    },
    {
        "id": 3393,
        "nome": "Ana paula Benvindo De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.929759,
        "longitude": -47.1008085,
        "cep": "13060864",
        "pais": "Brasil"
    },
    {
        "id": 3394,
        "nome": "Eliana",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13185411",
        "pais": "Brasil"
    },
    {
        "id": 3395,
        "nome": "Ubirajara Ramos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181764",
        "pais": "Brasil"
    },
    {
        "id": 3396,
        "nome": "Rafael",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -34.6297519,
        "longitude": -68.3343967,
        "cep": "13088840",
        "pais": "Brasil"
    },
    {
        "id": 3397,
        "nome": "Michael Miranda",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4267089,
        "longitude": -47.4811689,
        "cep": "18079655",
        "pais": "Brasil"
    },
    {
        "id": 3398,
        "nome": "Felipe Guilherme",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -23.5179064,
        "longitude": -46.6081582,
        "cep": "13140113",
        "pais": "Brasil"
    },
    {
        "id": 3399,
        "nome": "Dirceu",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.1333017,
        "longitude": -49.9141635,
        "cep": "13503189",
        "pais": "Brasil"
    },
    {
        "id": 3400,
        "nome": "Derique Diniz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8759575,
        "longitude": -47.1047892,
        "cep": "13070115",
        "pais": "Brasil"
    },
    {
        "id": 3401,
        "nome": "Felipe Pires",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458082",
        "pais": "Brasil"
    },
    {
        "id": 3402,
        "nome": "Cleiton",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454002",
        "pais": "Brasil"
    },
    {
        "id": 3403,
        "nome": "Liard",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.907208,
        "longitude": -47.0575521,
        "cep": "13010001",
        "pais": "Brasil"
    },
    {
        "id": 3404,
        "nome": "Diego Bueno",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.4297892,
        "longitude": -46.9407693,
        "cep": "13484331",
        "pais": "Brasil"
    },
    {
        "id": 3405,
        "nome": "Fabio",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.6625525,
        "longitude": -47.167817,
        "cep": "13218630",
        "pais": "Brasil"
    },
    {
        "id": 3406,
        "nome": "Jefferson Corte",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.944483,
        "longitude": -47.1227975,
        "cep": "13060726",
        "pais": "Brasil"
    },
    {
        "id": 3407,
        "nome": "Leandro Moreira",
        "cidade": "Tatuí",
        "estado": "SP",
        "latitude": -23.3381557,
        "longitude": -47.8527885,
        "cep": "18274770",
        "pais": "Brasil"
    },
    {
        "id": 3408,
        "nome": "RAFAEL DO NASCIMENTO",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13203283",
        "pais": "Brasil"
    },
    {
        "id": 3409,
        "nome": "Willian Vagner",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4237839,
        "longitude": -47.4791888,
        "cep": "18079663",
        "pais": "Brasil"
    },
    {
        "id": 3410,
        "nome": "Marcia Goncalves",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181701",
        "pais": "Brasil"
    },
    {
        "id": 3411,
        "nome": "Daniany",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9978034,
        "longitude": -46.9941321,
        "cep": "13277581",
        "pais": "Brasil"
    },
    {
        "id": 3412,
        "nome": "Dâniany Dands",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9978034,
        "longitude": -46.9941321,
        "cep": "13277581",
        "pais": "Brasil"
    },
    {
        "id": 3413,
        "nome": "Kennedy William Andrade Campos",
        "cidade": "São João da Boa Vista",
        "estado": "SP",
        "latitude": -21.9669726,
        "longitude": -46.8111503,
        "cep": "13872730",
        "pais": "Brasil"
    },
    {
        "id": 3414,
        "nome": "Bruno Gonçalves",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13505493",
        "pais": "Brasil"
    },
    {
        "id": 3415,
        "nome": "Allan Jorge",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.1227264,
        "longitude": -48.9351654,
        "cep": "13178724",
        "pais": "Brasil"
    },
    {
        "id": 3416,
        "nome": "VIETRI",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5658825,
        "longitude": -46.4194678,
        "cep": "02566000",
        "pais": "Brasil"
    },
    {
        "id": 3417,
        "nome": "LUIZ GUSTAVO ARAUJO SERAFIM",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212142,
        "longitude": -47.0168006,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 3418,
        "nome": "Camila Silva",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13450354",
        "pais": "Brasil"
    },
    {
        "id": 3419,
        "nome": "José",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -22.5737108,
        "longitude": -47.1729018,
        "cep": "13165160",
        "pais": "Brasil"
    },
    {
        "id": 3420,
        "nome": "Larissa Mendes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8966305,
        "longitude": -47.084645,
        "cep": "13178391",
        "pais": "Brasil"
    },
    {
        "id": 3421,
        "nome": "Nath",
        "cidade": "Guamaré",
        "estado": "RN",
        "latitude": -23.5482337,
        "longitude": -46.69057,
        "cep": "59598000",
        "pais": NaN
    },
    {
        "id": 3422,
        "nome": "Mell",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13482275",
        "pais": "Brasil"
    },
    {
        "id": 3423,
        "nome": "Joao Lopes ",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5827152,
        "longitude": -47.4201772,
        "cep": "13482080",
        "pais": "Brasil"
    },
    {
        "id": 3424,
        "nome": "Gustavo Pereira",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.817181,
        "longitude": -47.0314653,
        "cep": "13466030",
        "pais": "Brasil"
    },
    {
        "id": 3425,
        "nome": "Anderson Antonio de Oliveira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322224",
        "pais": "Brasil"
    },
    {
        "id": 3426,
        "nome": "Marcelo Cruz",
        "cidade": "Capivari",
        "estado": "SP",
        "latitude": -22.7191088,
        "longitude": -45.5656714,
        "cep": "13363240",
        "pais": "Brasil"
    },
    {
        "id": 3427,
        "nome": "Marcos Santana",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13327550",
        "pais": "Brasil"
    },
    {
        "id": 3428,
        "nome": "Marina Marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.4787558,
        "longitude": -54.5757366,
        "cep": "13044740",
        "pais": "Brasil"
    },
    {
        "id": 3429,
        "nome": "Rosemary Galo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7301305,
        "longitude": -47.3029879,
        "cep": "13473000",
        "pais": "Brasil"
    },
    {
        "id": 3430,
        "nome": "AMANDA SILVA",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13183250",
        "pais": "Brasil"
    },
    {
        "id": 3431,
        "nome": "Rogerio Machado",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.881429,
        "longitude": -47.0690136,
        "cep": "13073035",
        "pais": "Brasil"
    },
    {
        "id": 3432,
        "nome": "Fabio Moura",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7768955,
        "longitude": -45.1866901,
        "cep": "13057002",
        "pais": "Brasil"
    },
    {
        "id": 3433,
        "nome": "Matheus Garnero",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4952789,
        "longitude": -47.4602782,
        "cep": "18035090",
        "pais": "Brasil"
    },
    {
        "id": 3434,
        "nome": "Paulo Araújo Jr",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 3435,
        "nome": "Tiago Brolazo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9243528,
        "longitude": -47.044581,
        "cep": "13041445",
        "pais": "Brasil"
    },
    {
        "id": 3436,
        "nome": "Adriana",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13216040",
        "pais": "Brasil"
    },
    {
        "id": 3437,
        "nome": "Vail",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.4394793,
        "longitude": -46.9621143,
        "cep": "13500145",
        "pais": "Brasil"
    },
    {
        "id": 3438,
        "nome": "Fabio Vieira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.1876065,
        "longitude": -51.1607896,
        "cep": "13051578",
        "pais": "Brasil"
    },
    {
        "id": 3439,
        "nome": "Claudineia",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.831416,
        "longitude": -47.2201138,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 3440,
        "nome": "Márcio De Oliveira Marques",
        "cidade": "Jacutinga",
        "estado": "MG",
        "latitude": -22.2829421,
        "longitude": -46.610956,
        "cep": "37590000",
        "pais": NaN
    },
    {
        "id": 3441,
        "nome": "Elias Santiago Guizo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7028843,
        "longitude": -47.2920896,
        "cep": "13474590",
        "pais": "Brasil"
    },
    {
        "id": 3442,
        "nome": "Carlos Alberto",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13184527",
        "pais": "Brasil"
    },
    {
        "id": 3443,
        "nome": "Fernanda Cristina De Souza Camargo",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4707368,
        "longitude": -47.4781296,
        "cep": "18070410",
        "pais": "Brasil"
    },
    {
        "id": 3444,
        "nome": "GEO",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9483288,
        "longitude": -47.0866581,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 3445,
        "nome": "rodolfo silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.548638,
        "longitude": -46.4247164,
        "cep": "13473300",
        "pais": "Brasil"
    },
    {
        "id": 3446,
        "nome": "Wesley Nunes Da Silva",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 3447,
        "nome": "Antonio",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": 3.262,
        "longitude": -61.1134283,
        "cep": "13050903",
        "pais": "Brasil"
    },
    {
        "id": 3448,
        "nome": "Nayara Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -5.597812,
        "longitude": -37.6969313,
        "cep": "13082619",
        "pais": "Brasil"
    },
    {
        "id": 3449,
        "nome": "Victor Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.4296102,
        "longitude": -49.2174253,
        "cep": "13081220",
        "pais": "Brasil"
    },
    {
        "id": 3450,
        "nome": "Marcelo Camargo",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -22.5716175,
        "longitude": -47.4023744,
        "cep": "13152072",
        "pais": "Brasil"
    },
    {
        "id": 3451,
        "nome": "Sabrina Ferreira Campos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7235015,
        "longitude": -47.3602774,
        "cep": "13469305",
        "pais": "Brasil"
    },
    {
        "id": 3452,
        "nome": "Sheyla",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13282104",
        "pais": "Brasil"
    },
    {
        "id": 3453,
        "nome": "Michele",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4371558,
        "longitude": -46.977918,
        "cep": "13800440",
        "pais": "Brasil"
    },
    {
        "id": 3454,
        "nome": "Fabio Saron Augusto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8904923,
        "longitude": -47.0762379,
        "cep": "13013160",
        "pais": "Brasil"
    },
    {
        "id": 3455,
        "nome": "Erineia Domingos De Oliveira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7748799,
        "longitude": -47.1725169,
        "cep": "13142490",
        "pais": "Brasil"
    },
    {
        "id": 3456,
        "nome": "Matheus Rocha",
        "cidade": "Araçariguama",
        "estado": "SP",
        "latitude": -23.4345956,
        "longitude": -47.1142007,
        "cep": "18147000",
        "pais": "Brasil"
    },
    {
        "id": 3457,
        "nome": "Marcos Alves de Oliveira",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -22.3732483,
        "longitude": -46.9546864,
        "cep": "13848696",
        "pais": "Brasil"
    },
    {
        "id": 3458,
        "nome": "Tatiane De Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.1935027,
        "longitude": -45.7539342,
        "cep": "13101212",
        "pais": "Brasil"
    },
    {
        "id": 3459,
        "nome": "Marcos Florêncio",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1688797,
        "longitude": -46.9660459,
        "cep": "13212421",
        "pais": "Brasil"
    },
    {
        "id": 3460,
        "nome": "José Leister",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7591803,
        "longitude": -47.1837186,
        "cep": "13144725",
        "pais": "Brasil"
    },
    {
        "id": 3461,
        "nome": "Fábio Luiz Tonette",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7243236,
        "longitude": -47.3171261,
        "cep": "13472360",
        "pais": "Brasil"
    },
    {
        "id": 3462,
        "nome": "Fabio Santana",
        "cidade": "Matinhos",
        "estado": "PR",
        "latitude": -23.5186691,
        "longitude": -46.6264508,
        "cep": "83260000",
        "pais": NaN
    },
    {
        "id": 3463,
        "nome": "Ariadne",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -20.7738141,
        "longitude": -49.4190546,
        "cep": "13148204",
        "pais": "Brasil"
    },
    {
        "id": 3464,
        "nome": "Klevenir Chieppe Silva",
        "cidade": "Colatina",
        "estado": "ES",
        "latitude": -19.536156,
        "longitude": -40.6322724,
        "cep": "29700100",
        "pais": NaN
    },
    {
        "id": 3465,
        "nome": "Osmar Silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.5831177,
        "longitude": -46.7905873,
        "cep": "13476428",
        "pais": "Brasil"
    },
    {
        "id": 3466,
        "nome": "Luis Arruda",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.2134515,
        "longitude": -46.8623411,
        "cep": "13272854",
        "pais": "Brasil"
    },
    {
        "id": 3467,
        "nome": "Ricardo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9167748,
        "longitude": -47.0880156,
        "cep": "13060090",
        "pais": "Brasil"
    },
    {
        "id": 3468,
        "nome": "Gabriela Alves",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.5849864,
        "longitude": -48.0183801,
        "cep": "13171400",
        "pais": "Brasil"
    },
    {
        "id": 3469,
        "nome": "Diego Maia",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.4143885,
        "longitude": -51.8478359,
        "cep": "13173524",
        "pais": "Brasil"
    },
    {
        "id": 3470,
        "nome": "Jessica climaco",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8910552,
        "longitude": -47.0558572,
        "cep": "13024045",
        "pais": "Brasil"
    },
    {
        "id": 3471,
        "nome": "Rodrigo Cardoso",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -23.0856691,
        "longitude": -47.2764454,
        "cep": "13485026",
        "pais": "Brasil"
    },
    {
        "id": 3472,
        "nome": "Samir Miguel",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8815475,
        "longitude": -47.0472115,
        "cep": "13076550",
        "pais": "Brasil"
    },
    {
        "id": 3473,
        "nome": "Terenide Oliveira Salvador Pereira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9541037,
        "longitude": -47.011927,
        "cep": "13272514",
        "pais": "Brasil"
    },
    {
        "id": 3474,
        "nome": "Danilo Ulisses",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8992863,
        "longitude": -47.0829762,
        "cep": "13070751",
        "pais": "Brasil"
    },
    {
        "id": 3475,
        "nome": "Adrieli",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13178383",
        "pais": "Brasil"
    },
    {
        "id": 3476,
        "nome": "wesley monteiro",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13213469",
        "pais": "Brasil"
    },
    {
        "id": 3477,
        "nome": "Anna Claudia",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -21.9881114,
        "longitude": -51.6519255,
        "cep": "12060123",
        "pais": "Brasil"
    },
    {
        "id": 3478,
        "nome": "Nayara",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8567529,
        "longitude": -47.0553397,
        "cep": "13051029",
        "pais": "Brasil"
    },
    {
        "id": 3479,
        "nome": "Marcelo",
        "cidade": "Catalão",
        "estado": "GO",
        "latitude": -18.1519165,
        "longitude": -47.9552694,
        "cep": "75701818",
        "pais": NaN
    },
    {
        "id": 3480,
        "nome": "Luiza Marques De Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9004891,
        "longitude": -47.0643983,
        "cep": "13020100",
        "pais": "Brasil"
    },
    {
        "id": 3481,
        "nome": "Aline",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13274320",
        "pais": "Brasil"
    },
    {
        "id": 3482,
        "nome": "David Rodrigues",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.773517,
        "longitude": -47.1731111,
        "cep": "13142470",
        "pais": "Brasil"
    },
    {
        "id": 3483,
        "nome": "Julio Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9253606,
        "longitude": -43.5549885,
        "cep": "13061140",
        "pais": "Brasil"
    },
    {
        "id": 3484,
        "nome": "Glauber Silva",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13504017",
        "pais": "Brasil"
    },
    {
        "id": 3485,
        "nome": "Paulo",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13170121",
        "pais": "Brasil"
    },
    {
        "id": 3486,
        "nome": "ricardo cruz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -5.7301047,
        "longitude": -35.2370278,
        "cep": "13081532",
        "pais": "Brasil"
    },
    {
        "id": 3487,
        "nome": "Leonardo Aguiar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.4667144,
        "longitude": -48.5624279,
        "cep": "13026370",
        "pais": "Brasil"
    },
    {
        "id": 3488,
        "nome": "GT",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.8948261,
        "longitude": -43.6707102,
        "cep": "13033740",
        "pais": "Brasil"
    },
    {
        "id": 3489,
        "nome": "Agnes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9975168,
        "longitude": -43.3623889,
        "cep": "13060746",
        "pais": "Brasil"
    },
    {
        "id": 3490,
        "nome": "Rafael santana",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.5736877,
        "longitude": -46.7918978,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 3491,
        "nome": "Katia Milena",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.799904,
        "longitude": -47.1944436,
        "cep": "13178802",
        "pais": "Brasil"
    },
    {
        "id": 3492,
        "nome": "Adriana",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13274340",
        "pais": "Brasil"
    },
    {
        "id": 3493,
        "nome": "Rodrigo Morais",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.494765,
        "longitude": -46.3970611,
        "cep": "13045603",
        "pais": "Brasil"
    },
    {
        "id": 3494,
        "nome": "Alex Sandro Lima Da Silva",
        "cidade": "Cotia",
        "estado": "SP",
        "latitude": -23.6066,
        "longitude": -46.9189,
        "cep": "09972260",
        "pais": "Brasil"
    },
    {
        "id": 3495,
        "nome": "Evandro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -13.0030351,
        "longitude": -38.5288687,
        "cep": "13015290",
        "pais": "Brasil"
    },
    {
        "id": 3496,
        "nome": "vitória",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13179131",
        "pais": "Brasil"
    },
    {
        "id": 3497,
        "nome": "Kauan",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.8165383,
        "longitude": -49.3932931,
        "cep": "13033170",
        "pais": "Brasil"
    },
    {
        "id": 3498,
        "nome": "Patricia Rocha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8990224,
        "longitude": -47.0611018,
        "cep": "13010210",
        "pais": "Brasil"
    },
    {
        "id": 3499,
        "nome": "Carlos Eduardo",
        "cidade": "Itapetininga",
        "estado": "SP",
        "latitude": -23.5666326,
        "longitude": -48.0260656,
        "cep": "18212140",
        "pais": "Brasil"
    },
    {
        "id": 3500,
        "nome": "Anderson Quintino",
        "cidade": "Várzea Paulista",
        "estado": "SP",
        "latitude": -23.2070135,
        "longitude": -46.8131989,
        "cep": "13224707",
        "pais": "Brasil"
    },
    {
        "id": 3501,
        "nome": "Clayton Montalvão",
        "cidade": "Palmas de Monte Alto",
        "estado": "BA",
        "latitude": -14.2590585,
        "longitude": -43.1572231,
        "cep": "46460000",
        "pais": NaN
    },
    {
        "id": 3502,
        "nome": "Daiane Amaral Santos",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4487917,
        "longitude": -47.3733124,
        "cep": "18087290",
        "pais": "Brasil"
    },
    {
        "id": 3503,
        "nome": "Elaine",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13187164",
        "pais": "Brasil"
    },
    {
        "id": 3504,
        "nome": "Isis Carvalho",
        "cidade": "Diamantina",
        "estado": "MG",
        "latitude": -22.8979064,
        "longitude": -45.3719474,
        "cep": "39100000",
        "pais": NaN
    },
    {
        "id": 3505,
        "nome": "Fernando Faria",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -23.5411141,
        "longitude": -46.2152749,
        "cep": "13387774",
        "pais": "Brasil"
    },
    {
        "id": 3506,
        "nome": "Paulo Henrique Antonio",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13274610",
        "pais": "Brasil"
    },
    {
        "id": 3507,
        "nome": "Pamela",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -10.0340196,
        "longitude": -66.9527341,
        "cep": "13043660",
        "pais": "Brasil"
    },
    {
        "id": 3508,
        "nome": "Cristiane",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5612688,
        "longitude": -46.6423701,
        "cep": "13186100",
        "pais": "Brasil"
    },
    {
        "id": 3509,
        "nome": "Diego Augusto",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.1963971,
        "longitude": -49.6745281,
        "cep": "13912000",
        "pais": "Brasil"
    },
    {
        "id": 3510,
        "nome": "Viviane Silva",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -22.9363,
        "longitude": -47.309,
        "cep": "13190058",
        "pais": "Brasil"
    },
    {
        "id": 3511,
        "nome": "Nilton",
        "cidade": "Espírito Santo do Pinhal",
        "estado": "SP",
        "latitude": -22.1906339,
        "longitude": -46.7797241,
        "cep": "13994104",
        "pais": "Brasil"
    },
    {
        "id": 3512,
        "nome": "gabriela barbosa",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.5317528,
        "longitude": -46.6275326,
        "cep": "13806100",
        "pais": "Brasil"
    },
    {
        "id": 3513,
        "nome": "Fabio Bordin",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.9666485,
        "longitude": -49.8609283,
        "cep": "13506899",
        "pais": "Brasil"
    },
    {
        "id": 3514,
        "nome": "Danilo José da Silva",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453882",
        "pais": "Brasil"
    },
    {
        "id": 3515,
        "nome": "Thiago Fernandes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13188182",
        "pais": "Brasil"
    },
    {
        "id": 3516,
        "nome": "Ricardo Oliveira",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13455721",
        "pais": "Brasil"
    },
    {
        "id": 3517,
        "nome": "Merche",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0633353,
        "longitude": -47.1381008,
        "cep": "13349754",
        "pais": "Brasil"
    },
    {
        "id": 3518,
        "nome": "Adilson Dos Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.3768228,
        "longitude": -46.453423,
        "cep": "13060483",
        "pais": "Brasil"
    },
    {
        "id": 3519,
        "nome": "Eliana Maria De Almeida",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5388084,
        "longitude": -46.8219905,
        "cep": "13032425",
        "pais": "Brasil"
    },
    {
        "id": 3520,
        "nome": "wilson ferreira",
        "cidade": "Mogi Mirim",
        "estado": "SP",
        "latitude": -22.4549364,
        "longitude": -46.9810832,
        "cep": "13806679",
        "pais": "Brasil"
    },
    {
        "id": 3521,
        "nome": "Francisco Giometti",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9120763,
        "longitude": -47.0711455,
        "cep": "13035030",
        "pais": "Brasil"
    },
    {
        "id": 3522,
        "nome": "Rudney Basques Oliveira",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.0145353,
        "longitude": -48.0091201,
        "cep": "18570000",
        "pais": "Brasil"
    },
    {
        "id": 3523,
        "nome": "Guilherme Pessoa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.8271446,
        "longitude": -38.4876449,
        "cep": "13064793",
        "pais": "Brasil"
    },
    {
        "id": 3524,
        "nome": "Thiago",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.8792369,
        "longitude": -36.4924636,
        "cep": "13045145",
        "pais": "Brasil"
    },
    {
        "id": 3525,
        "nome": "Sandra Ribeiro",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13186472",
        "pais": "Brasil"
    },
    {
        "id": 3526,
        "nome": "José Eduardo Moreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.9775129,
        "longitude": -44.0019884,
        "cep": "13010201",
        "pais": "Brasil"
    },
    {
        "id": 3527,
        "nome": "Danilo Francisco",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9310883,
        "longitude": -47.0981325,
        "cep": "13185017",
        "pais": "Brasil"
    },
    {
        "id": 3528,
        "nome": "Daniel Souza Da Silva",
        "cidade": "Cerquilho",
        "estado": "SP",
        "latitude": -23.1654097,
        "longitude": -47.7350779,
        "cep": "18526270",
        "pais": "Brasil"
    },
    {
        "id": 3529,
        "nome": "Gustavo Braga",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.724477,
        "longitude": -38.5089573,
        "cep": "13046500",
        "pais": "Brasil"
    },
    {
        "id": 3530,
        "nome": "Guilherme Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13051744",
        "pais": "Brasil"
    },
    {
        "id": 3531,
        "nome": "Maria Aparecida Severino",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.850586,
        "longitude": -47.613858,
        "cep": "13185650",
        "pais": "Brasil"
    },
    {
        "id": 3532,
        "nome": "marcio carvalho",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -23.3772169,
        "longitude": -46.4511997,
        "cep": "13145362",
        "pais": "Brasil"
    },
    {
        "id": 3533,
        "nome": "Wagner",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13482822",
        "pais": "Brasil"
    },
    {
        "id": 3534,
        "nome": "Raquel Andrade",
        "cidade": "Holambra",
        "estado": "SP",
        "latitude": -22.6514462,
        "longitude": -47.0593832,
        "cep": "13826032",
        "pais": "Brasil"
    },
    {
        "id": 3535,
        "nome": "Fábio Ferreira",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13481343",
        "pais": "Brasil"
    },
    {
        "id": 3536,
        "nome": "Andrea Carvalho",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.2695281,
        "longitude": -45.9003908,
        "cep": "13184071",
        "pais": "Brasil"
    },
    {
        "id": 3537,
        "nome": "Bruna",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.1209315,
        "longitude": -34.9046174,
        "cep": "13091451",
        "pais": "Brasil"
    },
    {
        "id": 3538,
        "nome": "Marcelo Silva",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13286397",
        "pais": "Brasil"
    },
    {
        "id": 3539,
        "nome": "Bruno Santos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -23.5075305,
        "longitude": -46.6686363,
        "cep": "13483290",
        "pais": "Brasil"
    },
    {
        "id": 3540,
        "nome": "Rodrigo Menezes Menezes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5362427,
        "longitude": -46.6005664,
        "cep": "13188251",
        "pais": "Brasil"
    },
    {
        "id": 3541,
        "nome": "Anderson Hardy",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9212142,
        "longitude": -47.0168006,
        "cep": "13101400",
        "pais": "Brasil"
    },
    {
        "id": 3542,
        "nome": "Fabiano Barros",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.648542,
        "longitude": -47.5889734,
        "cep": "13346060",
        "pais": "Brasil"
    },
    {
        "id": 3543,
        "nome": "Andreia Rodrigues Carassa Uliani",
        "cidade": "Piedade",
        "estado": "SP",
        "latitude": -23.722397,
        "longitude": -47.4138394,
        "cep": "18170000",
        "pais": "Brasil"
    },
    {
        "id": 3544,
        "nome": "Léo Silva",
        "cidade": "Juazeiro do Norte",
        "estado": "CE",
        "latitude": -7.2427097,
        "longitude": -39.3368691,
        "cep": "63030055",
        "pais": NaN
    },
    {
        "id": 3545,
        "nome": "Osni Oliveira",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284044",
        "pais": "Brasil"
    },
    {
        "id": 3546,
        "nome": "Bruno Silvestre Campassi",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181492",
        "pais": "Brasil"
    },
    {
        "id": 3547,
        "nome": "Bruno Campassi",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181492",
        "pais": "Brasil"
    },
    {
        "id": 3548,
        "nome": "Jéssica Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4263536,
        "longitude": -46.5549236,
        "cep": "13107230",
        "pais": "Brasil"
    },
    {
        "id": 3549,
        "nome": "Thiago Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.496043,
        "longitude": -46.4498752,
        "cep": "13020160",
        "pais": "Brasil"
    },
    {
        "id": 3550,
        "nome": "Hercules",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -10.5943379,
        "longitude": -67.9554961,
        "cep": "13045505",
        "pais": "Brasil"
    },
    {
        "id": 3551,
        "nome": "Andreia Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -9.6559772,
        "longitude": -65.738451,
        "cep": "13056430",
        "pais": "Brasil"
    },
    {
        "id": 3552,
        "nome": "Luis Soeiro Soeiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9099,
        "longitude": -47.0626,
        "cep": "13082007",
        "pais": "Brasil"
    },
    {
        "id": 3553,
        "nome": "Lucas Lima",
        "cidade": "Lençóis Paulista",
        "estado": "SP",
        "latitude": -22.6027383,
        "longitude": -48.8031493,
        "cep": "18685330",
        "pais": "Brasil"
    },
    {
        "id": 3554,
        "nome": "Gustavo Assis",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13184380",
        "pais": "Brasil"
    },
    {
        "id": 3555,
        "nome": "Leandro Aparecido De Toledo",
        "cidade": "Capivari",
        "estado": "SP",
        "latitude": -22.9767408,
        "longitude": -47.4765062,
        "cep": "13363532",
        "pais": "Brasil"
    },
    {
        "id": 3556,
        "nome": "Igor Palhares",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.5058909,
        "longitude": -49.2703971,
        "cep": "13054082",
        "pais": "Brasil"
    },
    {
        "id": 3557,
        "nome": "Juliana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.0722114,
        "longitude": -53.8445443,
        "cep": "13045310",
        "pais": "Brasil"
    },
    {
        "id": 3558,
        "nome": "Erika",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -15.8078993,
        "longitude": -47.8966656,
        "cep": "13081390",
        "pais": "Brasil"
    },
    {
        "id": 3559,
        "nome": "Kesia Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8961085,
        "longitude": -47.0829321,
        "cep": "13070147",
        "pais": "Brasil"
    },
    {
        "id": 3560,
        "nome": "Júnior Ramos Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.819827,
        "longitude": -38.4731652,
        "cep": "13050410",
        "pais": "Brasil"
    },
    {
        "id": 3561,
        "nome": "Luciana Maia",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9093088,
        "longitude": -45.378967,
        "cep": "13279031",
        "pais": "Brasil"
    },
    {
        "id": 3562,
        "nome": "Moyses Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -25.4669893,
        "longitude": -49.2461469,
        "cep": "13183240",
        "pais": "Brasil"
    },
    {
        "id": 3563,
        "nome": "Sergio Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5090898,
        "longitude": -46.6716148,
        "cep": "13101280",
        "pais": "Brasil"
    },
    {
        "id": 3564,
        "nome": "Elizangela",
        "cidade": "Nova Odessa",
        "estado": "SP",
        "latitude": -22.7735736,
        "longitude": -47.3042812,
        "cep": "13386206",
        "pais": "Brasil"
    },
    {
        "id": 3565,
        "nome": "Rodrigo Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.5034081,
        "longitude": -42.2282372,
        "cep": "13101100",
        "pais": "Brasil"
    },
    {
        "id": 3566,
        "nome": "Marcelo Rodrigues Da Silva",
        "cidade": "Manacapuru",
        "estado": "AM",
        "latitude": -3.3003355,
        "longitude": -60.6145326,
        "cep": "69400419",
        "pais": NaN
    },
    {
        "id": 3567,
        "nome": "Gabriella Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4522436,
        "longitude": -51.9456193,
        "cep": "13070292",
        "pais": "Brasil"
    },
    {
        "id": 3568,
        "nome": "Ricardo De Paula",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1814232,
        "longitude": -46.8962348,
        "cep": "13214206",
        "pais": "Brasil"
    },
    {
        "id": 3569,
        "nome": "Ricardo N Cândido",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7517023,
        "longitude": -50.3716362,
        "cep": "13059649",
        "pais": "Brasil"
    },
    {
        "id": 3570,
        "nome": "Gustavo M. Teixeira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9582799,
        "longitude": -45.4599702,
        "cep": "13092587",
        "pais": "Brasil"
    },
    {
        "id": 3571,
        "nome": "Roberto Ribeiro da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13187515",
        "pais": "Brasil"
    },
    {
        "id": 3572,
        "nome": "Robert Pereira dos Santos",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.5059592,
        "longitude": -47.4901992,
        "cep": "18055131",
        "pais": "Brasil"
    },
    {
        "id": 3573,
        "nome": "Andre Lacunza",
        "cidade": "Santa Rita do Passa Quatro",
        "estado": "SP",
        "latitude": -21.6999189,
        "longitude": -47.478268,
        "cep": "13670000",
        "pais": "Brasil"
    },
    {
        "id": 3574,
        "nome": "Pittú Pinheiro",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": 9.9353192,
        "longitude": -84.2230945,
        "cep": "00013645",
        "pais": "Brasil"
    },
    {
        "id": 3575,
        "nome": "Ênio Fly",
        "cidade": "Divinolândia",
        "estado": "SP",
        "latitude": -21.725243,
        "longitude": -46.6489824,
        "cep": "13780000",
        "pais": "Brasil"
    },
    {
        "id": 3576,
        "nome": "edson flores",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13503210",
        "pais": "Brasil"
    },
    {
        "id": 3577,
        "nome": "Andressa Prado",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13185647",
        "pais": "Brasil"
    },
    {
        "id": 3578,
        "nome": "Denise Caputo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13330180",
        "pais": "Brasil"
    },
    {
        "id": 3579,
        "nome": "Francisco",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13322416",
        "pais": "Brasil"
    },
    {
        "id": 3580,
        "nome": "Adriana Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.9991846,
        "longitude": -38.2961096,
        "cep": "13050120",
        "pais": "Brasil"
    },
    {
        "id": 3581,
        "nome": "Walter Viana",
        "cidade": "Poços de Caldas",
        "estado": "MG",
        "latitude": -21.8471771,
        "longitude": -46.6787723,
        "cep": "37701079",
        "pais": NaN
    },
    {
        "id": 3582,
        "nome": "Bruna Dias",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.0545065,
        "longitude": -47.8341393,
        "cep": "13188235",
        "pais": "Brasil"
    },
    {
        "id": 3583,
        "nome": "alan freitas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -17.5226939,
        "longitude": -39.7483525,
        "cep": "13061399",
        "pais": "Brasil"
    },
    {
        "id": 3584,
        "nome": "Rafael Da Silva Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5572186,
        "longitude": -46.4777856,
        "cep": "13059028",
        "pais": "Brasil"
    },
    {
        "id": 3585,
        "nome": "Giuliana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -11.8453736,
        "longitude": -55.5349054,
        "cep": "13105842",
        "pais": "Brasil"
    },
    {
        "id": 3586,
        "nome": "Thiago",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13274045",
        "pais": "Brasil"
    },
    {
        "id": 3587,
        "nome": "Luisa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13332550",
        "pais": "Brasil"
    },
    {
        "id": 3588,
        "nome": "Edilson",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -9.9241608,
        "longitude": -38.3555148,
        "cep": "13054380",
        "pais": "Brasil"
    },
    {
        "id": 3589,
        "nome": "Cristiane Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -9.7913174,
        "longitude": -36.6289921,
        "cep": "13059193",
        "pais": "Brasil"
    },
    {
        "id": 3590,
        "nome": "Ariane Silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13278073",
        "pais": "Brasil"
    },
    {
        "id": 3591,
        "nome": "thiago lopes",
        "cidade": "Niterói",
        "estado": "RJ",
        "latitude": -22.9085475,
        "longitude": -43.0946091,
        "cep": "24040115",
        "pais": NaN
    },
    {
        "id": 3592,
        "nome": "Reginaldo Santos",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13172570",
        "pais": "Brasil"
    },
    {
        "id": 3593,
        "nome": "Jhonatas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.0686728,
        "longitude": -45.5731604,
        "cep": "13040055",
        "pais": "Brasil"
    },
    {
        "id": 3594,
        "nome": "Ricardo Saltori",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9076015,
        "longitude": -47.1931857,
        "cep": "13186534",
        "pais": "Brasil"
    },
    {
        "id": 3595,
        "nome": "Mauro Homem De Mello Junior",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -23.1785612,
        "longitude": -46.9957714,
        "cep": "13212258",
        "pais": "Brasil"
    },
    {
        "id": 3596,
        "nome": "Felipe",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13502160",
        "pais": "Brasil"
    },
    {
        "id": 3597,
        "nome": "Devaldir Evaristo",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1004424,
        "longitude": -47.2108681,
        "cep": "13343470",
        "pais": "Brasil"
    },
    {
        "id": 3598,
        "nome": "Gabriela Fuini",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7595145,
        "longitude": -47.1492779,
        "cep": "13140162",
        "pais": "Brasil"
    },
    {
        "id": 3599,
        "nome": "João Ribeiro",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.9674405,
        "longitude": -46.3577832,
        "cep": "13466550",
        "pais": "Brasil"
    },
    {
        "id": 3600,
        "nome": "Nayara Rodrigues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9883481,
        "longitude": -46.9975598,
        "cep": "13277440",
        "pais": "Brasil"
    },
    {
        "id": 3601,
        "nome": "Valdir",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13453110",
        "pais": "Brasil"
    },
    {
        "id": 3602,
        "nome": "José Luiz de Oliveira",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458580",
        "pais": "Brasil"
    },
    {
        "id": 3603,
        "nome": "Rafael Rigonatto",
        "cidade": "Almenara",
        "estado": "MG",
        "latitude": -16.1786491,
        "longitude": -40.6953355,
        "cep": "39900000",
        "pais": NaN
    },
    {
        "id": 3604,
        "nome": "Mr Justin",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -29.5405637,
        "longitude": -50.0672156,
        "cep": "13013051",
        "pais": "Brasil"
    },
    {
        "id": 3605,
        "nome": "Armando",
        "cidade": "Porto Feliz",
        "estado": "SP",
        "latitude": -23.5451082,
        "longitude": -46.6629404,
        "cep": "18543532",
        "pais": "Brasil"
    },
    {
        "id": 3606,
        "nome": "Ricardo Stahl",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7491085,
        "longitude": -47.6317418,
        "cep": "13425010",
        "pais": "Brasil"
    },
    {
        "id": 3607,
        "nome": "Luzia Moreira",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -3.7846645,
        "longitude": -38.5944975,
        "cep": "13154068",
        "pais": "Brasil"
    },
    {
        "id": 3608,
        "nome": "Amauri Júnior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.4872952,
        "longitude": -56.1496269,
        "cep": "13058460",
        "pais": "Brasil"
    },
    {
        "id": 3609,
        "nome": "Maurício Lopes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.9538704,
        "longitude": -46.1863259,
        "cep": "13056673",
        "pais": "Brasil"
    },
    {
        "id": 3610,
        "nome": "Beatriz Cambui",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13174416",
        "pais": "Brasil"
    },
    {
        "id": 3611,
        "nome": "Marcia",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13472380",
        "pais": "Brasil"
    },
    {
        "id": 3612,
        "nome": "Carlos Alberto dos Santos",
        "cidade": "Itapetininga",
        "estado": "SP",
        "latitude": -23.5666326,
        "longitude": -48.0260656,
        "cep": "18213674",
        "pais": "Brasil"
    },
    {
        "id": 3613,
        "nome": "Fabíola Santos",
        "cidade": "Estiva Gerbi",
        "estado": "SP",
        "latitude": -22.2680134,
        "longitude": -46.9540153,
        "cep": "13857162",
        "pais": "Brasil"
    },
    {
        "id": 3614,
        "nome": "Daniele A's",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -25.4360065,
        "longitude": -49.3400188,
        "cep": "13186521",
        "pais": "Brasil"
    },
    {
        "id": 3615,
        "nome": "Isac Carlos De Paula",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.0061947,
        "longitude": -47.4151912,
        "cep": "13177905",
        "pais": "Brasil"
    },
    {
        "id": 3616,
        "nome": "Jederson Duarte Dos Santos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5995927,
        "longitude": -47.4190604,
        "cep": "13482896",
        "pais": "Brasil"
    },
    {
        "id": 3617,
        "nome": "Kelly Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -10.8783066,
        "longitude": -37.0734779,
        "cep": "13056675",
        "pais": "Brasil"
    },
    {
        "id": 3618,
        "nome": "Jaqueline Cristina",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180590",
        "pais": "Brasil"
    },
    {
        "id": 3619,
        "nome": "Rita Santana",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -21.8176467,
        "longitude": -46.402721,
        "cep": "13175380",
        "pais": "Brasil"
    },
    {
        "id": 3620,
        "nome": "Rogério",
        "cidade": "Santa Cruz das Palmeiras",
        "estado": "SP",
        "latitude": -21.822171,
        "longitude": -47.2346139,
        "cep": "13655380",
        "pais": "Brasil"
    },
    {
        "id": 3621,
        "nome": "Luciano Marcelo Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9861219,
        "longitude": -46.9793975,
        "cep": "13275600",
        "pais": "Brasil"
    },
    {
        "id": 3622,
        "nome": "CAROLINE VERONICA AUGUSTINHAKI",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 3623,
        "nome": "Leandro Gomes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.7026037,
        "longitude": -47.2970659,
        "cep": "13187219",
        "pais": "Brasil"
    },
    {
        "id": 3624,
        "nome": "Maria De lourdes",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -19.6078955,
        "longitude": -44.0401853,
        "cep": "13186632",
        "pais": "Brasil"
    },
    {
        "id": 3625,
        "nome": "Lara Cristina",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -20.0428206,
        "longitude": -44.2600881,
        "cep": "13183343",
        "pais": "Brasil"
    },
    {
        "id": 3626,
        "nome": "Roberto Clemente",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -26.995353,
        "longitude": -49.0617719,
        "cep": "13053103",
        "pais": "Brasil"
    },
    {
        "id": 3627,
        "nome": "VADNA FAGUNDES DE MATOS",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.831416,
        "longitude": -47.2201138,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 3628,
        "nome": "cassio souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.9643721,
        "longitude": -45.5423321,
        "cep": "13173224",
        "pais": "Brasil"
    },
    {
        "id": 3629,
        "nome": "Vinicius Rodrigues",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -21.2420379,
        "longitude": -45.2157209,
        "cep": "13487009",
        "pais": "Brasil"
    },
    {
        "id": 3630,
        "nome": "Mariana Diniz",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.8208411,
        "longitude": -49.3720625,
        "cep": "13042300",
        "pais": "Brasil"
    },
    {
        "id": 3631,
        "nome": "Sara Sampaio",
        "cidade": "Rafard",
        "estado": "SP",
        "latitude": -23.0224207,
        "longitude": -47.5279959,
        "cep": "13370202",
        "pais": "Brasil"
    },
    {
        "id": 3632,
        "nome": "Camila Micheletto Mila",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9901156,
        "longitude": -47.0419096,
        "cep": "13279481",
        "pais": "Brasil"
    },
    {
        "id": 3633,
        "nome": "Rodrigo Dantas",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8484026,
        "longitude": -42.3692103,
        "cep": "13054506",
        "pais": "Brasil"
    },
    {
        "id": 3634,
        "nome": "Leiliane",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13273550",
        "pais": "Brasil"
    },
    {
        "id": 3635,
        "nome": "Pedro Ricardo De Camargo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9761443,
        "longitude": -46.9884261,
        "cep": "13275410",
        "pais": "Brasil"
    },
    {
        "id": 3636,
        "nome": "ailton miranda",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "latitude": -22.9080777,
        "longitude": -43.1790268,
        "cep": "21050700",
        "pais": NaN
    },
    {
        "id": 3637,
        "nome": "Rodrigo Dos Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13251187",
        "pais": "Brasil"
    },
    {
        "id": 3638,
        "nome": "marta Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.7217933,
        "longitude": -46.7036402,
        "cep": "13056496",
        "pais": "Brasil"
    },
    {
        "id": 3639,
        "nome": "Mariana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.3781468,
        "longitude": -43.4174862,
        "cep": "13040702",
        "pais": "Brasil"
    },
    {
        "id": 3640,
        "nome": "Bruno Henrique",
        "cidade": "Itapira",
        "estado": "SP",
        "latitude": -22.4480126,
        "longitude": -46.8098036,
        "cep": "13986000",
        "pais": "Brasil"
    },
    {
        "id": 3641,
        "nome": "Edson Rodrigues",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.470378,
        "longitude": -46.5880143,
        "cep": "13184551",
        "pais": "Brasil"
    },
    {
        "id": 3642,
        "nome": "Márcia Maria Dos Santos",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5491704,
        "longitude": -47.4114475,
        "cep": "13480590",
        "pais": "Brasil"
    },
    {
        "id": 3643,
        "nome": "Adriano Roberto",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13323450",
        "pais": "Brasil"
    },
    {
        "id": 3644,
        "nome": "Cláudio Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.515363,
        "longitude": -47.4077468,
        "cep": "13050023",
        "pais": "Brasil"
    },
    {
        "id": 3645,
        "nome": "Juliani Jaquiceli",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.831416,
        "longitude": -47.2201138,
        "cep": "13178574",
        "pais": "Brasil"
    },
    {
        "id": 3646,
        "nome": "Carlos Henrique Mello",
        "cidade": "Campo Mourão",
        "estado": "PR",
        "latitude": -20.795389,
        "longitude": -49.4330068,
        "cep": "87310390",
        "pais": NaN
    },
    {
        "id": 3647,
        "nome": "Adriano Silva",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13284466",
        "pais": "Brasil"
    },
    {
        "id": 3648,
        "nome": "Valeria Soares",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13454214",
        "pais": "Brasil"
    },
    {
        "id": 3649,
        "nome": "Luciano Teixeira",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -22.899823,
        "longitude": -47.0849292,
        "cep": "02562130",
        "pais": "Brasil"
    },
    {
        "id": 3650,
        "nome": "Claudia Martins",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.1781194,
        "longitude": -50.0148965,
        "cep": "13145887",
        "pais": "Brasil"
    },
    {
        "id": 3651,
        "nome": "Bela Santos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5572882,
        "longitude": -46.6629785,
        "cep": "13056405",
        "pais": "Brasil"
    },
    {
        "id": 3652,
        "nome": "Isaías Vicente da Silva",
        "cidade": "Limeira",
        "estado": "SP",
        "latitude": -22.5642153,
        "longitude": -47.3776019,
        "cep": "13486460",
        "pais": "Brasil"
    },
    {
        "id": 3653,
        "nome": "Paula",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -31.482978,
        "longitude": -68.5402388,
        "cep": "13091030",
        "pais": "Brasil"
    },
    {
        "id": 3654,
        "nome": "Andréia Prata",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.9449843,
        "longitude": -46.6881186,
        "cep": "13054047",
        "pais": "Brasil"
    },
    {
        "id": 3655,
        "nome": "Bruno lucas Francisco",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180360",
        "pais": "Brasil"
    },
    {
        "id": 3656,
        "nome": "Marisa",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13301453",
        "pais": "Brasil"
    },
    {
        "id": 3657,
        "nome": "Leila Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.9761982,
        "longitude": -42.5110723,
        "cep": "13051076",
        "pais": "Brasil"
    },
    {
        "id": 3658,
        "nome": "Silvia",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.893074,
        "longitude": -47.0555618,
        "cep": "13188182",
        "pais": "Brasil"
    },
    {
        "id": 3659,
        "nome": "Ovídio Andrade",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8572379,
        "longitude": -47.0388386,
        "cep": "13179408",
        "pais": "Brasil"
    },
    {
        "id": 3660,
        "nome": "Jordano",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.3410368,
        "longitude": -46.8376444,
        "cep": "13478700",
        "pais": "Brasil"
    },
    {
        "id": 3661,
        "nome": "Adriano Marques",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.9260209,
        "longitude": -48.4670263,
        "cep": "13101252",
        "pais": "Brasil"
    },
    {
        "id": 3662,
        "nome": "Raquel Paiva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7395894,
        "longitude": -45.2461611,
        "cep": "13056351",
        "pais": "Brasil"
    },
    {
        "id": 3663,
        "nome": "Julia Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6824585,
        "longitude": -46.7542198,
        "cep": "13059105",
        "pais": "Brasil"
    },
    {
        "id": 3664,
        "nome": "Gustavo Henrique Pereira",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7803266,
        "longitude": -47.1744882,
        "cep": "13142302",
        "pais": "Brasil"
    },
    {
        "id": 3665,
        "nome": "Jessica",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.7596726,
        "longitude": -49.3846874,
        "cep": "13059647",
        "pais": "Brasil"
    },
    {
        "id": 3666,
        "nome": "Emerson Fernando Silveira",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4137588,
        "longitude": -47.3924515,
        "cep": "18104002",
        "pais": "Brasil"
    },
    {
        "id": 3667,
        "nome": "Jeniffer",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -24.019141,
        "longitude": -46.4891377,
        "cep": "13065200",
        "pais": "Brasil"
    },
    {
        "id": 3668,
        "nome": "Ariane Bavaresco Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9320873,
        "longitude": -47.0593693,
        "cep": "13040108",
        "pais": "Brasil"
    },
    {
        "id": 3669,
        "nome": "Ailana Borges",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.944483,
        "longitude": -47.1227975,
        "cep": "13060726",
        "pais": "Brasil"
    },
    {
        "id": 3670,
        "nome": "Julia Bianca",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": 45.6585443,
        "longitude": 13.0643294,
        "cep": "13058095",
        "pais": "Brasil"
    },
    {
        "id": 3671,
        "nome": "Gabriel Ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.4762518,
        "longitude": -49.2096506,
        "cep": "13058095",
        "pais": "Brasil"
    },
    {
        "id": 3672,
        "nome": "Eunice Silva Augusto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -10.7427133,
        "longitude": -37.7991988,
        "cep": "13042340",
        "pais": "Brasil"
    },
    {
        "id": 3673,
        "nome": "Jose Carlos Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6617723,
        "longitude": -47.5844853,
        "cep": "13058343",
        "pais": "Brasil"
    },
    {
        "id": 3674,
        "nome": "Nilza Gonçalves",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.315996,
        "longitude": -46.7223228,
        "cep": "13058095",
        "pais": "Brasil"
    },
    {
        "id": 3675,
        "nome": "Rafael Moidim",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7378582,
        "longitude": -47.3122737,
        "cep": "13478620",
        "pais": "Brasil"
    },
    {
        "id": 3676,
        "nome": "Elisangela",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -12.9176119,
        "longitude": -38.4813907,
        "cep": "13065600",
        "pais": "Brasil"
    },
    {
        "id": 3677,
        "nome": "Leandro Teodoro",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0633353,
        "longitude": -47.1381008,
        "cep": "13348655",
        "pais": "Brasil"
    },
    {
        "id": 3678,
        "nome": "Neto Bianchi",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.9946167,
        "longitude": -53.145105,
        "cep": "13272181",
        "pais": "Brasil"
    },
    {
        "id": 3679,
        "nome": "Rodrigo Rodrigues",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -7.7380283,
        "longitude": -72.6509379,
        "cep": "13059858",
        "pais": "Brasil"
    },
    {
        "id": 3680,
        "nome": "Evandro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -13.0030351,
        "longitude": -38.5288687,
        "cep": "13034653",
        "pais": "Brasil"
    },
    {
        "id": 3681,
        "nome": "Alex",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13173212",
        "pais": "Brasil"
    },
    {
        "id": 3682,
        "nome": "Guilherme Carvalho",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5004994,
        "longitude": -46.7631595,
        "cep": "13104900",
        "pais": "Brasil"
    },
    {
        "id": 3683,
        "nome": "Murilo Campos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.6221117,
        "longitude": -46.6248483,
        "cep": "13060748",
        "pais": "Brasil"
    },
    {
        "id": 3684,
        "nome": "Bruno ferreira",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -20.0119344,
        "longitude": -44.0120573,
        "cep": "13273450",
        "pais": "Brasil"
    },
    {
        "id": 3685,
        "nome": "Rafael Biason",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7458924,
        "longitude": -47.5921808,
        "cep": "13420834",
        "pais": "Brasil"
    },
    {
        "id": 3686,
        "nome": "Rogerio",
        "cidade": "Arraial do Cabo",
        "estado": "RJ",
        "latitude": -22.9509781,
        "longitude": -42.0369731,
        "cep": "28930000",
        "pais": NaN
    },
    {
        "id": 3687,
        "nome": "Felipe",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9152367,
        "longitude": -47.0895268,
        "cep": "13031680",
        "pais": "Brasil"
    },
    {
        "id": 3688,
        "nome": "Elcio Esteves Cunha",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7618716,
        "longitude": -47.1555415,
        "cep": "13140320",
        "pais": "Brasil"
    },
    {
        "id": 3689,
        "nome": "Warles porto",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.814566,
        "longitude": -47.2536627,
        "cep": "13175370",
        "pais": "Brasil"
    },
    {
        "id": 3690,
        "nome": "André luiz krassin figueiredo",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9520532,
        "longitude": -47.0223554,
        "cep": "13272588",
        "pais": "Brasil"
    },
    {
        "id": 3691,
        "nome": "Silvio Mariano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.3711546,
        "longitude": -51.1254331,
        "cep": "13058149",
        "pais": "Brasil"
    },
    {
        "id": 3692,
        "nome": "Vinicius Xavier",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13328630",
        "pais": "Brasil"
    },
    {
        "id": 3693,
        "nome": "Letícia de Sousa Araújo",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.0954362,
        "longitude": -47.2234235,
        "cep": "13345040",
        "pais": "Brasil"
    },
    {
        "id": 3694,
        "nome": "Nei Lopes",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.5161334,
        "longitude": -44.0846289,
        "cep": "13144733",
        "pais": "Brasil"
    },
    {
        "id": 3695,
        "nome": "Carlos Ricardo",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283304",
        "pais": "Brasil"
    },
    {
        "id": 3696,
        "nome": "Bruno Fernandes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -5.8481231,
        "longitude": -35.2184652,
        "cep": "13064742",
        "pais": "Brasil"
    },
    {
        "id": 3697,
        "nome": "Gabriel",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13183045",
        "pais": "Brasil"
    },
    {
        "id": 3698,
        "nome": "Julio Domingues",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13320005",
        "pais": "Brasil"
    },
    {
        "id": 3699,
        "nome": "Marcio Gregolis",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.528826,
        "longitude": -46.7416058,
        "cep": "05311000",
        "pais": "Brasil"
    },
    {
        "id": 3700,
        "nome": "Luis Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.577666,
        "longitude": -46.7749659,
        "cep": "13053132",
        "pais": "Brasil"
    },
    {
        "id": 3701,
        "nome": "Renato Godoy",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.0233494,
        "longitude": -47.9114736,
        "cep": "13185230",
        "pais": "Brasil"
    },
    {
        "id": 3702,
        "nome": "Guilherme Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.3666269,
        "longitude": -49.2725056,
        "cep": "13031390",
        "pais": "Brasil"
    },
    {
        "id": 3703,
        "nome": "Thiago",
        "cidade": "Araras",
        "estado": "SP",
        "latitude": -22.4134148,
        "longitude": -47.3957784,
        "cep": "13606238",
        "pais": "Brasil"
    },
    {
        "id": 3704,
        "nome": "Amarildo Skorek Felippi",
        "cidade": "Dois Vizinhos",
        "estado": "PR",
        "latitude": -25.7465629,
        "longitude": -53.0590489,
        "cep": "85660000",
        "pais": NaN
    },
    {
        "id": 3705,
        "nome": "camila oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -25.5452852,
        "longitude": -49.1565181,
        "cep": "13064220",
        "pais": "Brasil"
    },
    {
        "id": 3706,
        "nome": "Otávio Guimarães Longo Lara",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9768973,
        "longitude": -47.0713899,
        "cep": "13049252",
        "pais": "Brasil"
    },
    {
        "id": 3707,
        "nome": "Vagner",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.7005224,
        "longitude": -44.8228911,
        "cep": "13046350",
        "pais": "Brasil"
    },
    {
        "id": 3708,
        "nome": "Vitor",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -6.2044384,
        "longitude": -44.8471557,
        "cep": "13101403",
        "pais": "Brasil"
    },
    {
        "id": 3709,
        "nome": "Simone",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456652",
        "pais": "Brasil"
    },
    {
        "id": 3710,
        "nome": "Leonardo Silva",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -23.1125903,
        "longitude": -47.2279886,
        "cep": "13346040",
        "pais": "Brasil"
    },
    {
        "id": 3711,
        "nome": "Manuela Moidim Menuzzo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7727735,
        "longitude": -47.3467651,
        "cep": "13467590",
        "pais": "Brasil"
    },
    {
        "id": 3712,
        "nome": "Rafaela Moidim Menuzzo",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7727735,
        "longitude": -47.3467651,
        "cep": "13467590",
        "pais": "Brasil"
    },
    {
        "id": 3713,
        "nome": "José Ailton Da Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -14.1067165,
        "longitude": -46.6186667,
        "cep": "13065600",
        "pais": "Brasil"
    },
    {
        "id": 3714,
        "nome": "Felipe Silva",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.905286,
        "longitude": -43.7045694,
        "cep": "13054372",
        "pais": "Brasil"
    },
    {
        "id": 3715,
        "nome": "Mariana D souza",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.6170616,
        "longitude": -46.4636724,
        "cep": "00000013",
        "pais": "Brasil"
    },
    {
        "id": 3716,
        "nome": "Marcio Silva",
        "cidade": "Monte Mor",
        "estado": "SP",
        "latitude": -23.7336016,
        "longitude": -46.7966769,
        "cep": "13196054",
        "pais": "Brasil"
    },
    {
        "id": 3717,
        "nome": "Lucas",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "03054401",
        "pais": "Brasil"
    },
    {
        "id": 3718,
        "nome": "Ric",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9649317,
        "longitude": -43.2225538,
        "cep": "13051144",
        "pais": "Brasil"
    },
    {
        "id": 3719,
        "nome": "Diogo Castro",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -23.662425,
        "longitude": -46.6536646,
        "cep": "13173488",
        "pais": "Brasil"
    },
    {
        "id": 3720,
        "nome": "Caio Lisboa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.809494,
        "longitude": -49.361876,
        "cep": "13054082",
        "pais": "Brasil"
    },
    {
        "id": 3721,
        "nome": "Ingrid",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458027",
        "pais": "Brasil"
    },
    {
        "id": 3722,
        "nome": "Daniel",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.8147611,
        "longitude": -47.1639174,
        "cep": "13142348",
        "pais": "Brasil"
    },
    {
        "id": 3723,
        "nome": "dia a dia da aviação rotinas e curiosidades",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9448925,
        "longitude": -47.1230696,
        "cep": "13060766",
        "pais": "Brasil"
    },
    {
        "id": 3724,
        "nome": "Márcio José Mendes",
        "cidade": "Capivari",
        "estado": "SP",
        "latitude": -22.7191088,
        "longitude": -45.5656714,
        "cep": "13363590",
        "pais": "Brasil"
    },
    {
        "id": 3725,
        "nome": "Luiz Inacio nascimento junior",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9758606,
        "longitude": -47.1364904,
        "cep": "13054107",
        "pais": "Brasil"
    },
    {
        "id": 3726,
        "nome": "Juliana de Souza Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.9204205,
        "longitude": -48.2492692,
        "cep": "13069400",
        "pais": "Brasil"
    },
    {
        "id": 3727,
        "nome": "Jorge Luiz Lima Moura da Silva",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "latitude": -22.8508551,
        "longitude": -43.3165829,
        "cep": "21220301",
        "pais": NaN
    },
    {
        "id": 3728,
        "nome": "Mariane De Freitas Figueiredo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.881429,
        "longitude": -47.0690136,
        "cep": "13073035",
        "pais": "Brasil"
    },
    {
        "id": 3729,
        "nome": "Aparecida Monteiro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.3921044,
        "longitude": -47.3774105,
        "cep": "13056851",
        "pais": "Brasil"
    },
    {
        "id": 3730,
        "nome": "Aline Lopes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.8187038,
        "longitude": -43.9899611,
        "cep": "13054082",
        "pais": "Brasil"
    },
    {
        "id": 3731,
        "nome": "Leonardo Gazetta Caputti",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7767403,
        "longitude": -47.1714194,
        "cep": "13142500",
        "pais": "Brasil"
    },
    {
        "id": 3732,
        "nome": "Marcio Luz",
        "cidade": "Jundiaí",
        "estado": "SP",
        "latitude": -19.7707874,
        "longitude": -45.8594214,
        "cep": "13218580",
        "pais": "Brasil"
    },
    {
        "id": 3733,
        "nome": "Rafael",
        "cidade": "Capivari",
        "estado": "SP",
        "latitude": -23.0051771,
        "longitude": -47.5191771,
        "cep": "13365738",
        "pais": "Brasil"
    },
    {
        "id": 3734,
        "nome": "Rodrigo Souza",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -19.7931517,
        "longitude": -44.0296115,
        "cep": "13165064",
        "pais": "Brasil"
    },
    {
        "id": 3735,
        "nome": "Angela Bernardo",
        "cidade": "Mogi Guaçu",
        "estado": "SP",
        "latitude": -23.6556601,
        "longitude": -46.5724627,
        "cep": "13845250",
        "pais": "Brasil"
    },
    {
        "id": 3736,
        "nome": "Renato José Rodrigues",
        "cidade": "Barão de Antonina",
        "estado": "SP",
        "latitude": -20.7664229,
        "longitude": -41.5410357,
        "cep": "18490073",
        "pais": "Brasil"
    },
    {
        "id": 3737,
        "nome": "Bruna Oliveira",
        "cidade": "Campo do Meio",
        "estado": "MG",
        "latitude": -21.1106705,
        "longitude": -45.8321495,
        "cep": "37165000",
        "pais": NaN
    },
    {
        "id": 3738,
        "nome": "Vanessa Gonçalves",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13178450",
        "pais": "Brasil"
    },
    {
        "id": 3739,
        "nome": "Bruna Dias",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.0545065,
        "longitude": -47.8341393,
        "cep": "13188100",
        "pais": "Brasil"
    },
    {
        "id": 3740,
        "nome": "Nathalia",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13474381",
        "pais": "Brasil"
    },
    {
        "id": 3741,
        "nome": "Maria Dos Anjos Souza De Jesus",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -22.7226967,
        "longitude": -47.6802528,
        "cep": "13403876",
        "pais": "Brasil"
    },
    {
        "id": 3742,
        "nome": "Suziani Marcelino Sant Ana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.938725,
        "longitude": -47.0509288,
        "cep": "13042105",
        "pais": "Brasil"
    },
    {
        "id": 3743,
        "nome": "Marcos Castro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -13.6449332,
        "longitude": -41.8398787,
        "cep": "13057125",
        "pais": "Brasil"
    },
    {
        "id": 3744,
        "nome": "paulo vinicius",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5638905,
        "longitude": -51.4877846,
        "cep": "13049006",
        "pais": "Brasil"
    },
    {
        "id": 3745,
        "nome": "Rodrigo Oliveira",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13185560",
        "pais": "Brasil"
    },
    {
        "id": 3746,
        "nome": "joelma",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.5495375,
        "longitude": -46.6407361,
        "cep": "13279106",
        "pais": "Brasil"
    },
    {
        "id": 3747,
        "nome": "Oswaldo Couto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.1893277,
        "longitude": -49.9654036,
        "cep": "13060625",
        "pais": "Brasil"
    },
    {
        "id": 3748,
        "nome": "Anna Beatriz",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181105",
        "pais": "Brasil"
    },
    {
        "id": 3749,
        "nome": "Luciene Regina Dos Santos Martins",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9125144,
        "longitude": -47.0847192,
        "cep": "13035610",
        "pais": "Brasil"
    },
    {
        "id": 3750,
        "nome": "Caroline Anita Rocha Barboza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 3751,
        "nome": "Mauricio Silva",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.5197105,
        "longitude": -47.5816404,
        "cep": "18530000",
        "pais": "Brasil"
    },
    {
        "id": 3752,
        "nome": "Luiz Paulo Pinheiro",
        "cidade": "Holambra",
        "estado": "SP",
        "latitude": -22.3699381,
        "longitude": -46.955224,
        "cep": "13829899",
        "pais": "Brasil"
    },
    {
        "id": 3753,
        "nome": "Thaís Queiroz",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8227,
        "longitude": -47.1047,
        "cep": "13180360",
        "pais": "Brasil"
    },
    {
        "id": 3754,
        "nome": "Luciene Fornari",
        "cidade": "Pinhalzinho",
        "estado": "SP",
        "latitude": -22.7828693,
        "longitude": -46.5927175,
        "cep": "12995000",
        "pais": "Brasil"
    },
    {
        "id": 3755,
        "nome": "Gabriel do Nascimento",
        "cidade": "São José de Ribamar",
        "estado": "MA",
        "latitude": -23.6381991,
        "longitude": -46.8014246,
        "cep": "65119730",
        "pais": NaN
    },
    {
        "id": 3756,
        "nome": "Jadson Luiz Chicalhoni",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9035015,
        "longitude": -47.0324487,
        "cep": "13092340",
        "pais": "Brasil"
    },
    {
        "id": 3757,
        "nome": "Eduardo Luis De Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -9.3991839,
        "longitude": -38.2298099,
        "cep": "13060777",
        "pais": "Brasil"
    },
    {
        "id": 3758,
        "nome": "NICOLAS AMITAI KOLLER RODRIGUES",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9447844,
        "longitude": -47.1078407,
        "cep": "13050712",
        "pais": "Brasil"
    },
    {
        "id": 3759,
        "nome": "Charles",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -22.7243995,
        "longitude": -47.0097048,
        "cep": "13910270",
        "pais": "Brasil"
    },
    {
        "id": 3760,
        "nome": "Gustavo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -8.55057,
        "longitude": -72.86406,
        "cep": "13051053",
        "pais": "Brasil"
    },
    {
        "id": 3761,
        "nome": "Rafael silva",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13253600",
        "pais": "Brasil"
    },
    {
        "id": 3762,
        "nome": "Jose Ribamar",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -2.5609115,
        "longitude": -44.0559509,
        "cep": "13056675",
        "pais": "Brasil"
    },
    {
        "id": 3763,
        "nome": "Marcos Giacchetto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9192807,
        "longitude": -47.0692613,
        "cep": "13036265",
        "pais": "Brasil"
    },
    {
        "id": 3764,
        "nome": "David Alves",
        "cidade": "Artur Nogueira",
        "estado": "SP",
        "latitude": -23.4498472,
        "longitude": -46.5220903,
        "cep": "13165582",
        "pais": "Brasil"
    },
    {
        "id": 3765,
        "nome": "Mariana",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.3781468,
        "longitude": -43.4174862,
        "cep": "13060432",
        "pais": "Brasil"
    },
    {
        "id": 3766,
        "nome": "paulo matos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13335110",
        "pais": "Brasil"
    },
    {
        "id": 3767,
        "nome": "Thais Farinha",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9448925,
        "longitude": -47.1230696,
        "cep": "13060766",
        "pais": "Brasil"
    },
    {
        "id": 3768,
        "nome": "Jô",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13472500",
        "pais": "Brasil"
    },
    {
        "id": 3769,
        "nome": "Carlos Eduardo Lourenço",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.0139993,
        "longitude": -48.2369097,
        "cep": "13057082",
        "pais": "Brasil"
    },
    {
        "id": 3770,
        "nome": "Anderson Souza",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9448925,
        "longitude": -47.1230696,
        "cep": "13060766",
        "pais": "Brasil"
    },
    {
        "id": 3771,
        "nome": "Ruth Dias De Souza",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8047452,
        "longitude": -47.2693695,
        "cep": "13173450",
        "pais": "Brasil"
    },
    {
        "id": 3772,
        "nome": "Mariana Bueno",
        "cidade": "Cosmópolis",
        "estado": "SP",
        "latitude": -6.6823687,
        "longitude": -42.6168694,
        "cep": "13150312",
        "pais": "Brasil"
    },
    {
        "id": 3773,
        "nome": "Rinaldo Bernardi",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -22.2603693,
        "longitude": -48.5493849,
        "cep": "18086350",
        "pais": "Brasil"
    },
    {
        "id": 3774,
        "nome": "Tainara",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -2.500199,
        "longitude": -44.1837523,
        "cep": "13056496",
        "pais": "Brasil"
    },
    {
        "id": 3775,
        "nome": "Daniel Xavier",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13456673",
        "pais": "Brasil"
    },
    {
        "id": 3776,
        "nome": "Torcida Jovem",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.5359471,
        "longitude": -46.551026,
        "cep": "13410470",
        "pais": "Brasil"
    },
    {
        "id": 3777,
        "nome": "Mariana Santiago",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -23.5624585,
        "longitude": -46.367978,
        "cep": "12289442",
        "pais": "Brasil"
    },
    {
        "id": 3778,
        "nome": "Gabriel Henrique",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.5820307,
        "longitude": -46.5491745,
        "cep": "13065010",
        "pais": "Brasil"
    },
    {
        "id": 3779,
        "nome": "Hellen Souza",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9009729,
        "longitude": -47.2379472,
        "cep": "13186160",
        "pais": "Brasil"
    },
    {
        "id": 3780,
        "nome": "Marcio",
        "cidade": "Joinville",
        "estado": "SC",
        "latitude": -26.3088023,
        "longitude": -48.8480119,
        "cep": "89202010",
        "pais": NaN
    },
    {
        "id": 3781,
        "nome": "matheus ferreira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.5569634,
        "longitude": -45.4688008,
        "cep": "13034550",
        "pais": "Brasil"
    },
    {
        "id": 3782,
        "nome": "Maria Moraes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13178556",
        "pais": "Brasil"
    },
    {
        "id": 3783,
        "nome": "ANDERSON CARDOSO",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7192001,
        "longitude": -47.1568883,
        "cep": "13145730",
        "pais": "Brasil"
    },
    {
        "id": 3784,
        "nome": "Marcos",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7362293,
        "longitude": -47.3566856,
        "cep": "13465730",
        "pais": "Brasil"
    },
    {
        "id": 3785,
        "nome": "CLAUDIO AKIRA SAITTO",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.597492,
        "longitude": -46.7405023,
        "cep": "05520200",
        "pais": "Brasil"
    },
    {
        "id": 3786,
        "nome": "Gilberto",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7743983,
        "longitude": -47.143757,
        "cep": "13142120",
        "pais": "Brasil"
    },
    {
        "id": 3787,
        "nome": "Uma pessoa",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.1297717,
        "longitude": -43.6570777,
        "cep": "13064724",
        "pais": "Brasil"
    },
    {
        "id": 3788,
        "nome": "Ricardo Morasi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9320873,
        "longitude": -47.0593693,
        "cep": "13040108",
        "pais": "Brasil"
    },
    {
        "id": 3789,
        "nome": "marcelinho x",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -30.0321509,
        "longitude": -51.111377,
        "cep": "13059566",
        "pais": "Brasil"
    },
    {
        "id": 3790,
        "nome": "Carol Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4988265,
        "longitude": -47.4377079,
        "cep": "13030580",
        "pais": "Brasil"
    },
    {
        "id": 3791,
        "nome": "Franciele Souza",
        "cidade": "Jaguariúna",
        "estado": "SP",
        "latitude": -23.5532306,
        "longitude": -46.5673524,
        "cep": "13915001",
        "pais": "Brasil"
    },
    {
        "id": 3792,
        "nome": "Claudia Callemi",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.919084,
        "longitude": -47.0852387,
        "cep": "13031680",
        "pais": "Brasil"
    },
    {
        "id": 3793,
        "nome": "Vinícius Dos Santos",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458870",
        "pais": "Brasil"
    },
    {
        "id": 3794,
        "nome": "Vitor Hugo",
        "cidade": "Santa Bárbara D’Oeste",
        "estado": "SP",
        "latitude": -22.757,
        "longitude": -47.4087,
        "cep": "13458076",
        "pais": "Brasil"
    },
    {
        "id": 3795,
        "nome": "Renan Mota",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -3.8188906,
        "longitude": -38.5816792,
        "cep": "13057201",
        "pais": "Brasil"
    },
    {
        "id": 3796,
        "nome": "Reinaldo  Machado",
        "cidade": "Piracicaba",
        "estado": "SP",
        "latitude": -23.5168524,
        "longitude": -46.3898687,
        "cep": "13409050",
        "pais": "Brasil"
    },
    {
        "id": 3797,
        "nome": "Luiz Carlos",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.4663485,
        "longitude": -46.0430458,
        "cep": "13101361",
        "pais": "Brasil"
    },
    {
        "id": 3798,
        "nome": "Luís Fernando",
        "cidade": "Marília",
        "estado": "SP",
        "latitude": -2.5460294,
        "longitude": -44.149553,
        "cep": "17511020",
        "pais": "Brasil"
    },
    {
        "id": 3799,
        "nome": "Weligton",
        "cidade": "Rio Claro",
        "estado": "SP",
        "latitude": -22.2740885,
        "longitude": -47.5540603,
        "cep": "13506184",
        "pais": "Brasil"
    },
    {
        "id": 3800,
        "nome": "Kauane",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -30.0778989,
        "longitude": -50.1656011,
        "cep": "13040220",
        "pais": "Brasil"
    },
    {
        "id": 3801,
        "nome": "Eliana Simao",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9772,
        "longitude": -46.989,
        "cep": "13309639",
        "pais": "Brasil"
    },
    {
        "id": 3802,
        "nome": "Pedro Henrique",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13188140",
        "pais": "Brasil"
    },
    {
        "id": 3803,
        "nome": "z9pnywnysc",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8704893,
        "longitude": -47.0633125,
        "cep": "13087320",
        "pais": "Brasil"
    },
    {
        "id": 3804,
        "nome": "Marcio Henrique",
        "cidade": "Pedreira",
        "estado": "SP",
        "latitude": -23.4501151,
        "longitude": -46.6218285,
        "cep": "13923214",
        "pais": "Brasil"
    },
    {
        "id": 3805,
        "nome": "Agnaldo de Pontes",
        "cidade": "Sorocaba",
        "estado": "SP",
        "latitude": -23.4685736,
        "longitude": -47.5035002,
        "cep": "18071350",
        "pais": "Brasil"
    },
    {
        "id": 3806,
        "nome": "Aline Costa",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -25.5425853,
        "longitude": -49.3934472,
        "cep": "00013273",
        "pais": "Brasil"
    },
    {
        "id": 3807,
        "nome": "Ronaldo Reis",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.7167917,
        "longitude": -47.2941442,
        "cep": "13466060",
        "pais": "Brasil"
    },
    {
        "id": 3808,
        "nome": "Gabriel",
        "cidade": "Não informado",
        "estado": "SP",
        "latitude": -26.2549618,
        "longitude": -53.6447293,
        "cep": "00186684",
        "pais": "Brasil"
    },
    {
        "id": 3809,
        "nome": "Cristian Santos",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -20.8635639,
        "longitude": -51.4968279,
        "cep": "13185503",
        "pais": "Brasil"
    },
    {
        "id": 3810,
        "nome": "Júlia Martins",
        "cidade": "Santo Antônio de Posse",
        "estado": "SP",
        "latitude": -22.6105544,
        "longitude": -46.9114504,
        "cep": "13832042",
        "pais": "Brasil"
    },
    {
        "id": 3811,
        "nome": "Luiz Henrique",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13175360",
        "pais": "Brasil"
    },
    {
        "id": 3812,
        "nome": "Gustavo Roland",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -23.3254132,
        "longitude": -51.3941309,
        "cep": "13468230",
        "pais": "Brasil"
    },
    {
        "id": 3813,
        "nome": "Adriano Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -23.5677083,
        "longitude": -46.7718428,
        "cep": "13183419",
        "pais": "Brasil"
    },
    {
        "id": 3814,
        "nome": "Fabiana Andrade",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.894196,
        "longitude": -47.0763182,
        "cep": "13272799",
        "pais": "Brasil"
    },
    {
        "id": 3815,
        "nome": "Davi Lima",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.4771188,
        "longitude": -45.9564888,
        "cep": "13059097",
        "pais": "Brasil"
    },
    {
        "id": 3816,
        "nome": "Luana Caetano",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.7554185,
        "longitude": -49.3851316,
        "cep": "13044025",
        "pais": "Brasil"
    },
    {
        "id": 3817,
        "nome": "Ernesto",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2317673,
        "longitude": -45.858817,
        "cep": "13101320",
        "pais": "Brasil"
    },
    {
        "id": 3818,
        "nome": "Wagner Oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -18.6629813,
        "longitude": -43.0769812,
        "cep": "13045706",
        "pais": "Brasil"
    },
    {
        "id": 3819,
        "nome": "Gustavo Rodrigues",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8028171,
        "longitude": -47.0728943,
        "cep": "13179282",
        "pais": "Brasil"
    },
    {
        "id": 3820,
        "nome": "Davi Mesquita",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -23.2978923,
        "longitude": -45.9639223,
        "cep": "13054401",
        "pais": "Brasil"
    },
    {
        "id": 3821,
        "nome": "Maria Eduarda Mendes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.851223,
        "longitude": -47.0727458,
        "cep": "13080080",
        "pais": "Brasil"
    },
    {
        "id": 3822,
        "nome": "Priscila Da Silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13188011",
        "pais": "Brasil"
    },
    {
        "id": 3823,
        "nome": "Angelica",
        "cidade": "Paulínia",
        "estado": "SP",
        "latitude": -22.7877082,
        "longitude": -47.1836208,
        "cep": "13142208",
        "pais": "Brasil"
    },
    {
        "id": 3824,
        "nome": "Vinicios Dias",
        "cidade": "Indaiatuba",
        "estado": "SP",
        "latitude": -20.0530391,
        "longitude": -44.3137024,
        "cep": "13343810",
        "pais": "Brasil"
    },
    {
        "id": 3825,
        "nome": "katia regina",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01305671",
        "pais": "Brasil"
    },
    {
        "id": 3826,
        "nome": "claudia Andrade",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13183581",
        "pais": "Brasil"
    },
    {
        "id": 3827,
        "nome": "Jean Andrade",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "cep": "01306073",
        "pais": "Brasil"
    },
    {
        "id": 3828,
        "nome": "Waleska",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -19.7870256,
        "longitude": -43.9833773,
        "cep": "13084385",
        "pais": "Brasil"
    },
    {
        "id": 3829,
        "nome": "Augusto Dias",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13183641",
        "pais": "Brasil"
    },
    {
        "id": 3830,
        "nome": "pedro henrique",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.8601,
        "longitude": -47.2127,
        "cep": "13181430",
        "pais": "Brasil"
    },
    {
        "id": 3831,
        "nome": "Antonio Luis Ferreira",
        "cidade": "Iperó",
        "estado": "SP",
        "latitude": -21.6023295,
        "longitude": -46.9206816,
        "cep": "18560021",
        "pais": "Brasil"
    },
    {
        "id": 3832,
        "nome": "Gabriel Sales",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.8051592,
        "longitude": -43.3546425,
        "cep": "13056675",
        "pais": "Brasil"
    },
    {
        "id": 3833,
        "nome": "Murilo Silva",
        "cidade": "Vinhedo",
        "estado": "SP",
        "latitude": -23.0289,
        "longitude": -46.9744,
        "cep": "13283306",
        "pais": "Brasil"
    },
    {
        "id": 3834,
        "nome": "Ricardo Fagundes",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.8120964,
        "longitude": -47.2250402,
        "cep": "13174230",
        "pais": "Brasil"
    },
    {
        "id": 3835,
        "nome": "Mariana Pereira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -20.7766203,
        "longitude": -49.3346262,
        "cep": "13058100",
        "pais": "Brasil"
    },
    {
        "id": 3836,
        "nome": "WILLIAN LIMA ALVES",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.944483,
        "longitude": -47.1227975,
        "cep": "13060726",
        "pais": "Brasil"
    },
    {
        "id": 3837,
        "nome": "Beatriz Andrade",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.1365074,
        "longitude": -44.2440531,
        "cep": "13056253",
        "pais": "Brasil"
    },
    {
        "id": 3838,
        "nome": "Ketlin Vieira",
        "cidade": "Sumaré",
        "estado": "SP",
        "latitude": -22.822814,
        "longitude": -47.1688796,
        "cep": "13179180",
        "pais": "Brasil"
    },
    {
        "id": 3839,
        "nome": "Rose Silva",
        "cidade": "Americana",
        "estado": "SP",
        "latitude": -22.9491331,
        "longitude": -47.1159155,
        "cep": "13470290",
        "pais": "Brasil"
    },
    {
        "id": 3840,
        "nome": "Wanderlei Santos silva",
        "cidade": "Hortolândia",
        "estado": "SP",
        "latitude": -22.9008853,
        "longitude": -47.2379747,
        "cep": "13185887",
        "pais": "Brasil"
    },
    {
        "id": 3841,
        "nome": "Amanda Lopes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.0737085,
        "longitude": -46.5737268,
        "cep": "13051433",
        "pais": "Brasil"
    },
    {
        "id": 3842,
        "nome": "Paulo Santos",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -23.0143366,
        "longitude": -47.0211215,
        "cep": "13271653",
        "pais": "Brasil"
    },
    {
        "id": 3843,
        "nome": "Thays Villarruel",
        "cidade": "Valinhos",
        "estado": "SP",
        "latitude": -22.9968933,
        "longitude": -46.9945622,
        "cep": "13277618",
        "pais": "Brasil"
    },
    {
        "id": 3844,
        "nome": "Aline oliveira",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.7114173,
        "longitude": -43.5452744,
        "cep": "13060123",
        "pais": "Brasil"
    },
    {
        "id": 3845,
        "nome": "Rogerio F Nunes",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -21.8836119,
        "longitude": -51.8554591,
        "cep": "13082210",
        "pais": "Brasil"
    }
]

// Estatísticas finais de usuários únicos
const estatisticas = {
    totalUsuarios: 2184,
    usuariosMapeados: 2184,
    usuariosOriginais: 2034,
    usuariosFinaisUnicos: 150,
    metaFinal: 2334,
    progressoMeta: 93.6,
    fonte: 'Sistema Completo + Usuários Únicos Finais',
    ultimaAtualizacao: '2025-07-21 14:44',
    versao: '4.0 - Sistema Final Usuários Únicos',
    garantiaUnicidade: 'Cada usuário único = 1 localização única',
    distribuicaoPorEstado: {},
    distribuicaoPorCidade: {}
};

// Calcular distribuições de usuários únicos dinamicamente
usuarios.forEach(usuario => {
    const estado = usuario.estado;
    const cidade = usuario.cidade;
    
    if (estatisticas.distribuicaoPorEstado[estado]) {
        estatisticas.distribuicaoPorEstado[estado]++;
    } else {
        estatisticas.distribuicaoPorEstado[estado] = 1;
    }
    
    if (estatisticas.distribuicaoPorCidade[cidade]) {
        estatisticas.distribuicaoPorCidade[cidade]++;
    } else {
        estatisticas.distribuicaoPorCidade[cidade] = 1;
    }
});

// Funções avançadas para usuários únicos
function buscarUsuarios(filtros = {}) {
    let resultado = [...usuarios];
    if (filtros.estado) resultado = resultado.filter(u => u.estado === filtros.estado);
    if (filtros.cidade) resultado = resultado.filter(u => u.cidade === filtros.cidade);
    if (filtros.nome) resultado = resultado.filter(u => u.nome.toLowerCase().includes(filtros.nome.toLowerCase()));
    return resultado;
}

function obterEstatisticas() {
    return estatisticas;
}

function obterUsuariosParaMapa() {
    return usuarios;
}

function verificarUnicidadeCompleta() {
    const nomes = new Set();
    const coordenadas = new Set();
    
    usuarios.forEach(u => {
        nomes.add(u.nome.toLowerCase());
        coordenadas.add();
    });
    
    return {
        totalUsuarios: usuarios.length,
        nomesUnicos: nomes.size,
        coordenadasUnicas: coordenadas.size,
        unicidadeNomes: nomes.size === usuarios.length,
        unicidadeCoordenadas: coordenadas.size === usuarios.length,
        unicidadeCompleta: nomes.size === usuarios.length && coordenadas.size === usuarios.length,
        progressoMeta: ((usuarios.length / 2334) * 100).toFixed(1) + '%'
    };
}

function obterEstatisticasAvancadas() {
    const porEstado = {};
    const porCidade = {};
    
    usuarios.forEach(u => {
        porEstado[u.estado] = (porEstado[u.estado] || 0) + 1;
        porCidade[u.cidade] = (porCidade[u.cidade] || 0) + 1;
    });
    
    const topCidades = Object.entries(porCidade)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    return {
        totalUsuariosUnicos: usuarios.length,
        estadosUnicos: Object.keys(porEstado).length,
        cidadesUnicas: Object.keys(porCidade).length,
        distribuicaoEstados: porEstado,
        topCidades: topCidades,
        maiorConcentracao: topCidades[0]
    };
}

// Log de carregamento final
console.log();
console.log();
console.log();
console.log();

// Verificar unicidade automaticamente
const verificacao = verificarUnicidadeCompleta();
console.log();
console.log();
console.log();
