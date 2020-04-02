/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *    STEP1, STEP3, STEP2. step 1 is first becuase it is not in the snooze function then the next
 *    is step 3 because it is also not the the snooze function and step 2 is last because
 *    it has the setTimeout on it which causes a delay
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *    STEP1, STEP3, STEP2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    I was not correct. I thought the function would print them first but it seems like 
 *    those console logs are still taking time because they need to be ran
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

