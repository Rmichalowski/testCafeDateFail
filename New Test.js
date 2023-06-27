fixture`test`
    .page('http://localhost:8080/simple_webapp_war_exploded/index.xhtml')
    .beforeEach(async t => {
        await t.setTestSpeed(0.7)
        await t.maximizeWindow();
    });

test('suchotest', async t=> {
    await t
     .navigateTo('http://localhost:8080/simple_webapp_war_exploded/index.xhtml')
     .click('#offersConsignDeadlineCalendar_input')
    .typeText('#offersConsignDeadlineCalendar_input',('270620231307'),{  speed: 0.2 })
})