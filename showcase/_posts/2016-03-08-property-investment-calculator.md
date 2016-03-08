---
layout: page
title: Property Investment Calculator
---

<!-- scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.8/clipboard.min.js"></script>
<script src="/js/showcase/bootstrap-checkbox.min.js"></script>
<script src="/js/showcase/jquery.formatCurrency-1.4.0.min.js"></script>
<script src="/js/showcase/jquery.formatCurrency.en-GB.js"></script>

<!-- custom js -->
<script src="/js/showcase/property-investment-calculator.js"></script>

<style type="text/css">
	.copy {
		cursor: pointer;
	}
</style>

<h2>Property Investment Calculator</h2>

<p>At Cocept we always enjoy building useful tools. Some of our clients are property investors, and in the spirit of being helpful, we have built this Property Investment Calculator that will perform all of the calculations you may be interested in when assessing if a potential investment is worth your while.</p>

<h2>Enter your figures below</h2>

<div id="settings" class="form-horizontal">

	<h3>Income</h3>

	<div class="form-group">
		<label for="number_of_tenants" class="col-sm-5 control-label">
			Number of Tenants 
			<a href="#" data-toggle="popover" title="Number of Tenants help" 
				data-content="This will be the number of paying tenants in the property" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">#</span>
			<input type="number" class="form-control" id="number_of_tenants" min="1" value="5" />
		</div>
	</div>
	<div class="form-group">
		<label for="rent_per_tenant_per_week" class="col-sm-5 control-label">
			Rent per tenant per week 
			<a href="#" data-toggle="popover" title="Rent per tenant per week help" 
				data-content="The amount each tenant pays per week" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">£</span>
			<input type="number" class="form-control" id="rent_per_tenant_per_week" value="100" />
		</div>
	</div>

	<h3>Expenses</h3>

	<div class="form-group">
		<label for="yearly_bills" class="col-sm-5 control-label">
			Yearly bills 
			<a href="#" data-toggle="popover" title="Yearly bills help" 
				data-content="The total amount of bills payable per year (council tax, water, electricity etc)" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">£</span>
			<input type="number" class="form-control" id="yearly_bills" value="2000" />
		</div>
	</div>
	<div class="form-group">
		<label for="voids" class="col-sm-5 control-label">
			Voids
			<a href="#" data-toggle="popover" title="Voids help" 
				data-content="The percentage of the rent per year that will be missed due to empty rooms. Usually estimated at 10%" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">%</span>
			<input type="number" class="form-control" id="voids" value="10" />
		</div>
	</div>
	<div class="form-group">
		<label for="management" class="col-sm-5 control-label">
			Management
			<a href="#" data-toggle="popover" title="Management help" 
				data-content="The cost of hiring a property managing agent. Usually between 8% and 12%" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">%</span>
			<input type="number" class="form-control" id="management" value="10" />
		</div>
	</div>
	<div class="form-group">
		<label for="yearly_maintenance" class="col-sm-5 control-label">
			Yearly Maintenance 
			<a href="#" data-toggle="popover" title="Yearly Maintenance help" 
				data-content="The amount paid per year to maintain the property" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">£</span>
			<input type="number" class="form-control" id="yearly_maintenance" value="1000" />
		</div>
	</div>

	<h3>Capital Investment</h3>

	<div class="form-group">
		<label for="property_purchase_price" class="col-sm-5 control-label">
			Property purchase price 
			<a href="#" data-toggle="popover" title="Property purchase price help" 
				data-content="How much you will purchase the property for" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">£</span>
			<input type="number" class="form-control" id="property_purchase_price" value="70000" />
		</div>
	</div>
	<div class="form-group">
		<label for="conversion_cost" class="col-sm-5 control-label">
			Conversion cost 
			<a href="#" data-toggle="popover" title="Conversion cost help" 
				data-content="The amount you will spend after purchase to get it ready to be let" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">£</span>
			<input type="number" class="form-control" id="conversion_cost" value="50000" />
		</div>
	</div>

	<h3>Mortgage Information</h3>

	<div class="form-group">
		<label for="mortgage_type" class="col-sm-5 control-label">
			Mortgage Type
			<a href="#" data-toggle="popover" title="Mortgage type help" 
				data-content="Repayment mortgages pay back the entire sum over the term. Interest only mortgages only pay the interest, and you must repay the principle at the end of the term." data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input id="mortgage_type" type="checkbox" data-off-class="btn-primary" data-on-class="btn-primary">
			<script>
			$('#mortgage_type').checkboxpicker({
  			    offLabel: 'Repayment',
			    onLabel: 'Interest Only'
			});
			</script>
		</div>
	</div>
	<div class="form-group">
		<label for="mortgage_valuation_basis" class="col-sm-5 control-label">
			Valuation Basis
			<a href="#" data-toggle="popover" title="Valuation basis help" 
				data-content="A Bricks and Motar valuation will value the property based on how much it would sell for. A commercial valuation values the property based on the gross annual income multiplied by the commercial multiplier." data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input id="mortgage_valuation_basis" type="checkbox" data-off-class="btn-primary" data-on-class="btn-primary">
			<script>
			$('#mortgage_valuation_basis').checkboxpicker({
  			    offLabel: 'Bricks and Motar',
			    onLabel: 'Commercial'
			});
			</script>
		</div>
	</div>
	<div class="form-group" id="commercial_multiplier__container">
		<label for="commercial_multiplier" class="col-sm-5 control-label">
			Commercial Multiplier 
			<a href="#" data-toggle="popover" title="Conversion cost help" 
				data-content="The number the yearly rent will be multiplied by to get the commercial valuation. In Birmingham it's typically 7, while in London it's between 10 and 12." data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">#</span>
			<input type="number" class="form-control" id="commercial_multiplier" value="7" />
		</div>
	</div>
	<div class="form-group" id="post_conversion_valuation__container">
		<label for="post_conversion_valuation" class="col-sm-5 control-label">
			Post Conversion Valuation
			<a href="#" data-toggle="popover" title="Post conversion valuation help" 
				data-content="The amount the property could sell for on the open market once conversion has been completed" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">#</span>
			<input type="number" class="form-control" id="post_conversion_valuation" value="100000" />
		</div>
	</div>
	<div class="form-group">
		<label for="mortgage_cash_out" class="col-sm-5 control-label">
			Pull Out Extra Money?
			<a href="#" data-toggle="popover" title="Pull out extra money help" 
				data-content="Say you invested a total of £120,000 but are able to mortgage for £140,000. Checking yes will mean you want to mortgage for the full £140,000 to pull out the extra £20,000. Checking no will mean you just want to borrow £120,000 to get back all of the money you put in." data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input id="mortgage_cash_out" type="checkbox" data-off-class="btn-primary" data-on-class="btn-primary">
			<script>
			$('#mortgage_cash_out').checkboxpicker();
			</script>
		</div>
	</div>
	<div class="form-group">
		<label for="mortgage_ltv" class="col-sm-5 control-label">
			Mortgage Loan to Value (LTV)
			<a href="#" data-toggle="popover" title="Mortgage LTV percentage help" 
				data-content="The amount of the valuation that the bank will offer to lend you. Usually 65% to 75%" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">%</span>
			<input type="number" min="0" max="100" step="1" class="form-control" id="mortgage_ltv" value="65" />
		</div>
	</div>
	<div class="form-group">
		<label for="mortgage_apr" class="col-sm-5 control-label">
			Mortgage APR
			<a href="#" data-toggle="popover" title="Mortgage APR percentage help" 
				data-content="The interest payable to the bank per year. Usually 3.5% to 5.5% plus the Bank of England base rate" data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">%</span>
			<input type="number" min="0" max="20" step="0.25" class="form-control" id="mortgage_apr" value="6" />
		</div>
	</div>
	<div class="form-group">
		<label for="mortgage_term" class="col-sm-5 control-label">
			Mortgage term in years 
			<a href="#" data-toggle="popover" title="Mortgage term in years help" 
				data-content="The number of years the mortgage will last. Usually 20 to 25." data-trigger="focus">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<span class="input-group-addon">#</span>
			<input type="number" class="form-control" id="mortgage_term" value="20" />
		</div>
	</div>

