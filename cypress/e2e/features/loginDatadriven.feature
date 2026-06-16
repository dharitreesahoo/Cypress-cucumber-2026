Feature: LoginDataDriven
    @smoke @regression
    Scenario Outline: Successful login
        Given I open the login page
        When I enter username "<username>" and password "<password>"
        # Then I should see the dashboard

        Examples:
            | username       | password |
            | user1@test.com | pass123  |
            | admin@test.com | admin456 |
            | demo@test.com  | demo789  |