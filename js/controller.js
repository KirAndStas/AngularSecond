"use strickt"

angular.module('mainApp')

  .service('defaultArticles', function() {
    var me = this;

    me.thereAre = [
      {
        id: '1',
        title: 'All Victims Are Out of the Hospit',
        titleCopy: 'All Victims Are Out of the Hospit',
        idea: "'We really were very lucky', Gov. Andrew M. Cuomo said after a significant blast in the Chelsea neighborhood of Manhattan. Nobody was killed, and all 29 of the injured have been released from the hospital. Remnants of the bomb and a second device were being investigated, and an additional 1,000 police officers and National Guard members were being deployed in the city.",
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/1.jpg'

      },
      {
        id: '2',
        title: 'How I Spent My New York Fashion Week',
        titleCopy: 'How I Spent My New York Fashion Week',
        idea: 'In early September, summer turns to fall and fashion turns to New York Fashion Week, the first leg in the monthlong international relay in which next spring’s collections (or sometimes this fall’s collections) are shown. New York’s week is particularly crammed, and while I raced uptown and down, subsisting on what I could cadge from catered shows and parties — a blini-and-caviar here (Ralph Lauren), a frosted mini doughnut there (Gucci), a cherry Coke Slurpee sucked down after dark (Alexander Wang) — I filled the margins of my notebook with the obscure, unexpected and pleasantly surprising. Here are some of the most memorable things I saw.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/2.jpg'
      },
      {
        id: '3',
        title: 'Mets’ Win Offsets Bad News on Jacob deGrom, Expected to Miss Rest of Season',
        titleCopy: 'Mets’ Win Offsets Bad News on Jacob deGrom, Expected to Miss Rest of Season',
        idea: 'The Mets’ season, a tale that has included as many strange turns as a Stanley Kubrick film, revealed another twist Saturday. The right-hander Jacob deGrom will most likely miss the remainder of the season because of built-up scar tissue pinching the ulnar nerve in his right elbow. DeGrom, who had Tommy John surgery in October 2010, will need another operation to remove the scar tissue. Before the Mets’ 3-2 win over the Minnesota Twins in 12 innings on Saturday night at Citi Field, deGrom said that he wanted to consult with his agents and Mets officials before making a decision on when to have surgery but that he guessed that he was done pitching this season.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/3.jpg'
      },
      {
        id: '4',
        title: 'Obama Creates Atlantic Ocean’s First Marine Monument',
        titleCopy: 'Obama Creates Atlantic Ocean’s First Marine Monument',
        idea: 'WASHINGTON — President Obama on Thursday created the Atlantic Ocean’s first United States marine monument, preserving an expanse of sea canyons and underwater mountains off the New England coast as he races to use his executive power to protect vast stretches of land and water before he leaves office. Mr. Obama announced the designation of the Northeast Canyons and Seamounts Marine National Monument at an ocean conservation meeting in Washington, shortly after issuing a proclamation protecting an area roughly the size of Connecticut that sits 130 miles off the coast of Cape Cod.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/4.jpg'
      },
      {
        id: '5',
        title: 'What to Do if You Have a Samsung Galaxy Note 7',
        titleCopy: 'What to Do if You Have a Samsung Galaxy Note 7',
        idea: 'Samsung’s Galaxy Note 7 device is the only model currently involved in the battery situation, and the company says it has stopped selling that version of the device. The Galaxy S7 and Galaxy S7 Edge models and older members in the Galaxy S line are not affected. Since the Galaxy Note 7’s release last month, Samsung has received 92 reports of batteries overheating in the United States, including 26 reports of burns and 55 reports of property damage, according to the United States Consumer Product Safety Division. A manufacturing defect in the particular lithium-ion battery used by that model is believed to be the cause of the combustibility.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/5.jpg'
      },
      {
        id: '6',
        title: 'IPhone 7 Review: Though Not Perfect, New iPhones Keep Apple’s Promises',
        titleCopy: 'IPhone 7 Review: Though Not Perfect, New iPhones Keep Apple’s Promises',
        idea: 'Apple’s iPhone, just short of 10 years old, has hit puberty. Like adolescents coping with awkward changes to their bodies, the iPhone 7, due for release on Friday, introduces some uncomfortable transitions. They include the much ballyhooed removal of the headphone jack and the replacement of the physical home button with a virtual one. For Apple customers, this creates a difficult choice. While upgrading iPhones in the past was typically a no-brainer, now people must wrestle with whether to deal with the hassle of having no audio jack. Many people could simply upgrade to last year’s model, the iPhone 6S, which is also a fast phone with great cameras and still has the jack. Yet after testing the new iPhone 7 and its larger sibling, the 7 Plus, for five days, I have hopped on the 7 train. While it is irritating not to have an audio jack — Apple nixed the 3.5 millimeter port to make room for faster chips, better batteries and to make the iPhone water-resistant — and the older physical home button feels better to press than the new virtual one, the new iPhones deliver on Apple’s promises.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/6.jpg'
      },
      {
        id: '7',
        title: 'Readers Ask About Apple’s New iPhone and Watch',
        titleCopy: 'Readers Ask About Apple’s New iPhone and Watch',
        idea: 'After Apple unveiled new iPhones and smartwatches last week, we asked readers to send us their questions about the devices. J. D. Biersdorfer and Brian X. Chen answer the queries. J. D.: Here is the breakdown for the iPhone 7, without carrier subsidies or trade-up deals factored in: ■ The 32-gigabyte model: $650. ■ The 128-gigabyte model: $750. ■ The 256-gigabyte model (the one with the largest capacity): $850. For the larger iPhone 7 Plus: ■ The 32-gigabyte model: $770. ■ The 128-gigabyte model: $870. ■ The 256-gigabyte model: $970. Apple and most wireless carriers offer monthly payment plans to carve up the cost into smaller cash chunks. Wired earbuds are included in the box, but the wireless AirPods are not part of the package and will cost an additional $160 when they arrive in late October.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/7.jpg'
      },
      {
        id: '8',
        title: 'Your Next Lesson: Oregon Pinot Noir',
        titleCopy: 'Your Next Lesson: Oregon Pinot Noir',
        idea: 'After a string of summery rosés and whites, it’s time to get back to red wine. Not that I am a seasonal stickler. I drink plenty of whites in cold weather and reds in warm. But the onset of autumn always makes me crave a red, so next up will be pinot noir from Oregon. In its classic Burgundian form, pinot noir epitomizes so much that wine lovers prize. It is a grape capable of grace, finesse and complexity, yet powerful enough to age for decades, with an unsurpassed ability among reds to express the intricate nuances of a particular place. Many other wine regions around the world have staked their claims as suitable homes for pinot noir. Not all have been consistently successful, but the Willamette Valley of Oregon, in its roughly 50-year history as a wine region, has proved to be one of the best. I’ve enjoyed pinot noirs from the Sonoma Coast, the Santa Cruz Mountains and Santa Barbara, all in California, from South Africa and New Zealand, New York and Argentina. But outside of Burgundy, I have enjoyed none so consistently as those from Oregon.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/8.jpg'
      },
      {
        id: '9',
        title: '52 Places to Go in 2016',
        titleCopy: '52 Places to Go in 2016',
        idea: 'It’s a big world out there, so we’ve narrowed it down for you. From ancient temples to crystalline waters, here are our top destinations to visit this year.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/9.jpg'
      },
      {
        id: '10',
        title: 'Oliver Stone blames hostile America for Russian hacking raids',
        titleCopy: 'Oliver Stone blames hostile America for Russian hacking raids',
        idea: 'If you believe Oliver Stone, America has a more pressing problem than Russian hacking. In fact, according to the Oscar-winning film director, America’s only real problem is its tendency to abuse its immense power. Take the recent theft of the Democratic national committee’s (DNC) emails, exposing fundraising strategies and deriding campaign staff. It was widely considered to be the work of hackers in league with Russian intelligence agencies. Not so, claims Stone, who made his name as a writer/director with films such as Platoon and JFK that questioned conventional American narratives. His latest film, Snowden, focuses on the whistleblower Edward…',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/10.jpg'
      },
      {
        id: '11',
        title: 'Singapore lights way for Brexiteers',
        titleCopy: 'Singapore lights way for Brexiteers',
        idea: 'Soaring more than 650ft above the Singapore waterfront, the cantilevered roof-deck of the Marina Bay Sands hotel and casino complex delivers a commanding view of one of the world’s great economic success stories. The skyscrapers of the city centre carry the names of global finance titans, while out at sea vessels await their turn to pull into one of the planet’s busiest ports. A former British trading post founded by Sir Stamford Raffles in 1819, Singapore has been transformed since it was abruptly forced out of the short-lived Malaysian federation 51 years ago following disputes over race and economics.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/11.jpg'
      },
      {
        id: '12',
        title: 'Capitalism is best for all of us... even Mr Corbyn',
        titleCopy: 'Capitalism is best for all of us... even Mr Corbyn',
        idea: 'The debate about the morality and purpose of capitalism never ends. There are always critics queuing up to attack the free-market system, from governance to equality to the environment. For example, over the summer I read Makers and Takers, by Rana Foroohar. Its subtitle is The Rise of Finance and the Fall of American Business. The author argues that the US economy has been “financialised” by Wall Street. She states that the financial sector generates a quarter of total corporate profits while creating only 4% of jobs, that corporations favour share buybacks over R&D and investment in new plant and…',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/12.jpg'
      },
      {
        id: '13',
        title: 'Go West',
        titleCopy: 'Go West',
        idea: 'There’s an ‘end of season, start of winter’ ambience to the Best of the West Festival, Inveraray Castle’s annual two-day celebration of local food, drink and music. ‘It’s something to do at a time of year when there’s not so much else going on,’ says Virginia Sumsion, who organises the festival’s food events and is on its committee. ‘It’s a beautiful time of year to come to Argyll. The colours are just fantastic on the hills and the surrounding areas, and we can get really lovely weather (if we’re being optimistic).’',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/13.jpg'
      },
      {
        id: '14',
        title: 'Silver lining for Irish cyclists',
        titleCopy: 'Silver lining for Irish cyclists',
        idea: 'Katie-George Dunlevy and Eve McCrystal dug deep to add a silver medal to their tandem time trial gold in the women’s B road race, in the process earning Ireland their 10th medal of the Games. Noelle Lenihan then added another medal with F38 discus bronze. Dunlevy and partner McCrystal finished 59 seconds behind Poland’s Iwona Podkoscielna, who had completed the shortened 69km course, reduced from 84km, in 1 hour, 58 mins 2 secs.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/14.jpg'
      },
      {
        id: '15',
        title: 'Scots against second vote on leaving UK',
        titleCopy: 'Scots against second vote on leaving UK',
        idea: 'Two-thirds of Scots are now opposed to another vote on Scottish independence being staged before Britain leaves the EU, according to a new poll which finds that the post-Brexit referendum lead for the “yes” side has vanished. SNP leader Nicola Sturgeon has said a second independence referendum is “highly likely” after the UK voted to leave the EU against the wishes of a majority in Scotland. But she has previously signalled she does not want to stage it until support for “yes” goes up to about 60%.',
        hide_or_no: true,
        isCollapsed: true,
        picture: 'src/img/15.jpg'
      }
    ];

    me.storage = {
      lists: {"A": [], "B": [], "C": [], "D": [], "E": [], "All": me.thereAre}
    }
  })

  .controller('secondCtrl', ['$scope', 'defaultArticles', function($scope, defaultArticles) {
    var me = this;

    me.displayResult = defaultArticles.storage.lists;

    //Here functionality for scroll
    //Functions for scroll
    var lenA = me.displayResult.A.length;
    var lenB = me.displayResult.B.length;
    var lenC = me.displayResult.C.length;
    var lenD = me.displayResult.D.length;
    var lenE = me.displayResult.E.length;
      $scope.scrollA = false;
      $scope.scrollB = false;
      $scope.scrollC = false;
      $scope.scrollD = false;
      $scope.scrollE = false;

      $scope.ifScroll = function() {
        if (lenA > 4) {
          $scope.scrollA = true;
        }
        else if (lenB > 4) {
          $scope.scrollB = true;
        }
        else if (lenC > 7) {
          $scope.scrollC = true;
        }
        else if (lenD > 3) {
          $scope.scrollD = true;
        }
        else if (lenE > 3) {
          $scope.scrollE = true;
        }
      };

      //Function for check when load
      $scope.ifScroll()
  }])

  .controller('firstController', ['$scope', 'defaultArticles', function($scope, defaultArticles) {
    var me = this;

    //Here are list of allArticles and dictionary of lenght
    me.articles = defaultArticles.storage.lists;

    //Functionality for preview button
      //Do it able to work only if in one of the bowes there are at least one article
        $scope.abilityPreview = true;

        $scope.goNext = function(index) {
          var ifAboveZezo = me.articles.A.length + me.articles.B.length + me.articles.D.length + me.articles.E.length + me.articles.C.length;
          if (ifAboveZezo > 0) {
            $scope.abilityPreview = false;
          }
        };

    //Variables for length for scroll function when back to the page 'home'
      me.lenA = me.articles.A.length;
      me.lenB = me.articles.B.length;
      me.lenC = me.articles.C.length;
      me.lenD = me.articles.D.length;
      me.lenE = me.articles.E.length;
      //Variables for scroll
      $scope.scrollA = false;
      $scope.scrollB = false;
      $scope.scrollC = false;
      $scope.scrollD = false;
      $scope.scrollE = false;
    //Function for scroll
      $scope.ifScroll = function() {
        if (me.lenA > 4) {
          $scope.scrollA = true;
        }
        else if (me.lenB > 4) {
          $scope.scrollB = true;
        }
        else if (me.lenC > 7) {
          $scope.scrollC = true;
        }
        else if (me.lenD > 3) {
          $scope.scrollD = true;
        }
        else if (me.lenE > 3) {
          $scope.scrollE = true;
        }
      };

      //Function for check when load
      $scope.ifScroll();
      $scope.goNext();

    //Here function for collapse all artickles in one time
        $scope.Hide = function() {
          for (var i = 0; i < me.articles.All.length; i++) {
            if (me.articles.All[i].isCollapsed == true) {
              for (var i = 0; i < me.articles.All.length; i++) {
                me.articles.All[i].isCollapsed = false;
              }
            }
          }
        };

    // Additional functionality for creating artickles
        $scope.showID = false;
      //Function for create and add new artickle from user
        $scope.createArticle = function() {
          var addTitle = $scope.ourTitle;
          var addIdea = $scope.ourIdea;
          $scope.whatAdd = {hide_or_no: true, isCollapsed: true, id: $scope.newId, title: addTitle, idea: addIdea};
          me.articles.All.push($scope.whatAdd);
          $scope.newId = $scope.whatAdd.id + 1;
          $scope.ourTitle = '';
          $scope.ourIdea = '';
          $scope.showID = false;
        };
      // Function for auto give index
        $scope.autoIndex = function () {
          $scope.showID = true;
          $scope.newId =  me.articles.All.length + me.articles.A.length + me.articles.B.length + me.articles.D.length + me.articles.E.length + me.articles.C.length + 1;
        };
      // Function for upload images



    // functionality for drop&drag
        $scope.$watch('defaultArticles.storage', function(models) { //Here need to change models to storage
          $scope.modelAsJson = angular.toJson(models, true);
        }, true);
    //Make it short when dragged
      // First function for short
        $scope.indefMe = function(index, tist) {
          if (tist == 'All') {$scope.iAm = me.articles.All[index];}
          else if (tist == 'A') {$scope.iAm = me.articles.A[index];}
          else if (tist == 'B') {$scope.iAm = me.articles.B[index];}
          else if (tist == 'C') {$scope.iAm = me.articles.C[index];}
          else if (tist == 'D') {$scope.iAm = me.articles.D[index];}
          else if (tist == 'E') {$scope.iAm = me.articles.E[index];};
          $scope.iAm.title = $scope.iAm.titleCopy;
          $scope.lengthAll_and_Me = me.articles.All.length;
          $scope.size = calculateSize($scope.iAm.title , {
            font: 'Arial',
            fontSize: '14px'
          })
          $scope.oneLetter = $scope.size.width / $scope.iAm.title.length;

        };
      // Second function for short
        $scope.shortMe = function() {
          $scope.goNext();

          var ourArticleId = $scope.iAm.id;

          for (var i = 0; i < me.articles.A.length; i++) {
            while (ourArticleId == me.articles.A[i].id) {
              me.articles.A[i].title =  me.articles.A[i].titleCopy;
              me.lenA = me.articles.A.length;
              if ($scope.size.width > 273) {
                var letters = Math.round(273 / $scope.oneLetter);
                me.articles.A[i].title = me.articles.A[i].title.slice(0, letters) + "...";
              }
              break;
            };
          };
          for (var i = 0; i < me.articles.B.length; i++) {
            while (ourArticleId == me.articles.B[i].id) {
            me.articles.B[i].title = me.articles.B[i].titleCopy;
              me.lenB =me.articles.B.length;
              if ($scope.size.width > 336) {
                var letters = Math.floor(336 / $scope.oneLetter);
                me.articles.B[i].title = me.articles.B[i].title.slice(0, letters) + "..."
              };
              break
            }
          };
          for (var i = 0; i < me.articles.C.length; i++) {
            while (ourArticleId == me.articles.C[i].id) {
              me.articles.C[i].title = me.articles.C[i].titleCopy;
              me.lenC = me.articles.C.length;
              if ($scope.size.width > 360) {
                var letters = Math.floor(360 / $scope.oneLetter);
                me.articles.C[i].title = me.articles.C[i].title.slice(0, letters) + "...";
              };
              break
            }
          };
          for (var i = 0; i < me.articles.D.length; i++) {
            while (ourArticleId == me.articles.D[i].id) {
              me.articles.D[i].title = me.articles.D[i].titleCopy;
              me.lenD = me.articles.D.length;
              if ($scope.size.width > 360) {
                var letters = Math.floor(360 / $scope.oneLetter);
                me.articles.D[i].title = me.articles.D[i].title.slice(0, letters) + "...";
              };
              break
            }
          };
          for (var i = 0; i < me.articles.E.length; i++) {
            while (ourArticleId == me.articles.E[i].id) {
              me.articles.E[i].title = me.articles.E[i].titleCopy;
              me.lenE = me.articles.E.length;
              if ($scope.size.width > 240) {
                var letters = Math.floor(220 / $scope.oneLetter);
                me.articles.E[i].title = me.articles.E[i].title.slice(0, letters) + "...";
              };
              break
            }
          }

          $scope.ifScroll()
        };


  }]);