</div>

<h2>Results</h2>

<div id="results" class="form-horizontal">

	<div class="form-group">
		<label for="yearly_rental_income" class="col-sm-5 control-label">
			Yearly Rental Income 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Yearly Rental Income help" 
				data-content="Yearly revenue from room rental">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="yearly_rental_income" />
			<span class="input-group-addon copy" data-clipboard-target="#yearly_rental_income">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="yearly_expenses" class="col-sm-5 control-label">
			Yearly expenses 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Yearly expenses help" 
				data-content="Total yearly expenses (bills, voids, management, maintenace)">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="yearly_expenses" />
			<span class="input-group-addon copy" data-clipboard-target="#yearly_expenses">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="total_investment" class="col-sm-5 control-label">
			Total investment 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Total investment help" 
				data-content="Total amount of capital invested = purchase price + conversion cost">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="total_investment" />
			<span class="input-group-addon copy" data-clipboard-target="#total_investment">Copy</span>
		</div>
	</div>
	<div class="form-group" id="commercial_valuation__container">
		<label for="commercial_valuation" class="col-sm-5 control-label">
			Commercial Valuation 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Commercial Valuation help" 
				data-content="A commercial valuation is calculated by multiplying yearly revenue by the commercial multiplier. This is the value that the bank will base it's mortgage offer on.">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="commercial_valuation" />
			<span class="input-group-addon copy" data-clipboard-target="#commercial_valuation">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="finance_available" class="col-sm-5 control-label">
			Finance available 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Finance available help" 
				data-content="The amount of money you can borrow against the property. For a bricks and mortar valuation, multiply the post conversion valuation by the Mortgage Loan to Value ratio. For commercial mortgages, multiply the commercial valuation by the Mortgage Loan to Value ratio.">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="finance_available" />
			<span class="input-group-addon copy" data-clipboard-target="#finance_available">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="money_left_in" class="col-sm-5 control-label">
			Money left in 
			<a href="#" data-toggle="popover" title="Money left in help" data-trigger="focus" 
				data-content="The amount of money left in the deal. For example if you invest a total of £100,000 and can only get a mortgage for £80,000, you must leave £20,000 in the deal.">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="money_left_in" />
			<span class="input-group-addon copy" data-clipboard-target="#money_left_in">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="money_pulled_out" class="col-sm-5 control-label">
			Money pulled out 
			<a href="#" data-toggle="popover" title="Money pulled out help" data-trigger="focus" 
				data-content="If you are able to mortgage for more than your total investment, you can pull extra money out">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="money_pulled_out" />
			<span class="input-group-addon copy" data-clipboard-target="#money_pulled_out">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="mortgage_repayments_yearly" class="col-sm-5 control-label">
			Mortgage repayments yearly 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Mortgage repayments yearly help" 
				data-content="The amount you will pay each year to the bank for your mortgage">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="mortgage_repayments_yearly" />
			<span class="input-group-addon copy" data-clipboard-target="#mortgage_repayments_yearly">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="mortgage_repayments_monthly" class="col-sm-5 control-label">
			Mortgage repayments monthly 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Mortgage repayments monthly help" 
				data-content="The amount you will pay each month to the bank for your mortgage">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="mortgage_repayments_monthly" />
			<span class="input-group-addon copy" data-clipboard-target="#mortgage_repayments_monthly">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="profit_yearly" class="col-sm-5 control-label">
			Profit yearly 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Profit yearly help" 
				data-content="The net profit after expenses and mortgages per year">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="profit_yearly" />
			<span class="input-group-addon copy" data-clipboard-target="#profit_yearly">Copy</span>
		</div>
	</div>
	<div class="form-group">
		<label for="profit_monthly" class="col-sm-5 control-label">
			Profit monthly 
			<a href="#" data-toggle="popover" data-trigger="focus" title="Profit monthly help" 
				data-content="The net profit after expenses and mortgages per month">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		<div class="col-sm-7 input-group">
			<input type="text" class="form-control" disabled="disabled" id="profit_monthly" />
			<span class="input-group-addon copy" data-clipboard-target="#profit_monthly">Copy</span>
		</div>
	</div>

</div>
