


export default function FAQ() {

    return (
        <div className="lg:p-40 md:p-20 sm:p-8 flex flex-wrap bg-lotion">

            <h1 className="text-5xl font-bold w-full p-5">FAQ</h1>

            <div className="p-5 sm:w-full md:w-1/2">
                <h3 className="font-bold">How does the 30-day free trial work?</h3>
                <p>You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.</p>
            </div>

            <div className="p-5 sm:w-full md:w-1/2 ">
                <h3 className="font-bold">What is a “Financial Account”?</h3>
                <p>Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes.</p>
                <p className="mt-3">They’re designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.</p>
            </div>
            <div className="p-5 sm:w-full md:w-1/2 ">
                <h3 className="font-bold">Will I be able to cancel my account if I don’t use Pulse?</h3>
                <p>Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.</p>
            </div>
            <div className="p-5 sm:w-full md:w-1/2 ">
                <h3 className="font-bold">If I upgrade an existing account, do I get another free trial?</h3>
                <p>Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle.</p>
            </div>
            <div className="p-5 sm:w-full md:w-1/2 ">
                <h3 className="font-bold">Do I have to commit to a long-term contract?</h3>
                <p>No. There is no contract when you use Pulse, other than agreeing to our Terms of Service.</p>
            </div>
            <div className="p-5 sm:w-full md:w-1/2 ">
                <h3 className="font-bold">What types of payments do you accept?</h3>
                <p>We accept payments made online using Visa, Mastercard, Discover, and American Express.</p>
            </div>
        </div>
    )

}