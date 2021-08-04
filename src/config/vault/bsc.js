export const pools = [
	{
		id: 'pots',
		name: 'Pots',
		token: 'POTS',
		tokenAddress: '0x3Fcca8648651E5b974DD6d3e50F61567779772A8',
		tokenDecimals: 18,
		rewardToken: 'potPOTS',
		rewardAddress: '0xa178972A8FfeFd6661179666134A2ba9B3DbE3B1',
		contractAddress: '0x35ebb629b6e65Cb7705B5E0695982D206898f195',
		prizePoolAddress: '0x679136C668a0478c4465Fc0744d050779E011269',
		prizeStrategyAddress: '0x31Ba553b8D5464dA551Fa63115b9f9eaA780Ec06',
		pricePerShare: 1,
		oracleId: 'POTS',
		apyId: 'pots-pots',
		vaultType: 'main',
		status: 'active',
		sponsorProjectName: 'Moonpot',
		sponsors: [
            {
                sponsorToken: 'CAKE',
                sponsorAddress: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                sponsorTokenDecimals: 18,
            },
            {
                sponsorToken: 'DODO',
                sponsorAddress: "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
                sponsorTokenDecimals: 18,
            },
            {
                sponsorToken: 'BIFI',
                sponsorAddress: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
                sponsorTokenDecimals: 18,
            }
		],
		sponsorToken: 'CAKE',
		bonusRewardId: 0,
		bonusToken: 'POTS',
		bonusAddress: '0x3Fcca8648651E5b974DD6d3e50F61567779772A8',
		bonusTokenDecimals: 18,
		strategyAddress: '0x97e5d50Fe0632A95b9cf1853E744E02f7D816677',
		strategyCard: {
			title: "Ziggy’s Pot Strategy",
			body: "By staking $POTS in Ziggy’s Pot, you receive an APY generated by 5% of the revenue of all the other Moonpots.\n\nAs there is only one Moonpot, at the moment, that means your APY is being generated by the CAKE Moonpot. In the future there will be multiple Moonpots. all generating revenue for Ziggy’s Pot. Ziggy’s Pot buys $POTS off the market with Moonpot.com’s revenue and gives that to $POTS stakers as interest.\n\nZiggy’s Pot also has a monthly Prize Draw where 10 lucky winners will get a share of all the different tokens from that month’s Moonpots. The September 1 Prize includes $POTS, $BIFI, $CAKE and $DODO, so far."
		}
	},
	{
		id: 'cake',
		name: 'Cake',
		token: 'CAKE',
		tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
		tokenDecimals: 18,
		rewardToken: 'potCAKEv2',
		rewardAddress: '0x9273be9c180B0271cc2c90E5BF99477B573Fe904',
		contractAddress: '0x30d55CE74E2dcd1B0Ff37214a6978FCFc06aA499',
		prizePoolAddress: '0xe434865d97834e78bF5d37CA7788C4457a2bCd66',
		prizeStrategyAddress: '0x4ec3C5e17969D74349faa3EDcFCd5457f5a18f5e',
		pricePerShare: 1,
		oracleId: 'Cake',
		apyId: 'cake-cakev2',
		vaultType: 'main',
		status: 'active',
		sponsorProjectName: 'Moonpot',
        sponsors: [
            {
                sponsorToken: 'POTS',
                sponsorAddress: '0x3Fcca8648651E5b974DD6d3e50F61567779772A8',
                sponsorTokenDecimals: 18,
            }
        ],
		sponsorToken: 'POTS',
		bonusRewardId: 2,
        bonusToken: 'POTS',
        bonusAddress: '0x3Fcca8648651E5b974DD6d3e50F61567779772A8',
        bonusTokenDecimals: 18,
		strategyAddress: '0x97e5d50Fe0632A95b9cf1853E744E02f7D816677',
		strategyCard: {},
		earningsBreakdown: true,
	},
	{
		id: 'cake-dodo',
		name: 'Cake',
		token: 'CAKE',
		tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
		tokenDecimals: 18,
		rewardToken: 'potCAKEv2',
		rewardAddress: '0x9273be9c180B0271cc2c90E5BF99477B573Fe904',
		contractAddress: '0x30d55CE74E2dcd1B0Ff37214a6978FCFc06aA499',
		prizePoolAddress: '0xe434865d97834e78bF5d37CA7788C4457a2bCd66',
		prizeStrategyAddress: '0x4ec3C5e17969D74349faa3EDcFCd5457f5a18f5e',
		pricePerShare: 1,
		oracleId: 'Cake',
		apyId: 'cake-cakev2',
		vaultType: 'main',
		status: 'eol',
		sponsorProjectName: 'DODO',
        sponsors: [
            {
                sponsorToken: 'DODO',
                sponsorAddress: '0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2',
                sponsorTokenDecimals: 18,
            }
        ],
		sponsorToken: 'DODO',
		bonusRewardId: 0,
		bonusToken: 'DODO',
		bonusAddress: '0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2',
		bonusTokenDecimals: 18,
		boostRewardId: 1,
		boostToken: 'WBNB',
		boostAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
		boostTokenDecimals: 18,
		strategyAddress: '0x97e5d50Fe0632A95b9cf1853E744E02f7D816677',
		winnersTransaction: '0x2a09a9883824bf56f934d1e950e8e01a90f6d2f0ec222e6773b89927896822e4',
	},
	{
		id: 'cake-bifi',
		name: 'Cake',
		token: 'CAKE',
		tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
		tokenDecimals: 18,
		rewardToken: 'potCAKE',
		rewardAddress: '0x81b554A2C3aD52630Cf1Ca56cad562EC4A551873',
		contractAddress: '0xd582755Bf7dD8427bE31621e4af144F1B8fa7Adf',
		prizePoolAddress: '0x08FC93C37a2608c613A4f32490e29db6886F059E',
		prizeStrategyAddress: '0x59c6f0c99687Ad431aF3Eb089647E8F1273fe05c',
		pricePerShare: 1,
		oracleId: 'Cake',
		apyId: 'cake-cakev2',
		vaultType: 'main',
		status: 'eol',
		sponsorProjectName: 'Beefy.Finance',
        sponsors: [
            {
                sponsorToken: 'BIFI',
                sponsorAddress: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
                sponsorTokenDecimals: 18,
            }
        ],
		sponsorToken: 'BIFI',
		bonusToken: 'BIFI',
		bonusAddress: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
		bonusTokenDecimals: 18,
		migrationNeeded: true,
		migrationContractAddress: '0x30d55CE74E2dcd1B0Ff37214a6978FCFc06aA499',
		migrationRewardAddress: '0x9273be9c180B0271cc2c90E5BF99477B573Fe904',
		migrationLearnMoreUrl: 'https://moonpot.com/alpha/learn/how-to-move-cake-from-the-retired-cake-moonpot/',
		migrationExplainer: ['After you move your CAKE today, you won’t have to move it again. You will be entered into future Moonpots without having to make transactions each week.',
			'We are giving away a $50k BNB Super Boost on the new CAKE Moonpot, to make it worthwhile.'],
		winnersTransaction: '0x770ddd1d57b19437a0cf563923cb3799d31a5ca3e20a3080e4286d4fede54109',
	},

];