$(document).ready(function($) {
    $(document).on('can_embed_loaded', function() {
        var $pledgeFormArea = $('#can-form-area-test-tech-workers-support-the-climate-strike');
        var $PledgeForm = $('#can_sidebar');
        var $pledgeText = $('#can_sidebar h4');
        var $actionTitle = $('.entry-title');
        var $pledgeImage = $('.pledge-image');
        var $pledgeDescription = $('.action_description');

        function initializeInterface() {
            $pledgeText.addClass('pledge-text');
            $pledgeText.insertBefore($pledgeFormArea);
            $pledgeImage.insertBefore($actionTitle).removeClass('hidden');

            var isProbablyMobile = window.innerWidth < 600;

            if (isProbablyMobile) {
                $PledgeForm.insertBefore($pledgeDescription);
            }

        }

        initializeInterface();

    });
});
