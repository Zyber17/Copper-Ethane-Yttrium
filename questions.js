var questions = [];

questions.word = [
	{ q:"Which of the following is not a branch of chemistry?",
a:{
c:"Application chemistry",f:["Physical chemistry","Analytic chemistry","Biochemistry "]
},
p:3
},
 
{ q:"Which of the following is not a chemical reaction?",
a:{
c:"Boiling",f:["Oxidization","Combustion","Decomposition"]
},
p:5
},
 
 
{ q:"Which of the following is not a physical change?",
 a:{
c:"Burning",f:["Shredding","Ionization","Boiling"]

},
p:4
},
 
 
{ q:"Which of the following is not part of the scientific method?",
a:{
c:"Formulating laws",f:["Publishing results","Studying systems","Formulating hypotheses"]

},
p:5
},

 
{ q:"Which of the following is not a basic law of matter and energy?",
a:{
c:"Law of transformation of mass",f:["Law of definite proportions","Law of multiple proportions","Law of conservation of mass"]
},
p:3
},


{ q:"Which of the following are components of an atom?",
a:{
c:"All of the above",f:["Protons","Neutrons","Electrons"]

},
p:4
},


{ q:"Which of the following has the largest mass? (Hint: may be barely larger, but still calculable)",
a:{
c:"Neutron",f:["Electron","Proton","Quark"]

},
p:5
},
 

{ q:"The atomic number is the number of...",
a:{
c:"Protons",f:["Neutrons","Protons + neutrons","Protons + electrons"]
},
p:3
},


{ q:"The mass number is the number of",
a:{
c:"Protons + neutrons",f:["Protons + electrons","Protons","Neutrons"]
},
p:4
},


{ q:"Cathode rays are composed of...",
a:{
c:"Electrons",f:["Beta particle","Protons","Neutrons"]
},
p:5
},


{ q:"In the periodic table, elements are ordered...",
a:{
c:"according to increasing atomic number",f:["according to increasing atomic mass","based on the order of discovery","according to Mendeleev’s original design"]
},
p:3
},


{ q:"Noble gases are best known for being",
a:{
c:"Unreactive",f:["Radioactive","Metalic","Mettaloids"]
},
p:3
},


{ q:"Covalent bonds consist of",
a:{
c:"A shared electron pair",f:["A shared electron","Two different ions","An octet of electrons"]
},
p:4
},

{ q:"Bonds that have between 5 and 50% ionic character are classified as",
a:{
c:"Polar covalent",f:["Nonpolar covalent","Ionic","Flat"]
},
p:3
},
{ q:"What is the formula for aluminum sulfide?",
a:{
c:"Al2S3",f:["Al2(SO3)2","AlS2","Al3S4"]
},
p:5
},


{ q:"What is the compound name for aluminum sulfide?",
a:{
c:"Aluminum sulfide",
f:["Al2S3",
"AlS2",
"Al3S4"]
},
p:3
},


{ q:"What is the compound name for PbCl2",
a:{
c:"Lead(II) chloride",f:["Lead chloride","Lead dichloride","Monolead dichloride"]
},
p:3
},


{ q:"What is the formula for aluminum sulfite?",
a:{
c:"Al2(SO3)3",f:["AlSO3","Al3(SO3)2","Al2(SO4)3"]
},
p:4
},

{ q:"What is the formula for ammonium phosphate?",
a:{
c:"(NH4)3PO4",f:["NH4PO4","(NH4)3PO3","(NH3)3PO4"]
},
p:4
},

{ q:"What type of reaction is the following equation?  Cl2(aq)  2NaI(aq) → I2(aq)  2NaCl(aq)",
a:{
c:"Single displacement",f:["Double displacement","Synthesis","Dehydration"]
},
p:5
},

{ q:"What type of reaction is the following equation? 3Mg(s)  N2(g) → Mg3N2(s)",
a:{
c:"Synthesis",f:["Double displacement","Single Displacement","Combustion"]
},
p:3
},

{ q:"What type of reaction is the following equation? C2H5OH(aq) + 3O2(g) → 2CO2(g) + 3H2O(l)",
a:{
c:"Combustion",f:["Double Displacement","Single Displacement","Dehydration"]
},
p:4
}
];

questions.math = [
{ q:"How many atoms are there in 2.50 mol of hydrogen?",
a:{
c:"1.51 x 10^24 atoms",f:["6.02 x 10^23 atoms","4.61 x 10^23 atoms","2.47 x 10^25 atoms"]
},
p:5
},

{ q:"How many moles of CO2 are formed from 1.0 mol of C2H2 being burned?",
a:{
c:"2.0 mol",f:["2.4 mol","1.7 mol","3.3 mol"]
},
p:4
},


{ q:"How many atoms are there in 2.50 mol of uranium?",
a:{
c:"1.51 x 10^24 atoms",f:["6.02 x 10^23 atoms","6.41 x 10^23 atoms","3.16 x 10^25 atoms"]
},
p:4
},


{ q:"How many moles exist in 107 g of sodium?",
a:{
c:"4.65 mol",f:["4.14 mol","5.41 mol","7.35 mol"]
},
p:4
},


{ q:"What is the formula for aluminum sulfide?",
a:{
c:"Al2S3",f:["Al2(SO3)2","AlS2","Al3S4"]
},
p:5
},


{ q:"What is the compound name for aluminum sulfide?",
a:{
c:"Aluminum sulfide",
f:["Al2S3",
"AlS2",
"Al3S4"]
},
p:3
},


{ q:"What is the compound name for PbCl2",
a:{
c:"Lead(II) chloride",f:["Lead chloride","Lead dichloride","Monolead dichloride"]
},
p:3
},


{ q:"What is the formula for aluminum sulfite?",
a:{
c:"Al2(SO3)3",f:["AlSO3","Al3(SO3)2","Al2(SO4)3"]
},
p:3
},

{ q:"What is the formula for ammonium phosphate?",
a:{
c:"(NH4)3PO4",f:["NH4PO4","(NH4)3PO3","(NH3)3PO4"]
},
p:4
},

{ q:"What type of reaction is the following equation?  Cl2(aq)  2NaI(aq) → I2(aq)  2NaCl(aq)",
a:{
c:"Single displacement",f:["Double displacement","Synthesis","Dehydration"]
},
p:5
},

{ q:"What type of reaction is the following equation? 3Mg(s)  N2(g) → Mg3N2(s)",
a:{
c:"Synthesis",f:["Double displacement","Single Displacement","Combustion"]
},
p:3
},

{ q:"What type of reaction is the following equation? C2H5OH(aq)  3O2(g) → 2CO2(g)  3H2O(l)",
a:{
c:"Combustion",f:["Double Displacement","Single Displacement","Dehydration"]
},
p:4
},

{ q:"How many moles of CO2 are formed from 1.0 mol of C2H2 being burned?",
a:{
c:"2.0 mol",f:["2.4 mol","1.7 mol","3.3 mol"]
},
p:4
}



];