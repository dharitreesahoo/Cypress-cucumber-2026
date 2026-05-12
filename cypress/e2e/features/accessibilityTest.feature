Feature: AccessibilityO2

    @accessibility
    Scenario: Successful login for accessibility
        Given I open the login page
        When I enter valid credentials
        Then I should see the dashboard
        Then page should be accessible