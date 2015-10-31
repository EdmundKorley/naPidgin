// Quote arrays
var NigerianQuotes = ["Picken wey say him mama no go sleep him self no go sleep", "Fly wey no dey hear advice the follow dead body enter grave", "Cow wey no get tail na God dey help am drive fly", "No matter how u go under water go mess the gbudu-gbudu must come out", "Bullet wey meet face cap no be warning", "If hand shake don pass elbow na fight", "Fowl no dey bubble for night", "Na lizard wey no get sense dey boast for crocodile", "When breeze blow fowl nyash go open", "To wowo no be crime", "Soup wey sweet na money cook am", "I tire no be say I lazy", "Pesin wen go tiff 4 cement store na im know d load wen e wan carry", "Pikin wen use agbada take stat guy go talk wetin e go wear wen e old", "Pikin when no know him mama boyfriend na him dey call am uncle", "Na strong thing when plantain c na im make them call am boli", "Na tey e go tey stammerer go call him mama name", "Even jaguda get oga", "Before you marry woman make u look e mama well because mango nor dey fall far from tree", "Escort me, Escort me, naim slave trade take start", "Na where tree near tree naim monkey dey smart", "A stitch in time, …, dey prevent further tear tear", "A rolling stone ……… na person push am", "Birds of the same feather .… na the same mama born dem", "Pynt wey slack na im dem dey call boxers", "When monkey wear canvass enter town make we know say im get plans", "Na determination dey make okada rider overtake trailer", "If u wake up 4 morning fowl pursue u i beg run o! u no know wetin e carry 4 mind", "Na lazy person dey run go house go pull shirt if dem find him trouble 4 field", "Threaten na water, action na blood!", "Kai kai and water get the same colour but them no get the same taste", "Follow who know road make u no go fall inside hole", "Eye wey dey cry dey see road", "Okro no dey tall pass him owner", "No matter the weight of elephant, e no fit cause earthquake", "Small pikin fit play with the mother breast but e no fit play with the father balls", "The hair stylist wey dem barb vulture no fit am, guinea fowl say na dat kind style e like", "Pig say e no fit make friend with goat bcus say goat no dey baff", "Person wey dey shake coconut tree na him own head e dey shake", "Pig say swagger get level na im make am pack im own balls go back", "Na person wey get something dey know wer e for dey wound am", "I don laff so tey my belle don full dis nyt ...", "If u do anyhow, ur landlord go see anyhow ...", "They no dey tell blind man say war don start ...", "Wetin make babalawo do advert make u know say him don hammer ...", "Like play, like play, buttafly dey enta bush", "Man wey naked no dey put hand for pocket", "Chicken wey run way from Borno go Ibadan go still end up inside pot of soup", "Today’s newspaper na tomorrow Suya wrap", "Cow wey dey in a hurry to go America go come back as corn beef", "Akara and moin moin get the same parent na wetin dey pass tru make dem different", "Wetin consign agbero with twitter handle, or malu/cow with face cap?", "If life dey show you pepper, my guy make pepper soup from am", "I get am before no be property", "If person too tey for party e go follow dem wash plate", "Rolling stone, of course na person push am now!", "Craze no hard to form,na the trekking be wahala", "No matter how hot your tempa be, e no fit boil beans", "Every mallam with em own kettle, every aboki with em own radio", "You no need cutlery to chop slap", "Opolo eye no be open eye", "Leave matter for Mathias and Sabi for Sabinus", "Bring suya, bring suya …… na cow body dey suffer am", "E go better na e go better, na im make ibo man still dey Kano", "Na from play play dem dey form PLAYER", "Pikin wen use agbada take stat guy go talk wetin e go wear wen e old", "The water wey dem use take make eba can never be recovered back", "Nearly no dey kill bird", "Fly wey no get special adviser na im dey folow dead bodi enta grave", "No matter how lizard dey do press up, e no go get chest like aligator", "The cassava today fit be gari tomorrow", "If mad man don beat ur mama before, if she see mechanic she go run …", "Jollof Rice wey dey for d bottom of pot 2day go dey for top of cooler 2moro", "Anytime wey man or woman take wakeup, na that time be im morning", "Fowl wey dey carry for head no dey know say to waka na work", "Dem say if your neighbour bear bear catch fire, you go quick soak your own inside water", "Person wey borrow cloth go party no dey dance too much", "Who read na im serious, who pass na im know book", "Fly wey land on top butter, think sayim be butterfly", "Person wey borrow cloth go party no dey dance too much", "It’s a small world, Oya make your papa come trek am now!", "Cockroach wey dey form swagger … if im summersault reach fowl place na for lindaikeji dey go read im tori", "He who lives in a glass house … pepper don rest for am", "A bird in hand … na better suya be that"];

// pull out a random quote as a f(x) of given array
// use given array's length for indexing purposes
function randomQuote(quoteArr) {
  return quoteArr[Math.floor(Math.random() * (quoteArr.length))];
}

// array of random bright colors
var bright_colors = ["#7FFF00", "#FFD700", "#00FFFF", "#FF0000", "#9933FF", "#FF00FF", "#FF0082", "#FF4500", "#FF33EF", "#00FaFa", "#00FF00", "#D2FF1E"];

function randomColor() {
  return bright_colors[Math.floor(Math.random() * (bright_colors.length))];
}

function colorText(text, words) {

    // post to html
    // write random pidgin quote
    var div = document.getElementById('qouteText');
    div.innerHTML = "";
    div.innerHTML += randomQuote(NigerianQuotes);

    // set up for word coloring
    var text = div.innerHTML;
    var words = div.innerHTML.split(" ");

    // replace non-colored words with colored words.
    div.innerHTML = "";

    // add span and 'span' class to each word (in words array).
    for (var i = 0; i < words.length; i++) {

      div.innerHTML += '<span class="colored' + '">' + words[i] + '</span> ';

      // set randomColor() for text upon hover
      $(".colored").hover(
        function() {
          $(this).css("color", randomColor());
        },
        function() {
          $(this).css("color", "black");
        }
      );

    }

  } // colorText

function colorRandomQuote() {

    // post to html
    // write random pidgin quote
    var div = document.getElementById('qouteText');
    div.innerHTML = "";
    div.innerHTML += randomQuote(NigerianQuotes);

    // set up for word coloring
    var text = div.innerHTML;
    var words = div.innerHTML.split(" ");

    // color them words
    colorText(text, words);

  } //cRQ

colorRandomQuote();
