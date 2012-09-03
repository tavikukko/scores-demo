$(document).ready(function() {
        $(function listScores() {
                $.getJSON( "https://spreadsheets.google.com/feeds/list/0Av9InR3y96nBdFpBRnNCMU9ENFF0NEZxMEN5dXdEQVE/od6/public/values?alt=json-in-script&callback=?",
                        function (data) {
                                var x = 0;
                                $.each(data.feed.entry, function(i,entry) {
                                        if(x == 0)
                                        {
                                                var head = '<thead>';
                                                head += '<tr>';
                                                head += '<th class="essential persist">Sija</th>';
                                                head += '<th class="essential">Nimi</th>';
                                                head += '<th class="essential">Seura</th>';
                                                head += '<th>Ryhmä</th>';
                                                head += '<th class="essential">Luokka</th>';
                                                head += '<th>Keilaajan keskiarvo</th>';
                                                head += '<th>Sukupuoli</th>';
                                                head += '<th>Liitto</th>';
                                                head += '<th class="essential">Tulos</th>';
                                                head += '<th>Tasoitus</th>';
                                                head += '</tr>';
                                                head += '</thead>';
                                                $('#scores-list').append(head);
                                        }

                                        $('#scores-list').append('<tr class="items" id="item' + x + '"></tr>');
                                        var item = '<td></td>';
                                        item += '<td>' + entry.gsx$nimi.$t + '</td>';
                                        item += '<td>' + entry.gsx$seura.$t + '</td>';
                                        item += '<td></td>';
                                        item += '<td>' + entry.gsx$luokka.$t + '</td>';
                                        item += '<td>' + entry.gsx$keilaajankeskiarvo.$t + '</td>';
                                        item += '<td>' + entry.gsx$sukupuoli.$t + '</td>';
                                        item += '<td>' + entry.gsx$liitto.$t + '</td>';
                                        item += '<td>' + entry.gsx$tulos.$t + '</td>';
                                        item += '<td>' + entry.gsx$tasoitus.$t + '</td>';
                                        $('#item' + x).append(item);
                                        x = x + 1;
                                });
                          alert(x);
                        }
                );
        });

        $(function listInfo() {
                $.getJSON( "https://spreadsheets.google.com/feeds/list/0Av9InR3y96nBdDZ0Sk5xcTJVYVB0ajBnZlMzZDdfZGc/od7/public/values?alt=json-in-script&callback=?",
                        function (data) {
                                var x = 0;
                                $.each(data.feed.entry, function(i,entry) {
                                        if(x == 0)
                                        {
                                                var desc = '<h1>' + entry.gsx$nimi.$t + '</h1>';
                                                desc += '<p>' + entry.gsx$kuvaus.$t + '</p>';
						desc += '<h2>Halli</h2><p>' + entry.gsx$halli.$t + '</p>';
                                                desc += '<h2>Erät</h2><p>' + entry.gsx$erät.$t + '</p>';
						$('#desc').append(desc);
                                        }
                                        x = x + 1;
                                });
                        }
                );
        });


});