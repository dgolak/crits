var sector_load = true;
$(document).ready(function() {
    $("#sector_list").tagit({
        allowSpaces: true,
        allowDuplicates: false,
        removeCOnfirmation: true,
        showAutocompleteOnFocus: true,
        afterTagAdded: function(event, ui) {
            var my_sectors = $("#sector_list").tagit("assignedTags");
            update_sectors(my_sectors);
        },
        afterTagRemoved: function(event, ui) {
            var my_sectors = $("#sector_list").tagit("assignedTags");
            update_sectors(my_sectors);
        },
        onTagClicked: function(event, ui) {
            var url = sector_search + "?search_type=bucket_list&force_full=1&search=Search&q=" + ui.tagLabel;
            window.location.href = url;
        },
        availableTags: (function() {
            var tmp = [];
            $.ajax({
                async: false,
                type: "POST",
                url: sector_list,
                data: {},
                datatype: 'json',
                success: function(data) {
                    tmp = data;
                }
            });
            return tmp;
        })(),
        autocomplete: {
            delay: 0,
            minLength: 0,
        },
    });
    function update_sectors(my_sectors) {
        if (!sector_load) {
            var oid = subscription_id;
            var itype = subscription_type;
            var data = {
                        'oid': oid,
                        'sectors': my_sectors.toString(),
                        'itype': itype
            };
            $.ajax({
                type: "POST",
                url: sector_modify,
                data: data,
                datatype: 'json',
            });
        }
    }
    $(document).trigger('enable_sectors');
}); //document.ready
