export interface FeeCategory {
  service: string;
  slug: string;
  description: string;
  feeRange: string;
  fixedFee?: number;
  disbursements: string[];
  stages: string[];
  timescale: string;
  handler: string;
}

export const fees: FeeCategory[] = [
  {
    service: 'Residential Conveyancing',
    slug: 'conveyancing',
    description: 'Our conveyancing fees cover the legal work involved in buying or selling a residential property. The figures below are indicative — we provide a tailored quote once we understand the specifics of your transaction.',
    feeRange: '£1,200 – £2,500 + VAT',
    disbursements: [
      'Land Registry fee: £100 – £500 (depending on property value)',
      'Search fees: £250 – £400',
      'Stamp Duty Land Tax: varies by property value',
      'Bank transfer fee: £35 + VAT',
      'ID verification: £15 + VAT per person',
    ],
    stages: [
      'Taking instructions and reviewing documentation',
      'Conducting property searches',
      'Reviewing contract documentation and raising enquiries',
      'Reporting to you and your mortgage lender',
      'Exchanging contracts',
      'Completing the transaction and registering your ownership',
    ],
    timescale: 'A straightforward transaction typically takes 8–14 weeks from instruction to completion. Complex matters involving leasehold, new-build, or chain delays may take longer.',
    handler: 'Your matter will be handled by Thomas Chen (Associate, Solicitor since 2015, CQS Accredited) or a supervised member of the conveyancing team. Thomas is supervised by James Pryce, Managing Partner.',
  },
  {
    service: 'Wills & Probate',
    slug: 'wills-probate',
    description: 'We offer transparent pricing for will drafting and probate administration. Fees depend on the complexity of your estate and whether the will is straightforward or involves trusts, business assets, or foreign property.',
    feeRange: '£350 – £5,000 + VAT',
    disbursements: [
      'Probate court fee: £300 (estates over £5,000)',
      'Sealed copies of grant: £1.50 each',
      'Valuation fees: varies (property, shares, etc.)',
      'Statutory advertisements (Trustee Act notices): £150 – £250',
      'Land Registry fees for property transfers: varies',
    ],
    stages: [
      'Taking instructions and gathering information about the estate',
      'Preparing the will or probate application',
      'Obtaining valuations of assets',
      'Submitting the application to the Probate Registry',
      'Collecting and distributing the estate assets',
      'Preparing estate accounts and finalising the administration',
    ],
    timescale: 'A simple will can be prepared within 1–2 weeks. Probate administration typically takes 6–12 months, depending on the complexity of the estate and HMRC processing times.',
    handler: 'Your matter will be handled by Sarah Whitfield (Partner, Solicitor since 1998, STEP Member) or a supervised member of the private client team.',
  },
  {
    service: 'Employment Tribunal Representation',
    slug: 'employment-tribunal',
    description: 'Employment tribunal claims are charged on an hourly rate basis, with an initial estimate provided at the outset. We offer fixed-fee initial consultations and settlement agreement reviews.',
    feeRange: '£250 – £350 per hour + VAT',
    disbursements: [
      'Counsel\'s fees (if barrister instructed): £1,500 – £5,000+',
      'Court bundle preparation and copying: £100 – £300',
      'Expert report fees (if required): varies',
      'Travel and subsistence for tribunal hearings: at cost',
    ],
    stages: [
      'Initial consultation and case assessment',
      'Drafting or responding to the ET1/ET3 claim form',
      'Disclosure and preparation of witness statements',
      'Attending case management hearings',
      'Mediation or judicial mediation (if appropriate)',
      'Preparation for and attendance at the final hearing',
    ],
    timescale: 'Employment tribunal claims typically take 6–12 months from lodging the claim to final hearing. Early conciliation through ACAS is a mandatory first step and may resolve the matter more quickly.',
    handler: 'Your matter will be handled by Emma Richardson (Senior Associate, Solicitor since 2010, Employment Lawyers Association Member). Complex cases may also involve Catherine Aldridge, Senior Partner.',
  },
];
