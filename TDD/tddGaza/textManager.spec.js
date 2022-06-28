describe('텍스트 관리자입니다.', () => {
    let textManager;
    textManager = new TextManager();

    it('텍스트 값을 전달합니다.', ()=>{
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })

    it('텍스트 값을 수정합니다.', () => {
        const newValue = {data : "Hello Zebras!"}
        textManager.setValue(newValue);

        expect(textManager.getValue()).toBe(newValue.data);
    })
})