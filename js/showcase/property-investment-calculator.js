// add custom function to jquery to return the value having been sanitized (remove percentage sign etc)
$.fn.valSanitized = function(){
    var value = $(this).val();
    return value.replace('%', '');
};

// add custom function to jquery to return the value having been sanitized (remove percentage sign etc)
$.fn.valInt = function(){
    var value = $(this).valSanitized();
    if(value == "")
    	value = 0;
    return parseInt(value);
};

// get an input value as a percent (0-1)
$.fn.valPercent = function(){
	return $(this).valInt() / 100;
}

function PMT(ir, np, pv, fv, type) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return -(pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;
}

var PropertyInvestmentCalculator = function(){ }

PropertyInvestmentCalculator.prototype.calculate = function(){
	// get elements
	var setting_number_of_tenants_elem = $('#number_of_tenants');
	var setting_rent_per_tenant_per_week_elem = $('#rent_per_tenant_per_week');
	var setting_yearly_bills_elem = $('#yearly_bills');
	var setting_voids_elem = $('#voids');
	var setting_management_elem = $('#management');
	var setting_yearly_maintenance_elem = $('#yearly_maintenance');
	var setting_property_purchase_price_elem = $('#property_purchase_price');
	var setting_conversion_cost_elem = $('#conversion_cost');
	var setting_commercial_multiplier_elem = $('#commercial_multiplier');
	var setting_post_conversion_valuation_elem = $('#post_conversion_valuation');
	var setting_mortgage_cash_out_elem = $('#mortgage_cash_out');
	var setting_mortgage_ltv_elem = $('#mortgage_ltv');
	var setting_mortgage_apr_elem = $('#mortgage_apr');
	var setting_mortgage_term_elem = $('#mortgage_term');

	var result_yearly_rental_income_elem = $('#yearly_rental_income');
	var result_yearly_expenses_elem = $('#yearly_expenses');
	var result_total_investment_elem = $('#total_investment');
	var result_commercial_valuation_elem = $('#commercial_valuation');
	var result_finance_available_elem = $('#finance_available');
	var result_money_left_in_elem = $('#money_left_in');
	var result_money_pulled_out_elem = $('#money_pulled_out');
	var result_mortgage_type_elem = $('#mortgage_type');
	var result_mortgage_valuation_basis_elem = $('#mortgage_valuation_basis');
	var result_mortgage_repayments_yearly_elem = $('#mortgage_repayments_yearly');
	var result_mortgage_repayments_monthly_elem = $('#mortgage_repayments_monthly');
	var result_profit_yearly_elem = $('#profit_yearly');
	var result_profit_monthly_elem = $('#profit_monthly');

	// toggle visibility
	var mortgage_valuation_basis = result_mortgage_valuation_basis_elem.prop('checked') ? 'commercial' : 'bricks_and_mortar';
	if(mortgage_valuation_basis == 'commercial'){
		$('#commercial_multiplier__container').show();
		$('#commercial_valuation__container').show();
		$('#post_conversion_valuation__container').hide();
	}
	else{
		$('#commercial_multiplier__container').hide();
		$('#commercial_valuation__container').hide();
		$('#post_conversion_valuation__container').show();
	}

	// yearly rental income
	var yearly_rental_income = setting_number_of_tenants_elem.valInt() * setting_rent_per_tenant_per_week_elem.valInt() * 52;
	result_yearly_rental_income_elem.val(yearly_rental_income);

	// yearly expenses
	var yearly_expenses = setting_yearly_bills_elem.valInt() // bills
							+ (yearly_rental_income * setting_voids_elem.valPercent()) // voids
							+ (yearly_rental_income * setting_management_elem.valPercent()) // management
							+ setting_yearly_maintenance_elem.valInt() // maintenance
	result_yearly_expenses_elem.val(yearly_expenses);

	// total investment
	var total_investment = setting_property_purchase_price_elem.valInt() + setting_conversion_cost_elem.valInt();
	result_total_investment_elem.val(total_investment);

	// commercial valuation
	var commercial_valuation = yearly_rental_income * setting_commercial_multiplier_elem.valInt();
	result_commercial_valuation_elem.val(commercial_valuation);

	// finance available
	var mortgage_ltv = setting_mortgage_ltv_elem.valPercent();
	if(mortgage_valuation_basis == 'commercial'){
		var finance_available = commercial_valuation * mortgage_ltv;
	}
	else if (mortgage_valuation_basis == 'bricks_and_mortar') {
		var finance_available = setting_post_conversion_valuation_elem.valInt() * mortgage_ltv;
	}
	result_finance_available_elem.val(finance_available);

	// money left in
	var money_left_in = 0;
	if(finance_available < total_investment)
		money_left_in = total_investment - finance_available;
	result_money_left_in_elem.val(money_left_in);

	// money pulled out
	var mortgage_cash_out = setting_mortgage_cash_out_elem.prop('checked');
	var money_pulled_out = 0;
	if(mortgage_cash_out == true && finance_available > total_investment)
		money_pulled_out = finance_available - total_investment;
	result_money_pulled_out_elem.val(money_pulled_out);

	// mortgage repayments monthly
	var mortgage_term = setting_mortgage_term_elem.valInt();
	var mortgage_term_months = mortgage_term * 12;
	var mortgage_apr = setting_mortgage_apr_elem.valPercent();
	var mortgage_apr_monthly = mortgage_apr / 12;
	var mortgage_type = result_mortgage_type_elem.prop('checked') ? 'interest_only' : 'repayment';

	if(finance_available > total_investment && mortgage_cash_out == true){
		var mortgage_principle = finance_available;
	}
	else if (finance_available > total_investment && mortgage_cash_out == false){
		var mortgage_principle = total_investment;
	}
	else if (finance_available < total_investment){
		var mortgage_principle = finance_available;
	}

	if(mortgage_type == 'repayment'){
		var mortgage_repayments_monthly = Math.abs(PMT(mortgage_apr_monthly, mortgage_term_months, mortgage_principle));
	}
	else if(mortgage_type =='interest_only') {
		var mortgage_repayments_monthly = total_investment * mortgage_apr_monthly;
	}
	result_mortgage_repayments_monthly_elem.val(mortgage_repayments_monthly);

	// mortgage repayments yearly
	var mortgage_repayments_yearly = mortgage_repayments_monthly * 12;
	result_mortgage_repayments_yearly_elem.val(mortgage_repayments_yearly);

	// profit yearly
	var profit_yearly = yearly_rental_income - yearly_expenses - mortgage_repayments_yearly;
	result_profit_yearly_elem.val(profit_yearly);

	// profit monthly
	var profit_monthly = profit_yearly / 12;
	result_profit_monthly_elem.val(profit_monthly);

	// format currency
	$('#results input').formatCurrency({colorize:true, region: 'en-GB'});
}

$(document).ready(function(){
	// popover tooltips
    $('[data-toggle="popover"]').popover({
    	container: 'body'
	});

	// disable popover href="#"
	$('[data-toggle="popover"]').on('click', function(e) {e.preventDefault(); return true;});

	// copy buttons
	(function(){
    	new Clipboard('.copy');
	})();

	// init property investment calculator
	var pic = new PropertyInvestmentCalculator();
	pic.calculate();

	// bind settings on change
	$('#settings input').bind('input', function(){
  		pic.calculate();
	});

	// bind checkbox
	$('input[type="checkbox"]').change(function(){
		pic.calculate();
	});
});
