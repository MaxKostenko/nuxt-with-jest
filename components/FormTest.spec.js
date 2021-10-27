import {shallowMount} from '@vue/test-utils';
import FormTest from '~/components/FormTest';

describe('FormTest', () => {
  it('test', async () => {
    const FormTestWrapper = await shallowMount(FormTest);
    await FormTestWrapper.find('label').trigger('click');
    expect(FormTestWrapper.find('input').element.checked).toBe(true);
    expect(FormTestWrapper.text()).toContain('hoy!');
  });

  it('test 2', async () => {
    const FormTestWrapper = shallowMount(FormTest);
    await FormTestWrapper.find('input').trigger('click');
    expect(FormTestWrapper.find('input').element.checked).toBe(true);
    expect(FormTestWrapper.text()).toContain('hoy!');
  });

  it('test 3', async () => {
    const FormTestWrapper = shallowMount(FormTest);
    await FormTestWrapper.find('input').trigger('input');
    expect(FormTestWrapper.text()).toContain('hoy!');
  });
});
