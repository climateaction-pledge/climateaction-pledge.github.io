$(document).ready(function() {
    $(document).on('can_embed_loaded', function() {
        var $pledgeFormArea = $('#can-form-area-test-tech-workers-support-the-climate-strike');
        var $PledgeForm = $('#can-form-area-test-tech-workers-support-the-climate-strike #can_sidebar');
        var $pledgeText = $('#can-form-area-test-tech-workers-support-the-climate-strike #can_sidebar h4');
        var $pledgeDescription = $('#can-form-area-test-tech-workers-support-the-climate-strike .action_description');
        var $logOutLink = $('#can-form-area-test-tech-workers-support-the-climate-strike #log-out');
        var $actionsText = $('#can-form-area-test-tech-workers-support-the-climate-strike .action_status_running_total');

        function registerHandlers() {
            $logOutLink.on('click', logoutLinkClick);
        }

        function initializeInterface() {
            $pledgeText.addClass('pledge-text');
            $pledgeText.insertBefore($pledgeFormArea);

            var isProbablyMobile = window.innerWidth < 600;

            if (isProbablyMobile) {
                $PledgeForm.insertBefore($pledgeDescription);
            }
        }

        function logoutLinkClick() {
            $pledgeText.hide();
        }

        function replaceActionsText() {
            $actionsText.text($actionsText.text().replace("Actions Taken", "Pledges Made"))
        }

        registerHandlers();
        initializeInterface();
        replaceActionsText();

    });
});
