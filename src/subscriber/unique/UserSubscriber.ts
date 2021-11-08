import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent, RemoveEvent, TransactionStartEvent, TransactionCommitEvent, TransactionRollbackEvent } from 'typeorm/index';
import { UniqueUid } from "src/model/entity/unique/UniqueUid";


@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UniqueUid>
{

  listenTo()
  {
    return UniqueUid;
  }

  beforeInsert(event: InsertEvent<UniqueUid>): Promise<any> | void
  {
    console.log('beforeInsert UniqueUid : ', event.entity);
  }

  afterInsert(event: InsertEvent<UniqueUid>): Promise<any> | void
  {
    console.log('afterInsert UniqueUid : ', event.entity);
  }

  /* afterUpdate(event: UpdateEvent<UniqueUid>)
  {
    console.log(`AFTER ENTITY UPDATED: `, event.entity);
  }

  beforeRemove(event: RemoveEvent<UniqueUid>)
  {
    console.log(`BEFORE ENTITY WITH ID ${event.entityId} REMOVED: `, event.entity);
  }

  afterRemove(event: RemoveEvent<any>)
  {
    console.log(`AFTER ENTITY WITH ID ${event.entityId} REMOVED: `, event.entity);
  }

  beforeTransactionStart(event: TransactionStartEvent)
  {
    console.log(`BEFORE TRANSACTION STARTED: `, event);
  }

  afterTransactionStart(event: TransactionStartEvent)
  {
    console.log(`AFTER TRANSACTION STARTED: `, event);
  }

  beforeTransactionCommit(event: TransactionCommitEvent)
  {
    console.log(`BEFORE TRANSACTION COMMITTED: `, event);
  }

  afterTransactionCommit(event: TransactionCommitEvent)
  {
    console.log(`AFTER TRANSACTION COMMITTED: `, event);
  }

  beforeTransactionRollback(event: TransactionRollbackEvent)
  {
    console.log(`BEFORE TRANSACTION ROLLBACK: `, event);
  }

  afterTransactionRollback(event: TransactionRollbackEvent)
  {
    console.log(`AFTER TRANSACTION ROLLBACK: `, event);
  } */
}