import React from 'react';

const terms = [
  "Rights of Admission Reserved.",
  "RESHAPE FITNESS LLP is open to members of all communities irrespective of their caste or creed.",
  "All fees will be received strictly in advance at the time of admission.",
  "Services Tax will be charged as applicable.",
  "Fees once paid will not be refunded under any circumstances.",
  "Members shall use the equipment/facilities with due care and caution and keep the same in its proper place after use. Any loss or damage to the equipment resulting from careless handling will have to be made good by the concerned member/s.",
  "Equipment installed at RESHAPE FITNESS LLP is of high quality and is manufactured & supplied by agencies from outside India. Therefore, servicing (in case of breakdown) & maintenance duration may be affected due to supply of spares/customs clearance etc., or any other reason beyond the control of RESHAPE FITNESS LLP.",
  "Members shall avail the facilities at their own risk and liability, and RESHAPE FITNESS LLP will not be liable for any loss or damage arising from the same.",
  "All the ancillary non-paid services being used by a member are at his/her own risk (including but not limited to shower, valet parking, etc.).",
  "Valuables/electronic gadgets/belongings brought and given by the members to keep in the locker for safe custody will be accepted strictly at the concerned member's risk. RESHAPE FITNESS LLP will not be responsible for any loss or damage to the same.",
  "Medical checkups are advisable from time to time - a no-objection certificate from your physician is mandatory at the time of joining and/or subsequently from time to time at RESHAPE FITNESS LLP's request.",
  "During the program, regular medical check-ups and/or treatment are recommended for members at their own cost.",
  "Members enrolling without disclosing a history of previous illness/ailments/operations/prior diet programs/post-pregnancy, etc., do so at their own risk.",
  "Any ailment occurring during the period of membership, after admission, has to be reported to RESHAPE FITNESS LLP immediately.",
  "Extension of the program is not permissible if the member is absent or for any other reason whatsoever at RESHAPE FITNESS LLP for part/all days missed out during the period of membership.",
  "Names of those members who are in arrears of fees will be struck off from the register, and re-admission will be granted only after payment of arrears. It may also be subject to penalties, interest, or late fees.",
  "Inter-branch transfer can be given by paying the difference in fees between one branch and another, at the discretion of RESHAPE FITNESS LLP. However, no refunds in case of difference in fees are permitted.",
  "RESHAPE FITNESS LLP has the right to enforce rules & regulations from time to time, and they are subject to change according to the prevailing conditions in the center. A notice put up on the Notice Board will be deemed to have been served on all members.",
  "Space available for usage to members may be increased/decreased as per circumstances/availability.",
  "Time available for usage/training can be increased/decreased as per circumstances/availability.",
  "Dress Code:",
  "For Ladies: Slacks/Tights and T-shirts/track suits.",
  "For Gents: Track suits/shorts and T-shirts.",
  "Outside footwear will not be allowed in the gym hall.",
  "Members are requested to carry their own towel and drinking water for hygienic reasons.",
  "Results of various training programs, classes, or specialized programs vary from person to person and are not guaranteed.",
  "Admission fees of a member will be valid only for three months after the expiry of membership.",
  "No extra facilities will be provided to any specific member/s other than what the member has enrolled for.",
  "Whenever there is a power cut or load shedding, RESHAPE FITNESS LLP is not bound to provide any alternative source of power (generator, etc.).",
  "Members should maintain complete silence in the Gym premises.",
  "Use of mobile phones inside the Gym hall is strictly prohibited, and in the other areas of RESHAPE FITNESS LLP, it should be kept in silent mode.",
  "Members carrying out their own workout pattern do so at their own risk. RESHAPE FITNESS LLP is not responsible for any accidental damage caused due to an unadvised exercise schedule and/or use of exercise equipment.",
  "RESHAPE FITNESS LLP can contact members for any kind of promotion/offer/scheme, etc., even after he/she ceases to be a member.",
  "The member agrees that in the event of any dispute between RESHAPE FITNESS LLP & the member, no proceeding shall lie against RESHAPE FITNESS LLP in any court, forum, or tribunal unless such dispute is referred to the sole independent arbitrator appointed by RESHAPE FITNESS LLP in accordance with the Arbitration & Conciliation Act, 1996. The venue of the Arbitration shall be Mumbai, and the cost of the arbitral proceedings and legal fees payable to the arbitrator shall be borne equally by RESHAPE FITNESS LLP & the member. The arbitral award passed by the arbitrator shall be binding on RESHAPE FITNESS LLP and the member.",
  "Membership is valid only after signing a disclaimer and/or disclaimer form/s.",
  "It is the responsibility of the member to collect the proper electronic payment receipt after making the payment; otherwise, he will not be permitted to use the services.",
  "The members are permitted to use only the services mentioned on the electronic payment receipt and not otherwise.",
  "The member will not provoke/induce any of the RESHAPE FITNESS LLP staff to give him any services for which he has not paid the adequate fees.",
  "Members are not allowed to bring or accompany any person on the gym floor who is not a member of the gym.",
  "Members are not allowed to bring any child or animal/bird, etc., into the club."
];

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <ul className="list-disc pl-5 space-y-2">
        {terms.map((term, index) => (
          <li key={index} className="listborder">{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default TermsAndConditions;
