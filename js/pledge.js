$(document).ready(function() {
    $(document).on('can_embed_loaded', function() {
        var $pledgeFormArea = $('#can-form-area-test-tech-workers-support-the-climate-strike');
        var $PledgeForm = $('#can_sidebar');
        var $pledgeText = $('#can_sidebar h4');
        var $actionTitle = $('.entry-title');
        var $pledgeDescription = $('.action_description');
        var $logOutLink = $('#log-out');

        function registerHandlers() {
            $logOutLink.on('click', logoutLinkClick);
        }

        function initializeInterface() {
            $pledgeText.addClass('pledge-text');
            $pledgeText.insertBefore($pledgeFormArea);

            renderPledgeImage();

            var isProbablyMobile = window.innerWidth < 600;

            if (isProbablyMobile) {
                $PledgeForm.insertBefore($pledgeDescription);
            }
        }

        function logoutLinkClick() {
            $pledgeText.hide();
            $('.pledge-image').hide();
            renderPledgeImage();
        }

        function renderPledgeImage() {
            var $pledgeImage = buildPledgeImage();
            $pledgeImage.insertBefore($actionTitle);
        }

        // We need to do this dynamically so that we can re-do it when someone clicks the logout button
        function buildPledgeImage() {
            return $('<img src="/img/climate-action-tech-pledge.png" alt="Join the Pledge" class="pledge-image"/>');
        }

        registerHandlers();
        initializeInterface();

    });
});
