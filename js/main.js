$seek = $('#seek')
$grow = $('#grow')
$go = $('#go')
$missionText = $('#missionText')
missiontext = "<h3>The Well Foursquare Church inspires members to seek Jesus Christ, grow in the gifts of the Holy Spirit, and go into the world to share the gospel of Jesus Christ</h3>"

$seek.hover(function() {
  $missionText.html("<h3>Matthew 7:7-12.  7 “Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. 8 For everyone who asks receives, and he who seeks finds, and to him who knocks it will be opened.</h3>");
}, function() {
  $missionText.html(missiontext);
});

$grow.hover(function() {
  $missionText.html("<h3>John 15:1-4 “I am the true vine, and My Father is the vinedresser. 2 Every branch in Me that does not bear fruit He takes away;[a] and every branch that bears fruit He prunes, that it may bear more fruit. 3 You are already clean because of the word which I have spoken to you. 4 Abide in Me, and I in you. As the branch cannot bear fruit of itself, unless it abides in the vine, neither can you, unless you abide in Me.</h3>");
}, function() {
  $missionText.html(missiontext);
});

$go.hover(function() {
  $missionText.html("<h3>Matthew 28:18-20 (NKJV) 18 And Jesus came and spoke to them, saying, “All authority has been given to Me in heaven and on earth. 19 Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, 20 teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age.” Amen.</h3>")
}, function() {
  $missionText.html(missiontext);
});
