<template>
   <div class="container">
        <div class="container">
            <div id="what" class="page-header col-lg-12 col-md-12 col-sm-12 ">
                <h3>Work<small> 2017.</small></h3>
            </div>
        </div>
        
           <div class="container">
            <h3>Case Study for VMS - Monochrome</h3>
          
            <img class="col-lg-6 col-md-6 col-sm-6 col-xs-12" src="static/buddybuy01.png">
           <div class="col-lg-6 ">
            <p>Monochrome developed an API for PCMS VMS. The core purpose of the API is to manage a promotions engine. Each promotion within the VMS has a set of configurations that can managed via REST commands on the API. Similarly, customers can be subscribed to promotions. Each subscription is assigned a voucher by generating a unique code that is saved to the customer model (automated through the API).</p>
            <p><strong>Core Functions</strong></p>
                <ul>
                    <li>Create and Save Promotions</li>
                    <li>Create and Validate Subscriptions</li>
                    <li>Create and Validate Vouchers</li>
                    <li>Create and Validate Triggers</li>
                    <li>Redeem vouchers</li>
                    <li>Reports (CSV)</li>
                </ul>
            </div>
           </div>
           <div class="container">
            <p><strong> API Structure</strong></p>
            <p>VMS uses REST architecture to expose its API. Every separated class of object has its own endpoint. Every endpoint is responsible to make the basic CRUD (create, read, update, delete) operations on the corresponding object or objects.</p>
            <p>REST architecture follows the logical structures of the underlying code. This is why VMS API endpoints might be nested.</p>
            <p>As an example the Promotion API is responsible for setting up a promotion(Voucher Definition), modifying it, listing it and finally deleting it. All this works using the same URL but different HTTP verbs or CRUD operations.</p>
            <p>GET /api/v2/promotions list</p>
            <p>POST /api/v2/promotions create</p>
            <p>GET /api/v2/promotions/PROMOTION_ID read</p>
            <p>PUT /api/v2/promotions/PROMOTION_ID update</p>
            <p>DELETE/api/v2/promotions/PROMOTION_ID delete</p>
            <p>Integrations</p>
            <p>VMS integrates with POS(point of sale) systems to allows redemptions through specific channels managed by the API. Each redemption request is marked successful given specific criteria.</p>
            <p>Does the request contain:</p>
            <ul>
                <li>A valid customer record</li>
                <li>A valid promotion</li>
                <li>Eligibility lookup on voucher</li>
            </ul>
            <p>Validity checks are performed through the API on all redemption requests and follow the following workflow.</p>
            </div>
            <div class="container">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h3>Cumulative Spend Validator</h3>
                <p>This validator works as the Applicable Cumulative Spend Validator. It ensures that promotion&rsquo;s cumulative_spend_threshold &lt;= voucher&rsquo;s cumulative_spend. Cumulative_spend of vouchers can be changed through the Voucher Endpoint update with increase_cumulative_spend_by parameter.</p>
                <h3>Issuance Validator</h3>
                <p>Issuance Validator ensures that the voucher is attached to the customer (subscriber) through a subscription record. VMS allows promotions to have unissued vouchers, that shouldn&rsquo;t be redeemed.</p>
                <h3>Period Validator</h3>
                <p>Period Validator ensures that the actual time of the query is between promotion&rsquo;s vouchers_valid_from and vouchers_valid_to attributes.</p>
                <h3>Recurrence Validator</h3>
            <p>Recurrence Validator ensures voucher&rsquo;s recurs_at &lt;= actual time of query. Recurs_at is updated upon successful voucher redemption when VMS calculates recurs_at adding the number of hours specified in promotion&rsquo;s voucher_recurrence_hours to the time of redemption.</p>
            </div>
            <img class="col-lg-6 col-md-6 col-sm-6 col-xs-12" src="static/buddybuy03.png">
            </div>
            
            
            <h3>Authentication</h3>
            <p>VMS relies on the industry standard OAuth2 protocol for token exchange and authentication.</p>
            <p><strong>OAuth2 based workflow</strong></p>
            <p>In this workflow, VMS behaves as an OAuth2 Authorisation server and Resource server. VMS follows the OAuth2 specs by using a matured library called<a href="https://github.com/doorkeeper-gem/doorkeeper">Doorkeeper</a>.</p>
            <p>What steps are in this workflow?</p>
            <ul>
                <li>Authentication</li>
                <li>Resource access</li>
            </ul>
            <h3>Role system</h3>
            <p>VMS implements a role system for access control. Currently there are four roles in the system:</p>
            <ul>
                <li>Client admin</li>
                <li>Marketing manager</li>
                <li>Marketeer</li>
                <li>Customer Support</li>
            </ul>
            <p>Each endpoint is protected given the correct access rights by role using OAuth2 workflows.</p>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
   

</style>