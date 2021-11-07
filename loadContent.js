let navItem = [
    ["track_changes", "Dashboard"],
    ["people_outline", "Patients","active"],
    ["calendar_today", "Schedule"],
    ["contact_phone", "On Call Records"],
    ["record_voice_over", "Voice Commands"],
    ["table_view", "Reports"],
    ["manage_accounts", "Admin"]
];


let patientList = [
    ["smith", "trevor", "04/12/98", "male", "active", 0],
    ["blogs", "trank", "11/29/92", "male", "active", 1],
    ["edlehouser", "tudy", "01/08/91", "female", "inactive", 2],
    ["van vleet", "joe", "03/15/88", "male", "active", 3],
    ["de sauza", "emmanuel", "08/24/83", "male", "inactive", 4],
    ["beach", "stephanie", "02/02/82", "female", "inactive", 5],
    ["lindwall", "david", "08/17/76", "male", "active", 6]
];

function getNavList(){
    for(var i in navItem) {
        
        let isActive = (navItem[i][2] == "active") ? "active" : "";

        document.write('<li class="navlist-item '+ isActive+'">');
        document.write('<div class="icon-container flex-center">');
        document.write(' <span class="material-icons material-icons-outlined md-dark">'+ navItem[i][0] + '</span>');
        document.write('</div>');
        document.write('<div class="navlist-title">' + navItem[i][1] + '</div>');
        document.write('</li>');
    }; 
}


function getPatientList(){
    for(var p in patientList) {

        document.write('<tr class="round-borders patientRow">');
        document.write('<td><div class="checkbox focus">');
        document.write('<input type="checkbox"><span class="check flex-center"><i class="checked-icon" data-feather="check"></i></span></div></td> ');
        document.write('<td><span>' + patientList[p][0] + '</span></td>');
        document.write('<td><span>' + patientList[p][1] + '</span></td>');
        document.write('<td><span>' + patientList[p][2] + '</span></td>');
        document.write('<td><span>' + patientList[p][3] + '</span></td>');
        document.write('<td class="status font-' + patientList[p][4] + '"><span class="uppercase">' + patientList[p][4] + '</span></td>');
        document.write('<td class="'+ patientList[p][4] + '"></td>');
        document.write('</tr><tr class="spacer"></tr>');
  
    }
}


$(document).ready(function(){
    $('.checkbox input[type="checkbox"]').click(function(){
        $(this).parent().toggleClass('on');
        $(this).parents().eq(2).toggleClass('selected');
    });

    $('.toggle input[type="checkbox"]').click(function(){
        $(this).parent().toggleClass('on');
    });

    $('#selectAll').click(function(){

        if ($(this).parent().hasClass('on')) {
            $('.checkbox').removeClass('on');
            $('.checkbox').addClass('on');
            $('.patientRow').addClass('selected');
        } else {
            $('.checkbox').removeClass('on');
            $('.patientRow').removeClass('selected');
        }

    });
});

