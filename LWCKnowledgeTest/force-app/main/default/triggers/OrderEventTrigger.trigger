trigger OrderEventTrigger on Order_Event__e (after insert) 
{  
    // List to hold all tasks to be created.
    List<Task> tasks = new List<Task>();
    // Iterate through each notification.
    for (Order_Event__e oe : Trigger.New) {
        if (oe.Has_Shipped__c == true) {
            // Create Task to dispatch new team.
            Task tk = new Task();
              tk.Priority = 'Medium';
              tk.Subject = 'Follow up on shipped order 105';
              tk.OwnerId = oe.CreatedById;
            tasks.add(tk);
        }
   }
    // Insert all tasks corresponding to events received.
    insert tasks;
}