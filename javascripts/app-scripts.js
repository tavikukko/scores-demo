$(document).ready(function() {
        $(function listScores() {
                $.getJSON( "https://spreadsheets.google.com/feeds/list/0Av9InR3y96nBdDZ0Sk5xcTJVYVB0ajBnZlMzZDdfZGc/od6/public/values?alt=json-in-script&callback=?",
                        function (data) {
                                var i = 0;
                                $.each(data.feed.entry, function(i,entry) {
                                        if(i == 0)
                                        {
                                                var head = '<thead>';
                                                head += '<tr>';
                                                head += '<th class="essential persist">Sija</th>';
                                                head += '<th class="essential">Etunimi</th>';
                                                head += '<th class="essential">Sukunimi</th>';
                                                head += '<th>Uusinta</th>';
                                                head += '<th class="essential">Joukkue</th>';
                                                head += '<th>Maa</th>';
                                                head += '<th>Puhdastulos</th>';
                                                head += '<th>Tasoitus</th>';
                                                head += '<th class="essential">Yhteistulos</th>';
                                                head += '<th>S1</th>';
                                                head += '<th>S2</th>';
                                                head += '<th>S3</th>';
                                                head += '<th>S4</th>';
                                                head += '<th>S5</th>';
                                                head += '<th>S6</th>';
                                                head += '<th>Keskiarvo</th>';
                                                head += '<th>Paras</th>';
                                                head += '</tr>';
                                                head += '</thead>';
                                                $('#scores-list').append(head);
                                        }

                                        $('#scores-list').append('<tr class="items" id="item' + i + '"></tr>');
                                        var item = '<td>' + entry.gsx$sija.$t + '</td>';
                                        item += '<td>' + entry.gsx$etunimi.$t + '</td>';
                                        item += '<td>' + entry.gsx$sukunimi.$t + '</td>';
                                        item += '<td>' + entry.gsx$uusinta.$t + '</td>';
                                        item += '<td>' + entry.gsx$joukkue.$t + '</td>';
                                        item += '<td>' + entry.gsx$maa.$t + '</td>';
                                        item += '<td>' + entry.gsx$puhdastulos.$t + '</td>';
                                        item += '<td>' + entry.gsx$tasoitus.$t + '</td>';
                                        item += '<td>' + entry.gsx$yhteistulos.$t + '</td>';
                                        item += '<td>' + entry.gsx$s1.$t + '</td>';
                                        item += '<td>' + entry.gsx$s2.$t + '</td>';
                                        item += '<td>' + entry.gsx$s3.$t + '</td>';
                                        item += '<td>' + entry.gsx$s4.$t + '</td>';
                                        item += '<td>' + entry.gsx$s5.$t + '</td>';
                                        item += '<td>' + entry.gsx$s6.$t + '</td>';
                                        item += '<td>' + entry.gsx$keskiarvo.$t + '</td>';
                                        item += '<td>' + entry.gsx$paras.$t + '</td>';
                                        $('#item' + i).append(item);
                                        i = i + 1;
                                });
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